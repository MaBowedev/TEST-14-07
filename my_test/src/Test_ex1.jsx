
import { useState } from "react"



export default function Test_ex_1() {
    /* Ex2 (React)
Implementare un'App in cui abbiamo due input di tipo "number" che possono oscillare tra 1 e 10, e 
rappresentano i voti di due studenti, mario rossi e luigi verdi. Al trascinamento degli slider i rispettivi 
contatori reattivi si modificano nel layout. Ad ogni "movimento" di uno dei 2 slidere, un div cita:
se voto mr > voto lv 
"mario rossi è in vantaggio"
se voto mr < voto lv 
"luigi verdi è in vantaggio"
se voto mr = voto lv 
"mario rossi e luigi verdi sono pari"
Inizialmente, i due slider sono settati entrambi al valore 3, pertanto, all'avvio dell'app viene mostrato il 
terzo messaggio.
Puoi usare i ref oppure lo state per la realizzazione del progetto */
const [inpt1, setInpt1]= useState(3)
const [inpt2, setInpt2]= useState(3)
const [alert , setAlert] = useState('sono pari!')



function comparison(){
   
if(inpt1 > inpt2 ){
    console.log( 'Mario win')
  setAlert(
  <div>
    <p>Mario Rossi è in vantaggio!</p>
  </div>)
}
else if( inpt1 < inpt2){ 
console.log( 'luigi win')
   setAlert(<div>
    <p>Luigi Verdi è in vantaggio!</p>
  </div>)
}
else {
    setAlert(<div>
        <p>Sono pari!</p>
      </div>)
}
}




    return (

        <div className="flex flex-col items-center  gap-5">

            <header>
                <h1>VOTES RUN</h1>
            </header>

            <section className="flex gap-5">
                <div className="flex flex-col ">
                    <label htmlFor="Mario rossi">Mario Rossi's Votes</label>
                    <input onClick={comparison} value={inpt1} onChange={e1=>setInpt1(e1.target.value)} type="number" min="1" max="10" />
                </div>

                <div className="flex flex-col ">
                    <label htmlFor="Luigi Verdi">Luigi Verdi's Votes</label>
                    <input onClick={comparison} value={inpt2} onChange={e2=>setInpt2(e2.target.value)} type="number" min="1" max="10" />
                </div>
            </section>

            <footer className="font-extrabold pt-10">
                <div> {alert} </div>
            </footer>





        </div>
    )
}