




export default function  Header (props){







    return (
        <header className=" text-center font-extrabold text-3xl">

            <h1>{props.title}</h1>
            <p className=" font-bold text-xl">{props.subtitle}</p>
             



        </header>
    )


}