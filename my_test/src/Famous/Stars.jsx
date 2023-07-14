
import { Link, useParams } from "react-router-dom";

export default function Stars ({char}){
    const {slug} = useParams()

   let character = char.filter(function(c){return c.name == slug})

   character = character[0]
console.log(character)
    return (

        <div >
           <div className="bg-gray-300 h-screen">
                <div className="border border-black bg-gray-500 ">
                    <h1>{character.name}</h1>
                    <img className="w-1/2 h-1/2" src={character.pic} alt="" />
                    <p>{character.description}</p>
                    <Link to='/'>Home</Link> 
                </div>
           </div>
        
        
        
        
        
        
        </div>
       
    )
}