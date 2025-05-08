import { Component } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Panels from './components/Panels/Panels';

class App extends Component {
  render () {return (
      <div>
      <Banner bannerText="Sextant"/>
      <Panels/>
      </div>
  );
}
}

export default App;
