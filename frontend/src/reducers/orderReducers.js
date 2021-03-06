import {
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAIL,
} from '../constants/orderConstants'

export const orderCreateReducer = (state = {} , action) => {
    switch(action.type){
            case ORDER_CREATE_REQUEST:
                return {
                    loading:true
                }
            case ORDER_CREATE_SUCCESS:
                return {
                    loading:false,
                    sucess:true,
                    order:action.payload,
                }
            case ORDER_CREATE_FAIL:
                return{
                    loading:false,
                    error:action.paylaod,
                }    
            default:
                return state                    
        }
    }
