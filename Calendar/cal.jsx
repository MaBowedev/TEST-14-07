

function Cal(props) {
  console.log(props)
  console.log(props.days)

  let array = props.days

  return (
    <div className="flex flex-wrap">
      {
        array.map(e => {
          return (

            <div className="">
              <div className="bg-gray-800 border border-gray w-40 h-40 ">
                <p className="border rounded-full text-center text-white">{e.number}</p>
                <p className="text-white  text-center mt-5 "> {e.note}</p>
              </div>

            </div>

          )
        })




      }
    </div>
  )
}
export default Cal