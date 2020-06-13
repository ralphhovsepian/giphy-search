import React, { Component } from 'react';
import spinner from './Spinner.svg';
import './Loader.css';
export class Loader extends Component {
  render() {
    return (
      <div className='loader'>
        <img src={spinner} alt='Spinner' />
      </div>
    );
  }
}
