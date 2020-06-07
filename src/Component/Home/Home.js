import React, { Component } from 'react';

import Carousel from '../Home/Carousel/Carousel';
import CardDesk from '../Home/CardDesk/CardDesk';
import About from '../Home/About/About';
import Quote from '../Home/QuotePart/Quote';
import NewsPart from '../Home/NewsPart/NewsPart';
import Features from './Features/Features';
class Home extends Component {
  render() {
    return (
      <div>
        <Carousel/>
        <CardDesk/>
        <About/>
        <Features/>
        <NewsPart/>
        <Quote/>
      </div>
    );
  }
}
export default Home;