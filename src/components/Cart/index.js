import { useDispatch, useSelector } from "react-redux";
import rootReducer from "../../redux/root-reducer";
import { AiOutlineClose } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { BookInfo, CartInfo, CartSt } from "./styleCart";
import { removeBookToCart } from "../../redux/book/action";

const Cart = ({visible, setVisible}) => {

    const dispatch = useDispatch();

    const { products } = useSelector(rootReducer => rootReducer.cartReducer);

    const handleRemove = (id) => {
        dispatch(removeBookToCart(id))
    }

    return(
        <CartSt isVisible={visible}>
            <CartInfo>
                <button onClick={() => setVisible(false)}><AiOutlineClose /></button>

                {products.map((product) => (
                    <BookInfo>
                        <img src={product.volumeInfo.imageLinks.thumbnail} alt='foto' />

                        <h2>{product.volumeInfo.title}</h2>

                        

                        <p onClick={ () => handleRemove(product.id)}><MdDelete /></p>
                    </BookInfo>
                ))}
            </CartInfo>
        </CartSt>
    )
}

export default Cart;