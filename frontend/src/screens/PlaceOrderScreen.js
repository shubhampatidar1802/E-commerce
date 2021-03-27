import React,{ useEffect } from 'react'
import { Link } from 'react-router-dom'
import {Button , Row , Col , ListGroup , Image , Card } from 'react-bootstrap'
import {useDispatch , useSelector } from 'react-redux'
import Message from '../components/Message'
import CheakoutSteps from '../components/CheakoutSteps'
import {createOrder} from '../actions/orderActions'

const PlaceOrderScreen = () => {
 
  const dispatch =  useDispatch()
  const cart = useSelector((state) => state.cart)

  const PlaceOrderHandler = () =>{
  dispatch(createOrder({
    orderItems:cart.cartItems,
    shippingAddress:cart.shippingAddress,
    paymentMethod:cart.paymentMethod,
    itemsPrice:cart.itemsPrice,
    shippingPrice:cart.shippingPrice,
    taxPrice:cart.taxPrice,
    totalPrice:cart.totalPrice,
  }))
}  

    return (
        <>
          <CheakoutSteps step1 step2 step3 step4 />  
          <Row>
              <Col md={8}>
                <ListGroup.Item>
                   <h4>Shipping</h4>  
                   <p> 
                   <strong>Address : </strong>
                   {cart.shippingAddress.address}
                   &nbsp;,{cart.shippingAddress.city}&nbsp;,
                    {cart.shippingAddress.postalCode}
                   </p>
                   <p>
                    <strong>Mobile : </strong>
                    {cart.shippingAddress.mobileNo}
                  </p>
                   
                </ListGroup.Item> 

                <ListGroup.Item>
                  <h4>Payment Method</h4>
                  <strong>Method: </strong>
                  {cart.paymentMethod}
                </ListGroup.Item>            

                  <ListGroup.Item>
                   
                        <h2>Order Item</h2>
                        {cart.cartItems.length === 0 ?
                        <Message>Your cart is empty</Message> : (
                            <ListGroup variant='flush'>
                              {cart.cartItems.map((item , index) => (
                                
                             <ListGroup.Item key={index}>
                                 {console.log(item.name)}
                                 <Row>
                                    <Col md={1}>
                                    <Image src={item.image} alt= {item.name}
                                   fluid rounded />
                                    </Col>
                                    <Col>
                                   <Link to={`/product/${item.product}`}>   
                                     {item.name}
                                   </Link>
                                   </Col>
                         
                                   <Col md={4}>
                                    {item.qty} x {item.price} = {item.qty *item.price}
                                   </Col>
                                 
                                   </Row>
                                    </ListGroup.Item>
                                    ))}
                            </ListGroup>
                        )}
                  </ListGroup.Item>  

              </Col>
              <Col md={4}>
                 <Card>
                   <ListGroup variant='flush'>
                     <ListGroup.item>
                       <h4>Order Summary</h4>
                     </ListGroup.item>
                     </ListGroup>
                     <ListGroup.item>
                       <Row>
                       <Col>Items</Col>
                       <Col>{cart.itemsPrice}</Col>
                       </Row>
                     </ListGroup.item>

                   <ListGroup.item>
                     <Row>
                     <Col>Total</Col>
                     <Col>&#8377;{cart.shippingPrice}</Col>
                     </Row>
                    </ListGroup.item>
                   <ListGroup.item>
                     <Button type='button' className='btn-block' disabled={cart.cartItems===0} onClick={PlaceOrderHandler}>
                     Place Order
                     </Button>
                    </ListGroup.item>
                  
                 </Card>


              </Col>  
            
           </Row> 
        </>
    )
}

export default PlaceOrderScreen
