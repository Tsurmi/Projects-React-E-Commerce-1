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
    user: null,
    cart: {},
    address: {
      'billing': {},
      'shipping': {}
    }
  }

  methods = {
    getAllProducts: () =>
      ServerApi.getAllProducts()
        .then(products =>
          this.setState({
            isLoaded: true,
            products: products
          })),

    addProduct: (newProduct) =>
      ServerApi.addProduct(newProduct)
        .then(this.methods.getAllProducts),

    updateProduct: (product) =>
      ServerApi.updateProduct(product)
        .then(this.methods.getAllProducts),

    deleteProduct: (productId) =>
      ServerApi.deleteProduct(productId)
        .then(this.methods.getAllProducts),

    findProductById: (productId) => {
      for (let i = 0; i < this.state.products.length; i++) {
        const currentProduct = this.state.products[i]
        if (productId === currentProduct._id) {
          return currentProduct
        }
      }
    },

    signupUser: (user) =>
      ServerApi.signupUser(user)
        .then((loggedInUser) => {
          this.setState({
            user: loggedInUser
          })
          return loggedInUser
        }),

    loginUser: (email, password) =>
      ServerApi.loginUser(email, password)
        .then((loggedInUser) => {
          this.setState({
            user: loggedInUser
          })
          return loggedInUser
        }),

    getUser: () =>
      ServerApi.getUser()
        .then(user => {
          this.setState({user})
          return user
        }),

    logout: () =>
      ServerApi.logout()
        .then(() => this.setState({user: null})),

    addToCart: (productId) => {
      const cart = this.state.cart
      cart[productId] = cart[productId] || 0
      cart[productId] += 1
      this.setState({cart})
    },
    removeFromCart: (productId) => {
      const cart = this.state.cart
      if (cart[productId] > 1) {
        cart[productId] -= 1
      } else {
        delete cart[productId]
      }
      this.setState({cart})
    },
    totalCart: () => {
      const products = this.state.products
      const cart = this.state.cart
      return products.filter((product) => cart[product._id])
        .reduce((sum, product) => sum + (product.price * cart[product._id]), 0).toFixed(2)
    },
    updateAddressField: (value, field, type) => {
      const address = this.state.address
      address[type][field] = value
      this.setState({address})
    }
  }

  componentDidMount () {
    this.methods.getAllProducts()
    ServerApi.getUser()
      .then(user =>
        this.setState({
          user: user
        }))
  }

  render () {
    const domainData = {
      ...this.state,
      ...this.methods,
      loggedIn: this.state.user != null,
      loggedOut: this.state.user == null
    }

    return this.state.isLoaded ? <Layout domainData={domainData} /> : null
  }
}

export default DomainDataProvider
