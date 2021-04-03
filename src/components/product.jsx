import React, { Component } from "react";
import QuantityPicker from "./quantityPicker";

import "./product.css";

class Product extends Component {
  state = {
    quantity: 1,
  };
  render() {
    return (
      <div className="product">
        <img
          className="product-image"
          src={"/images/products/" + this.props.data.image}
          alt="Product"
        ></img>

        <label>{this.props.data.title}</label>
        <h6>In stock:</h6>
        <label>{this.props.data.stock}</label>
        <h6>Price:</h6>
        <label>${this.props.data.price.toFixed(2)}</label>
        <h6>Total:</h6>
        <label>${this.props.data.price*this.state.quantity.toFixed(2)}</label>

        

        <QuantityPicker 
          onValueChange={this.handleQuantityChange}
          minimum={this.props.data.minimum || 1}
        ></QuantityPicker>
      </div>
    );
  }

  handleQuantityChange = (qnty) => {
    console.log("Quantity changed to " + qnty);
    this.setState({ quantity: qnty});
  }

}

export default Product;
