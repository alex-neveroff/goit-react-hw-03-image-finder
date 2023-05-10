import React, { Component } from 'react';
import { ReactComponent as SearchIcon } from '../../icons/search.svg';
import PropTypes from 'prop-types';
import { SearchbarForm, SearchbarHeader } from './Searchbar.styled';

class Searchbar extends Component {
  state = { query: '' };

  handleSearch = event => {
    this.setState({ query: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { query } = this.state;
    this.props.onSubmit(query);
  };

  render() {
    const { query } = this.state;
    return (
      <SearchbarHeader>
        <SearchbarForm onSubmit={this.handleSubmit}>
          <button type="submit" className="searchbar-button">
            <SearchIcon width="35" height="35" />
          </button>

          <input
            className="searchbar-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={this.handleSearch}
          />
        </SearchbarForm>
      </SearchbarHeader>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
