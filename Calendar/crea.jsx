 function crea (){
    let array = []
    for (let x = 1; x <= 31; x++) {
      let obj = {
        number: x,
        note: ''
      }
      array.push(obj)
    }
  
    return  {
        array
        
    }

}

let array_days = crea()
export {array_days}