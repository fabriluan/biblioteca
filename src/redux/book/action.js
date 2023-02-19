import { CartActionTypes } from "./action-types"

export const addBookToCart = (payload) => ({
    type: CartActionTypes.ADD_BOOK,
    payload
})

export const removeBookToCart = (payload) => ({
    type: CartActionTypes.REMOVE_BOOK,
    payload
})