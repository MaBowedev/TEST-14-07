import Calendar from "./Calendar/cal.jsx"
import { useState } from "react"
import { array_days } from "./Calendar/crea.jsx"
export default function Test_ex_3() {

    /* Realizza un'app che simula un calendario. 
    L'utente ha 2 campi input e un pulsante "insert note". Nel primo campo può scegliere il giorno (1-31). Nel 
    secondo campo, può inserire la nota da allegare al giorno indicato. 
    Il layout è inoltre dotato di 31 blocchi, relativi ai giorni del mese, inizialmente vuoti (privi di note allegate).
    Alla pressione del tasto "insert note", il layout reagisce ai cambiamenti, e mostra, per ogni giorno, la 
    relativa nota salvata oppure "" (stringa vuota) se non presente. 
    Crea un componente Note per gestire correttamente i 31 blocchi singoli da generare (tip: tramite ciclo).
    Bonus (+1pt): al caricamento dell'app vengono mostrate 5 note già inserite hardcoded (in 5 giorni scelti da 
    voi) derivate da un'apposita struttura in memoria. 
    Ad esempio (giorno: nota)
    7: imparare Svelte
    10: creare Vite 2.0
    16: sistemare cicalino
    22: abolire le campane
    30: meeting con la gang di Michel */
    const [inpt1, setInpt1] = useState('')
    const [inpt2, setInpt2] = useState('')
    
   

  
    return (
        <div >
              
            <div className="flex  gap-5 pt-10 justify-center items-center">
                 
                <div>
                    <label className="mr-5" htmlFor=""> Note</label>
                    <input value={inpt1} onChange={e => setInpt1(e.target.value)} type="text" className="w-1/2" />
                </div>

                <div>
                    <label className="mr-5" htmlFor=""> Date</label>
                    <input value={inpt2} onChange={e => setInpt2(e.target.value)} className=" w-1/2" type="number" min="1" max="31" />
                </div>
                <button>INSERT NOTE</button>

            </div>
            <div className="flex items-center " >

              < Calendar />

            </div>


        </div>
    )
}