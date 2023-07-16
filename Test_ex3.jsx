import Calendar from "./Calendar/cal.jsx"
import { useState } from "react"
import { array_days } from "./Calendar/crea.jsx"
import Header from "./Calendar/Header.jsx"

let array1  = []
    for (let x = 1; x <= 31; x++) {
      let obj = {
        number: x,
        note: '' 
      }
       if( x==5 ){
        obj.note =  'imparare Svelte'
       }
       if( x==7 ){
        obj.note =  'sistemare cicalino'
       }
       if( x==8 ){
        obj.note =  'abolire le campane'
       }
       if( x==25 ){
        obj.note =  'meeting con la gang di Michel'
       }
       if( x==28 ){
        obj.note =  'creare Vite 2.0'
       }
      array1.push(obj)
    }


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
    const [array , setArray]= useState(array1)
    
    
 function mod_cal (){
    array1.forEach(e=>{
        if(e.number == inpt2){
           e.note = inpt1
        }   
       
    })
    setInpt1('')
    setInpt2('')

 }
    
    return (
        <div className="flex flex-col items-center gap-10 pt-10">
               <Header subtitle = 'inserisci una nota ' title = 'Calendario'/>
            <div className="flex  gap-5  justify-center items-center">

                <div>
                    <label className="mr-5" htmlFor=""> Note</label>
                    <input value={inpt1} onChange={e => setInpt1(e.target.value)} type="text" className="w-1/2" />
                </div>

                <div>
                    <label className="mr-5" htmlFor=""> Date</label>
                    <input value={inpt2} onChange={e => setInpt2(e.target.value)} className=" w-1/2" type="number" min="1" max="31" />
                </div>
                <button onClick={mod_cal} className="border border-black bg-slate-400 rounded-md">INSERT NOTE</button>

               
            </div>
            <div className="flex flex-wrap" >
                < Calendar  days = {array}/>
            </div>

        </div>
    )
}