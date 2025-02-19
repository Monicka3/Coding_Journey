import { useState } from "react"

function Bulb(){
  const[value,setvalue]=useState(false)
  return(
    <>
    <button onClick={()=>setvalue(!value)}>BULB {value ? "ON" : "OFF"}</button>
    </>
  )
}
export default Bulb