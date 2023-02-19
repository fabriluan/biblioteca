import { useEffect, useState } from "react";
import api from "../../../service/api";
import Book from "../../Book";
import Center from "../../Center";
import { MainSt } from "./styleMain";

function Main(){

    const [books, setBooks] = useState([]);


    useEffect(() => {

        async function Load(){

            const response = await api.get('?q=flowers', {
                params: {
                    printType: 'books',
                    orderBy: 'relevance',
                    startIndex: 0,
                    key: 'AIzaSyBen4fyO75uYV0SLpNXrouTEqoOLE_lF2Y'
                }
            })
    
            console.log(response.data.items);

            setBooks(response.data.items)

        }

        Load()
        
    }, [])


    return(
        <Center>
            <MainSt>
                {books.map((book, index) => (
                    <Book key={index} book={book} />
                ))}
            </MainSt>
        </Center>
    )
}

export default Main;