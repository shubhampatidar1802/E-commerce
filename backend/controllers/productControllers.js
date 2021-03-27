import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'


// desc- frtch all product
// route- get /api/product
// access- public
const getProducts = asyncHandler(async(req,res) => {
     const products = await Product.find({})

     res.json(products)
})


// desc- frtch single product
// route- get /api/product/:id
// access- public
const getProductById = asyncHandler(async(req,res)=> {
    const product = await Product.findById(req.params.id)
    
    if(product){
        res.json(product)
     }else{
         res.status(404)
         throw new Error('Product not found')
     }

    res.json(products)
})

export {getProducts,getProductById}