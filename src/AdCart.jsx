import React from 'react'

function AdCart() {
  
  return (
    <div>
      <div id="center">
          <label for="name">Date</label>
          <p></p>
          <button type="button" className="btn btn-success" id="plus" onClick={this.increment.bind(this)}>+</button>
          <input type="text" id="date" value={this.state.counter}/>
          <button type="button" className="btn btn-danger" id="minus" onClick={this.decrement.bind(this)}>-</button> 
      </div>
    </div>
  );
}


export default AdCart