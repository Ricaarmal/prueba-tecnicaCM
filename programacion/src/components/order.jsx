import React, { Component } from "react";
import "./order.css";

class Order extends Component {
  render() {
    return (
      <div>
        <h1>Order</h1>
        {/* Shows Selected food */}
        {this.props.order.map(order => (
          <ul key={order.id}>
            <li className="down">
              {order.food} Cantidad: {order.qty}
              <button
                className="button is-danger"
                onClick={() => this.props.onDelete(order.id)}
              >
                Delete
              </button>
            </li>
          </ul>
        ))}
        <button
          className="button is-success"
          onClick={() => this.props.addOrder()}
        >
          Send Order
        </button>
      </div>
    );
  }
}

export default Order;
