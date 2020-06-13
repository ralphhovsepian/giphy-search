import React, { Component, Children } from 'react';
import { Card } from '../Card/Card';
import './CardDisplay.css';
export class CardDisplay extends Component {
  render() {
    const { items } = this.props;
    return (
      <div className='DisplayCard'>
        {items.map((gif) => (
          <Card
            key={gif.id}
            src={gif.images.fixed_width_small.url}
            title={gif.title !== '' ? gif.title : 'Title not available'}
            url={gif.url}
          />
        ))}
      </div>
    );
  }
}
