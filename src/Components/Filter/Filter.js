import React, { Component } from 'react';
import './Filter.css';
export class Filter extends Component {
  render() {
    const { items, handleSelectClick } = this.props;
    if (items.length > 0) {
      return (
        <div className='form-group col-md-4'>
          <label htmlFor='rating'>Choose Rating</label>
          <select
            id='rating'
            name='rating'
            className='form-control'
            form='ratingform'
            onChange={handleSelectClick}
          >
            <option value='G'>G</option>
            <option value='PG'>PG</option>
            <option value='PG-13'>PG-13</option>
            <option value='R'>R</option>
          </select>
        </div>
      );
    } else {
      return '';
    }
  }
}
