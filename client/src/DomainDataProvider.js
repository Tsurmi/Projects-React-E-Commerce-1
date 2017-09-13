import React, {Component} from 'react'
import Layout from './components/structure/Layout'
import * as ServerApi from './lib/serverApi'
// * refers to everything. So we are saying import everything from lib serverApi
// and create an object

// DomainDataProvider is only concerned with establishing STATE, populating
// the STATE then passing the STATE down

class DomainDataProvider extends Component {
  state = {
    isLoaded: false,
    products: [],
    user: null
  }

  componentDidMount () {
    this.getAllProducts()
  }

  getAllProducts = () =>
    ServerApi.getAllProducts()
      .then(products =>
        this.setState({
          isLoaded: true,
          products: products
        }))

  addProduct = (newProduct) =>
    ServerApi.addProduct(newProduct)
      .then(this.getAllProducts)

  updateProduct = (product) =>
    ServerApi.updateProduct(product)
      .then(this.getAllProducts)

  deleteProduct = (productId) =>
    ServerApi.deleteProduct(productId)
      .then(this.getAllProducts)

  findProductById = (productId) => {
    for (let i = 0; i < this.state.products.length; i++) {
      const currentProduct = this.state.products[i]
      if (productId === currentProduct._id) {
        return currentProduct
      }
    }
  }

  signUpUser = (user) =>
    ServerApi.signUpUser(user)
      .then((loggedInUser) => {
        this.setState({
          user: loggedInUser
        })
        return loggedInUser
      })

  loginUser = (email, password) =>
    ServerApi.loginUser(email, password)
      .then((loggedInUser) => {
        this.setState({
          user: loggedInUser
        })
        return loggedInUser
      })

  render () {
    const domainData = {
      isLoaded: this.state.isLoaded,
      products: this.state.products,
      addProduct: this.addProduct,
      findProductById: this.findProductById,
      updateProduct: this.updateProduct,
      deleteProduct: this.deleteProduct,
      signUpUser: this.signUpUser,
      loginUser: this.loginUser
    }

    return this.state.isLoaded ? <Layout domainData={domainData} /> : null
  }
}

export default DomainDataProvider
