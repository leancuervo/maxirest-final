import { useEffect } from "react"


const Loading = () => {

    useEffect(() =>{
        return() => console.log('Desmontando Loading')
    })

  return (
    <h1>Loading...</h1>
  )
}

export default Loading