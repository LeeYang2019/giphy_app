import React, { Component } from 'react';
import { Results } from '../../components/';

class Search extends Component {
  state = {
    searchText: '',
    amount: 15,
  };

  render() {
    return (
      <div>
        <Results />
      </div>
    );
  }
}

export default Search;
