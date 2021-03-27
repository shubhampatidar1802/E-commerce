import React,{useState } from 'react'
import {Form,Button,Col} from 'react-bootstrap'
import {useDispatch , useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { savePaymentMethod } from '../actions/cartActions'
import CheakoutSteps from '../components/CheakoutSteps'

const PaymentScreen = ( {history} ) => {
     const cart = useSelector( (state) => state.cart )
     const { shippingAddress } = cart

     if(!shippingAddress){
         history.push('/shipping')
     }

     const [paymentMethod,setPaymentMethod] = useState('PayPal')
     
     const dispatch = useDispatch()

    const submitHandler = (e) =>{
        e.preventDefault()
         dispatch(savePaymentMethod(paymentMethod))
          history.push('/placeOrder')
         }

    return (
        <FormContainer>
            <CheakoutSteps step1 step2 step3 />
            <h3>Payment Method</h3>
            <Form onSubmit={submitHandler}>
        <Form.Group>
                 <Form.Label as='legend'>Select Method</Form.Label> 
        </Form.Group>
            <Col>
               <Form.Check 
               type='radio' 
               label='PayPal or Credit Card' 
               id='PayPal' 
               name='paymentMethod' 
               value='PayPal' 
               checked onChange={(e) => setPaymentMethod(e.target.value) } >

               </Form.Check>
               
               <Form.Check 
               type='radio' 
               label='Cash on delevery' 
               id='cashOnDelevery' 
               name='paymentMethod' 
               value='Cash On Delevery'
               onChange={(e) => setPaymentMethod(e.target.value) } >

               </Form.Check>

            </Col>  
        
            <Button type='submit' variant='primary'>
                 Continue
            </Button>
            </Form>
        </FormContainer>
    )
}

export default PaymentScreen
