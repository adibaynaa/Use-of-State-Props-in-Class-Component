import React from 'react'
import { useState } from 'react'

const Fcomponent = ({price='20'}) => {

  const [state, setState]=useState({
    text:"Pay first & enjoy your desired ice-cream!!"
  })

  function handleButton(){
    setState({
      text:"Thank you for purchasing! Have a good day!!!"
    })
  }

  return (
    <div>
      <h1>Welcome to The Ice-cream Bar!</h1>
        <h2>Enjoy your favourite ice-cream for ${price}</h2>
        <h3>{state.text}</h3>
        <button onClick={handleButton}>Pay Now</button>
    </div>
  )
}

export default Fcomponent