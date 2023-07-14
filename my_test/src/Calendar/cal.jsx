

export default function cal (){
    let array =[]
   for(let x=1 ; x<= 31; x++  ){
       let obj = {
        number: x,
        note: ''
       }
       array.push(obj)
   }

return(
    <div>
  {
      array.map(e=>{
        return (
             <div className="flex" >
              
               <div className=" bg-gray-500 border border-black w-20 h-20 ">
                      {e.number}
                      {e.note}    
               </div>

             </div>
        )
      })




  }
    </div>
)
}