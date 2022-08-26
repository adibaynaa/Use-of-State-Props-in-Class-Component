import React from "react";

export class Property extends React.Component{

  constructor(props){
    super(props);
    this.state={
      text:"Pay first & enjoy your desired ice-cream!!"
    }

  }

  handleButton(){
    this.setState({
      text:"Thank you for purchasing! Have a good day!!!"
    })
  }

  render(){
    const {price=20} = this.props

    const {text} = this.state

    return(
      <div>
        <h1>Welcome to The Ice-cream Bar!</h1>
        <h2>Enjoy your favourite ice-cream for ${price}</h2>
        <h3>{text}</h3>
        <button onClick={()=>this.handleButton()}>Pay Now</button>
      </div>
    )
  }
}

export default Property