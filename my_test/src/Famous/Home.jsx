
import {Link} from "react-router-dom"

export default function Home({char}) {
    

    return (
        <div>  
            {
            char.map(ch => {
                    

                    return (
                        <article key={ch.id} className="bg-gray-400 p-4 rounded-md ">
                            <div className="border border-black w-1/2 bg-gray-500">
                                <h2 className="text-2xl mb-4">{ch.name}</h2>
                                <div>
                                  <img className="w-45 h-45" src={ch.pic} alt="" />     
                                </div>
                                <div className="my-10">
                                            <Link to={'/Sta/' + ch.name} className="app12-btn">Read more...</Link>
                                        </div>
                            </div>
                            
                          
                        </article>
                    )
                })
            }




        </div>
    )
} 