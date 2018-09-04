import React, { Component } from "react";
import { connect } from "react-redux";
import uuid from "uuid";
const mapDispatchToProps = dispatch => {
  return {
    addProduct: product => dispatch(addProduct(product))
  };
};
class ConnectedForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: 0
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
    const { name, price } = this.state;
    const id = uuid();
    /* this.props.addProduct({ id, name, price });
     this.setState({ name: "" });  */
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
            id="title"
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
const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);
export default Form;
