import React from 'react';
import Fitglide from '../component/fitglide';
import Programs from '../component/programs';
import Reason from '../component/reason';
import Plans from './plans';
import Successstories from './successstories';
import Footer from './footer';
import '../../src/styles/home.css'

const Home = () => {
  return (
    <div className="home">
      <Fitglide />
      <Programs />
      <Reason />
      <Plans />
      <Successstories />
      <Footer />
    </div>
  );
}

export default Home;