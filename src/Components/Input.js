import React, { useEffect, useState } from 'react'
import CandyItems from './CandyItems'

const ChoclateItems=[
    {name:'Eclairs',dec:'cramy Flavour',price:45},
]



const Input = () => {
    const [Tchocos,setTotalChocos]=useState(ChoclateItems)
    const[Candyname,setcandyName]=useState('')
    const[Candydec,setcandyDec]=useState('')
    const[CandyPrice,setcandyPrice]=useState(0)
   const candyNamechangeHandler=(e)=>{
   setcandyName(e.target.value)
   }
   const candyDecchangeHandler=(e)=>{
   setcandyDec(e.target.value)
   }
   const candyPricechangeHandler=(e)=>{
   setcandyPrice(e.target.value)
   }

const addDetails=(e)=>{
e.preventDefault()
ChoclateItems.push({name:Candyname,dec:Candydec,price:parseInt(CandyPrice)})
    
setTotalChocos(ChoclateItems)
setcandyDec('')
setcandyName('')
setcandyPrice('')

}
useEffect(()=>{
    console.log(Tchocos)
},[Tchocos])

  return (
    <div>
    <form>
      <label>Candy Name</label>
      <input value={Candyname} onChange={candyNamechangeHandler} type='text'/>
      <label>Description</label>
      <input value={Candydec} onChange={candyDecchangeHandler} type='text'/>
      <label>Price</label>
      <input value={CandyPrice} onChange={candyPricechangeHandler} type='number'/>
      <button onClick={addDetails}>Add</button>
      </form>
   <CandyItems value={Tchocos}/>
    </div>
  )
}

export default Input
