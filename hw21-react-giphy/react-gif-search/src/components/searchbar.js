import React from "react";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = { term: "" };
  }

  onInputChange(term) {
    this.setState({ term });
  }

  buttonOnClick = () => {
    this.props.onTermChange(this.state.term);
  };

  render() {
    return (
      <div className="search">
        <input onChange={event => this.onInputChange(event.target.value)} />
        <button onClick={this.buttonOnClick}>Search</button>
      </div>
    );
  }
}

export default SearchBar;
