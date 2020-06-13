import React from 'react';
import './App.css';
import { Nav } from '../Nav/Nav';
import { CardDisplay } from '../CardDisplay/CardDisplay';
import { Filter } from '../Filter/Filter';
import { Loader } from '../Loader/Loader';

import 'bootstrap/dist/css/bootstrap.min.css';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentVal: '',
      loading: false,
    };
  }

  handleClick = (e) => {
    e.preventDefault();
    const link = 'https://api.giphy.com/v1/gifs/search?';
    const api_key = 'IeCM8zqkMMllyQPXWIGCRADHO4dBiHEY';
    let query = this.state.currentVal;
    let full_link = `${link}api_key=${api_key}&q=${query}&limit=25&offset=0&rating=G&lang=en`;
    this.setState({ loading: true });
    fetch(full_link)
      .then((data) => data.json())
      .then((response) =>
        this.setState({ items: response.data, loading: false })
      );
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ currentVal: e.target.value });
  };

  handleSelectClick = (e) => {
    e.preventDefault();
    let rating = e.target.value;
    const link = 'https://api.giphy.com/v1/gifs/search?';
    const api_key = 'IeCM8zqkMMllyQPXWIGCRADHO4dBiHEY';
    let query = this.state.currentVal;
    let full_link = `${link}api_key=${api_key}&q=${query}&limit=25&offset=0&rating=${rating}&lang=en`;
    this.setState({ loading: true });
    fetch(full_link)
      .then((data) => data.json())
      .then((response) =>
        this.setState({ items: response.data, loading: false })
      );
  };

  render() {
    return (
      <div className='App'>
        <Nav handleClick={this.handleClick} handleChange={this.handleChange} />
        <Filter
          items={this.state.items}
          handleSelectClick={this.handleSelectClick}
        />
        {this.state.loading ? <Loader /> : ''}
        <CardDisplay items={this.state.items} />
      </div>
    );
  }
}
