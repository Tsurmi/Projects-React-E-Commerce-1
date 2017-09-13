const ajaxRequest = (uri, method, body) => {
  const headers = new Headers({
    'Content-Type': 'application/json'
  })

  const options = {
    headers,
    method: method,
    body: JSON.stringify(body)
  }

  return fetch(`/api/${uri}`, options)
    .then(response => response.json())
    .then(json => json.data)
}

const getAllProducts = () => ajaxRequest('products', 'GET')

const addProduct = (newProduct) => ajaxRequest('products', 'POST', newProduct)

const deleteProduct = (productId) => ajaxRequest(`products/${productId}`, 'DELETE')

const updateProduct = (product) => ajaxRequest(`products/${product._id}`, 'PUT', product)

const signUpUser = (user) => {
  const headers = new Headers({
    'Content-Type': 'application/json'
  })

  const options = {
    headers,
    method: 'POST',
    body: JSON.stringify(user)
  }

  return fetch('/api/signup', options)
    .then(response => response.json())
    .then(json => json.data)
    .then(data => {
      console.log(data)
      return data
    })
    .catch(err => console.log(err))
}

const loginUser = (email, password) => {
  const headers = new Headers({
    'Content-Type': 'application/json'
  })

  const options = {
    headers,
    method: 'POST',
    body: JSON.stringify({email, password})
  }

  return fetch('/api/login', options)
    .then(response => response.json())
    .then(json => json.data)
    .then(data => {
      console.log(data)
      return data
    })
    .catch(err => console.log(err))
}

export {getAllProducts, addProduct, updateProduct, deleteProduct, signUpUser, loginUser}
