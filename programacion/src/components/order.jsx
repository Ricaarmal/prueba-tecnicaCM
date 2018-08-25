import React, { Component } from "react";

class Order extends Component {
  render() {
    console.log(this.props.order);
    return (
      <div>
        <h1>Orders</h1>
        <ul>{this.props.displayObjects()}</ul>
      </div>
    );
  }
}

export default Order;
