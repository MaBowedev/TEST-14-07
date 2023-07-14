import { Link } from "react-router-dom";

export default function Header() {


  return (

    <div className=" bg-red-500">
      <header className=" flex gap-10" >
        <div className="text-3xl">
          <Link to='/'>Home</Link>
        </div>

      </header>
    </div>
  )

}