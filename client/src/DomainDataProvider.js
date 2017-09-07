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
    products: []
  }

  componentDidMount () {
    this.getAllProducts()
  }

  getAllProducts = () =>
    ServerApi.getAllProducts(products =>
      this.setState({
        isLoaded: true,
        products: products
      }))

  addProduct = (newProduct) =>
    ServerApi.addProduct(newProduct, this.getAllProducts)

  updateProduct = (product) =>
    ServerApi.updateProduct(product, this.getAllProducts)

  findProductById = (productId) => {
    for (let i = 0; i < this.state.products.length; i++) {
      const currentProduct = this.state.products[i]
      if (productId === currentProduct._id) {
        return currentProduct
      }
    }
  }

  render () {
    const domainData = {
      isLoaded: this.state.isLoaded,
      products: this.state.products,
      addProduct: this.addProduct,
      findProductById: this.findProductById,
      updateProduct: this.updateProduct
    }

    return this.state.isLoaded ? <Layout domainData={domainData} /> : null
  }
}

export default DomainDataProvider
