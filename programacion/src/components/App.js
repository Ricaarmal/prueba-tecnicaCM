import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import FoodBox from "./foodbox";
import Order from "./order";
import foods from "../foods";

// Padre de las Clases aqui esta toda la informacion
class App extends Component {
  state = {
    foods,
    qty: 1,
    order: []
  };

  handleChange = event => {
    let v = event.target.value;
    this.setState({ qty: v });
  };

  displayObjectsWithBotton = (food, qty) => {
    let order = this.state.order.slice();
    order.push({ food, qty });
    this.setState({ order });
  };

  displaySelectedFoods = () => {
    let result = [];
    for (let i = 0; i < this.state.order.length; i++) {
      result.push(
        <li key={i}>
          {this.state.order[i].qty} {this.state.order[i].food}
        </li>
      );
    }

    return result;
  };

  render() {
    return (
      <div className="columns">
        <div className="column tree">
          <FoodBox
            foods={this.state.foods}
            qty={this.state.qty}
            onChange={this.handleChange}
            displayObjectOrder={this.displayObjectsWithBotton}
          />
        </div>
        <div className="column tree">
          <Order
            order={this.state.order}
            displayObjects={this.displaySelectedFoods}
          />
        </div>
      </div>
    );
  }
}

export default App;
