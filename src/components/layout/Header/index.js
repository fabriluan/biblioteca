import { useState } from "react";
import { useSelector } from "react-redux";
import Cart from "../../Cart";
import Center from "../../Center";
import { HeaderSt } from "./styleHeader";

function Header(){

    const [visible, setVisible] = useState(false);

    const { products } = useSelector(rootReducer => rootReducer.cartReducer);
    
    return(
    
        <HeaderSt>
            <Center>
                <h2>Biblioteca</h2>

                <p onClick={() => setVisible(true)} >Meus Livros ({products.length})</p>

            </Center>

            <Cart visible={visible} setVisible={setVisible}/>
        </HeaderSt>
    )
}

export default Header