import React, { Component } from "react";
import { connect } from "react-redux";
const mapDispatchToProps = dispatch => {
  return {
    addProduct: product => dispatch(addProduct(product))
  };
};
class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.product ? props.product.name : "",
      price: props.product ? props.product.price.toString() : ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    /* this.setState({ [event.target.id]: event.target.value }); */
    const name = event.target.value;
    this.setState(() => ({ name }));
  }
  handlePriceChange(event) {
    /* this.setState({ [event.target.id]: event.target.value }); */
    const price = event.target.value;
    this.setState(() => ({ price }));
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState(() => ({ error: "" }));
    this.props.onSubmit({
      name: this.state.name,
      price: this.state.price
    });
  }
  render() {
    const { name } = this.state.name;
    const { price } = this.state.price;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={this.handleChange}
          />
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={this.handlePriceChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}
const ProductForm = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);
export default ProductForm;
