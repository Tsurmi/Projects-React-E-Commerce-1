const getAllProducts = (callback) => {
  const options = {
    method: 'GET'
  }
  // fetching the products is the job of this file

  fetch('/api/products', options)
    .then(response => response.json())
    .then(json => callback(json.data))
}

const addProduct = (product, callback) => {
  const headers = new Headers({
    'Content-Type': 'application/json'
  })

  const options = {
    headers,
    method: 'POST',
    body: JSON.stringify(product)
  }

  fetch('/api/products', options)
    .then(response => response.json())
    .then(json => callback(json.data))
}

const updateProduct = (product, callback) => {
  const headers = new Headers({
    'Content-Type': 'application/json'
  })

  const options = {
    headers,
    method: 'PUT',
    body: JSON.stringify(product)
  }

  fetch(`/api/products/${product._id}`, options)
    .then(response => response.json())
    .then(json => callback(json.data))
}

export {getAllProducts, addProduct, updateProduct}
