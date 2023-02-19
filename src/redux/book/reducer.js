import { CartActionTypes } from "./action-types";

const initialState = {
    products: []
}

const cartBook = (state = initialState, action) => {
    switch (action.type) {
        case CartActionTypes.ADD_BOOK: 

            const productsIsCart = state.products.some((product) => product.id === action.payload.id);

            if(productsIsCart){
                return {
                    ...state,
                    products: state.products.map((product) => 
                        product.id === action.payload.id
                            ? {...product}
                            : product
                    )
                }
            }

            return {...state, products: [...state.products, {...action.payload, quantity: 1}]}

        case CartActionTypes.REMOVE_BOOK: 
            return{
                ...state,
                products: state.products.filter(
                    (product) => product.id !== action.payload
                )
            }

    default:
        return state;
    }
}

export default cartBook;