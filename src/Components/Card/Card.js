import React, { Component } from 'react';
import './Card.css';
export class Card extends Component {
  render() {
    const { src, title, url } = this.props;
    let fb_link = `https://www.facebook.com/sharer.php?u=${url}`;
    return (
      <div className='gifimg'>
        <a href={fb_link} target='_blank'>
          <img src={src} alt='Card image cap' />
        </a>
      </div>
    );
  }
}
