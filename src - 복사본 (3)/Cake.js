import React, { Component } from 'react'

export class Cake extends Component {
  state= {
    price:10000,
    discoundPrice:0,
  }

  discound = () => {
    this.setState(current=> (//curren = this.state
     {discoundPrice : current.price*0.7}      
    ))
  }

  render() {
    return (
      <>
      
        <div>Cake</div>
        <h1>케이크가격 : {this.state.price}</h1>
        <h2>할인 가격 : {this.state.discoundPrice}</h2>
        <button onClick={this.discound}>할인가격</button>
      
      </>
    )
  }
}

export default Cake;