import React,{useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import {useDispatch , useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { saveShippingAddress } from '../actions/cartActions'
import CheakoutSteps from '../components/CheakoutSteps'

const ShippingScreen = ( {history} ) => {
     const cart = useSelector( (state) => state.cart )
     const { shippingAddress } = cart
     const [address,setAddress] = useState(shippingAddress.address)
     const [city,setCity] = useState(shippingAddress.city)
     const [postalCode,setPostalCode] = useState(shippingAddress.postalCode)
     const [mobileNo,setMobileNo]= useState(shippingAddress.mobileNo)

     const dispatch = useDispatch()

    const submitHandler = (e) =>{
        e.preventDefault()
         dispatch(saveShippingAddress({address , city , postalCode , mobileNo }))
          history.push('/payment')
         }

    return (
        <FormContainer>
            <CheakoutSteps step1 step2 />
            <h3>Shipping</h3>
            <Form onSubmit={submitHandler}>
            <Form.Group controlId='address'>
                  <Form.Label>Address</Form.Label>    
                  <Form.Control
                   type='text'
                   placeholder='Enter Address'
                   value={address}
                   required
                   onChange={(e)=>setAddress(e.target.value)}
                   ></Form.Control>
            </Form.Group>

            <Form.Group controlId='city'>
                  <Form.Label>City</Form.Label>    
                  <Form.Control
                   type='text'
                   placeholder='Enter City'
                   value={city}
                   required
                   onChange={(e)=>setCity(e.target.value)}
                   ></Form.Control>
            </Form.Group>

           
            <Form.Group controlId='postalCode'>
                  <Form.Label>Postal Code</Form.Label>    
                  <Form.Control
                   type='text'
                   placeholder='Enter Postal Code'
                   value={postalCode}
                   required
                   onChange={(e)=>setPostalCode(e.target.value)}
                   ></Form.Control>
            </Form.Group>

            <Form.Group controlId='mobileNo'>
                  <Form.Label>Mobile no.</Form.Label>    
                  <Form.Control
                   type='text'
                   placeholder='Enter Mobile N0.'
                   value={mobileNo}
                   required
                   onChange={(e)=>setMobileNo(e.target.value)}
                   ></Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary'>
                 Continue
            </Button>
            </Form>
        </FormContainer>
    )
}

export default ShippingScreen
