import React, { Component, Fragment } from 'react';
import './Nav.css';

export class Nav extends Component {
  render() {
    const { handleClick, handleChange } = this.props;
    return (
      <Fragment>
        <nav
          className='navbar navbar-dark'
          style={{ backgroundColor: '#563d7c' }}
        >
          <a className='navbar-brand'>Giphy Searcher</a>
          <form className='form-inline'>
            <input
              className='form-control mr-sm-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
              onChange={handleChange}
            />
            <button
              className='btn btn-outline-danger my-2 my-sm-0'
              type='submit'
              onClick={handleClick}
            >
              Search
            </button>
          </form>
        </nav>
      </Fragment>
    );
  }
}
