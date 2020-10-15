import {GET_PRODUCT} from '../types';

const initialState = {
    product: {},
    loading: true
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_PRODUCT:
            return {
                ...state,
                product: action.payload,
                loading: false

            }
        default: return state
    }

}