import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'


// desc- Create new order
// route- POST /api/orders
// access- private
const addOrderItems = asyncHandler(async(req,res) => {
     const { orderItems, 
        shippingAddress, 
        paymentMethod,
        itemPrice,
        taxPrice,
        shippingPrice,
        totalPrice } = req.body

        if(orderItems && orderItems.length === 0){
            res.status(400)
            throw new Error('No Order Items')
            return
        }else {
            const order = new Order({
                orderItems, 
                user:req.user._id,
                shippingAddress, 
                paymentMethod,
                itemPrice,
                taxPrice,
                shippingPrice,
                totalPrice
            })

            const createdOrder = await order.save()

            res.sendStatus(201).json(createdOrder)

        }

})

 export {addOrderItems} 