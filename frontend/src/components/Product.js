import React from 'react'
import {Link} from 'react-router-dom'
import {Card} from 'react-bootstrap'
import Rating from './Rating' 
// import {Link} from 'react-router-dom'


// const Product = ({product}) => {
// in the above line it is mandatory to write product in curly brases 
// 
const Product = ({product}) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/product/${product._id}`}>
                {/* {console.log(product.image)} */}
                <Card.Img src={product.image} variant='top'/>
            </Link>

           <Card.Body>
            <Link to={`/Product/${product._id}`}>
                  <Card.Title as='div'>
                      <strong>{product.name}</strong>
                  </Card.Title>
             </Link>
             
            <Card.Text as='div'>
                <Rating 
                value={product.rating}
                text={`${product.numReviews} reviews`}
                />
            </Card.Text>
             <Card.Text as='h5'> &#x20B9; {product.price} </Card.Text>
        </Card.Body>
     </Card>
    )
}

export default Product