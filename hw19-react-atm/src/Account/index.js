import React, { Component } from "react";

class Account extends Component {
  state = {
    balance: 0,
    amount: ""
  };

  handleChange = event => {
    this.setState({ amount: event.target.value });
  };

  handleClick = () => {
    this.setState({ balance: this.state.amount });
  };

  render() {
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className="balance">{this.state.balance}</div>
        <input
          type="text"
          value={this.state.amount}
          onChange={this.handleChange}
          placeholder="enter an amount"
        />
        <input type="button" value="Deposit" onClick={this.handleClick} />
        <input type="button" value="Withdraw" />
      </div>
    );
  }
}

export default Account;
