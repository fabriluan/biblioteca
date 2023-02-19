import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBookToCart } from "../../redux/book/action";
import cartReducer from "../../redux/book/reducer";
import { BookSt } from "./styleBook";

const Book = ({book}) => {

    const dispatch = useDispatch();


    const Teste = () => {
        dispatch(addBookToCart(book));
    }

    return(
        <BookSt>

            <img src={book.volumeInfo.imageLinks.thumbnail} alt='foto' />

            <button onClick={ Teste } >Adicionar ao Carrinho</button>

        </BookSt>
    )
}

export default Book;