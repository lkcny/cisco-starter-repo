import { Component } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Panels from './components/Panels/Panels';
import {fetchIPv4, fetchIPv6} from "./components/Ipify/Ipify.js";
import WebSocketLatency from './components/Pylon/Pylon.js';

class App extends Component {

  state = {
    ipv4: 'Loading...',
    ipv6: 'Loading...',
  };

  async componentDidMount() {
    const ipv4 = await fetchIPv4();
    const ipv6 = await fetchIPv6();
    this.setState({ ipv4: ipv4 || 'Unavailable', ipv6: ipv6 || 'Unavailable' });
  }

  render () {return (
      <div>
      <Banner bannerText="Sextant"/>
      <Panels panelName="IPv4 Address" panelContent={this.state.ipv4}/>
      <Panels panelName="IPv6 Address" panelContent={this.state.ipv6}/>
      <Panels panelName="Latency" panelContent={<WebSocketLatency />}/>
      </div>
  );
}
}

export default App;
