import React, { Component } from 'react';
import PropTypes from "prop-types";
// import { format } from 'path';
import { getFunName } from "../helpers";

export default class StorePicker extends Component {
  static propTypes = {
    history: PropTypes.object
  }

  myInput = React.createRef();
  goToStore = (event) => {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. get the text from the input
    const storeName = this.myInput.current.value;
    // 3. change the page to /store/whatever input is
    this.props.history.push(`/store/${storeName}`)
  }
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}
