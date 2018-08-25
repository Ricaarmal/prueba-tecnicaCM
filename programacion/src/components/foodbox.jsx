import React, { Component } from "react";
import "./foodbox.css";

class FoodBox extends Component {
  render() {
    return (
      <div className="container">
        {/* this shows all the menu */}
        {this.props.foods.map(foods => (
          <div className="box size" key={foods.id}>
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={foods.image} alt="none" />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <small>{foods.name}</small>
                    <br />
                    <strong>{foods.calories} CAL</strong>
                  </p>
                </div>
              </div>
              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    <input
                      className="input"
                      value={this.props.qty}
                      type="number"
                      onChange={e => {
                        this.props.onChange(e);
                      }}
                    />
                  </div>
                  <div className="control">
                    <button
                      className="button is-info"
                      onClick={() =>
                        this.props.displayObjectOrder(
                          foods.name,
                          this.props.qty
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    );
  }
}

export default FoodBox;
