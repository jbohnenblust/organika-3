import React, { Component } from "react";

class QuantityPicker extends Component {
  state = {
    quantity: this.props.data.minimum || 1,
    name: "Jeff",
  };

  render() {
    return (
      <div>
        <button
          onClick={this.increaseQuantity}
          className="btn btn-sm btn-primary"
        >
          +
        </button>
        <label>{this.state.quantity}</label>
        <button onClick={this.decreaseQuantity} className="btn btn-sm btn-dark">
          -
        </button>

        <button onClick={this.addToCart} className="btn btn-sm btn-success">Add to cart</button>
      </div>
    );
  }

  increaseQuantity = () => {
    let current = this.state.quantity + 1; // read from the state

    this.setState({ quantity: current });

    this.props.onValueChange(current);
  };

  decreaseQuantity = () => {
    let current = this.state.quantity - 1;
    if (current > 0) {
      this.setState({ quantity: current });
      this.props.onValueChange(current);
    }
  };

  addToCart = () => {
    console.log("Add to cart");
  }
}

export default QuantityPicker;
