import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import FoodBox from "./foodbox";
import Order from "./order";
import foods from "../foods";
import Orders from "./orders";

// Padre de las Clases aqui esta toda la informacion
class App extends Component {
  state = {
    foods,
    qty: 1,
    order: [],
    result: []
  };

  handleChange = event => {
    let v = event.target.value;
    this.setState({ qty: v });
  };

  displayObjectsWithBotton = (food, qty, id) => {
    let order = this.state.order.slice();
    order.push({ food, qty, id });
    this.setState({ order });
  };

  handleDelete = orderId => {
    let order = this.state.order.filter(bliss => bliss.id !== orderId);
    this.setState({ order });
  };

  handleAddOrder = () => {
    let result = this.state.result.slice();
    let order = this.state.order;
    result.push(order);
    order = [];
    this.setState({ result });
    this.setState({ order });
  };

  seekArray = () => {
    let result = this.state.result;
    for (let i = 0; i < result.length; i++) {
      console.log(result);
    }
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
        <div className="column">
          <Orders result={this.state.result} seekArray={this.seekArray} />
        </div>
        <div className="column">
          <Order
            order={this.state.order}
            displayObjects={this.displaySelectedFoods}
            onDelete={this.handleDelete}
            addOrder={this.handleAddOrder}
          />
        </div>
      </div>
    );
  }
}

export default App;
