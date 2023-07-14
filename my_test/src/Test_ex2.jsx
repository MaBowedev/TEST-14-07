import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from "react"
import Header from "./Famous/Header"
import Home from "./Famous/Home"
import Stars from "./Famous/Stars"
import _char from "./Famous/char"

export default function Test_ex_2() {

    /* Realizza un file js in cui esporti un array di 10 oggetti che rappresentano personaggi di film famosi. Ogni 
    "personaggio" avrà nome, immagine e descrizione.
    Grazie a React Router realizza 2 pagina, la home, che mostra nome e immagine di tutti i personaggi in 
    archivio. 
    Ogni blocco ha un pulsante "More info", che se premuto, rimanda a /char/:charname
    (ad esempio /char/rocky) dove viene mostrato un layout dedicato con nome più grande, immagine più 
    grande e descrizione. 
    Incorpora una header che consente di tornare alla home.
     */
    const [char, setChar] = useState(_char)

    return (
        <>
            <Router>
                <Header />

                <Routes>
                    <Route  index element={<Home char={char} />} />
                    {/*  <Route path='/' element= {<Home />} /> */}
                    <Route path='/Sta/:slug' element={<Stars char={char} />} />
                </Routes>


            </Router>
        </>
    )
}