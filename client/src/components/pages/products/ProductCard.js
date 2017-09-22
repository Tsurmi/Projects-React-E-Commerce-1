import PropTypes from 'prop-types'
import injectSheet from 'react-jss'
import React from 'react'
import * as AppPropTypes from '../../../lib/propTypes'

const styles = {
  productItem: {
    background: '#ecf0f1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    width: '27%',
    margin: 15
  },
  thumbnail: {
    width: '100%'
  },
  productTitle: {
    textAlign: 'center',
    color: 'black'
  },
  imageTitle: {
    background: '#2980b9',
    fontFamily: 'Palatino'
  },
  categoryOne: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: 'Palatino'
  },

  p: {
    fontSize: 12,
    paddingRight: 10
  },
  price: {
    fontSize: 20
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    marginBottom: 30,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#34495e',
    color: 'white',
    border: 'solid #34495e 2px',
    padding: 10,
    fontSize: 12,
    borderRadius: 4
  }
}

const enhancer = injectSheet(styles)

const ProductCard = (props, i) =>
  <div className={props.classes.productItem} key={i}>
    <div className={props.classes.imageTitle}>
      <img className={props.classes.thumbnail} src={props.product.image} />
      <h1 className={props.classes.productTitle}> {props.product.name}</h1>
    </div>
    <div className={props.classes.categoryOne}>
      <h3 className={props.classes.p}> Blend Type: </h3>
      <h5>{props.product.category}</h5>
    </div>
    <h3 className={props.classes.price}> ${props.product.price}</h3>
    <div>
      <button onClick={props.onAddToCart}>Add To Cart</button>
    </div>
    <div className={props.classes.buttonContainer}>
      <button className={props.classes.button} onClick={props.onEdit}>Edit</button>
      <button className={props.classes.button} onClick={props.onDelete}>Delete</button>
    </div>
  </div>
ProductCard.propTypes = {
  classes: PropTypes.object.isRequired,
  product: AppPropTypes.product,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired
}

export default enhancer(ProductCard)
