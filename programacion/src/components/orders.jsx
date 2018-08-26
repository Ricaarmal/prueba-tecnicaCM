import React, { Component } from "react";

class Orders extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>Ordenes</h1>
        {this.props.result.map(orders =>
          orders.map(order => (
            <div key={order.id} className="box">
              <h1>Nueva Orden</h1>
              <div className="content">
                <h3>{order.food}</h3>
                <p>{order.qty}</p>
              </div>
            </div>
          ))
        )}
      </React.Fragment>
    );
  }
}

export default Orders;
