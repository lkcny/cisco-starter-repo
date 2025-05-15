import React, { Component, useEffect, useState } from "react";
import './style.css';
import '../Ipify/Ipify.js';

class Panels extends Component {
    render() {
  return (
    <div class="w3-panel w3-blue w3-card-4" >
  <h2>{this.props.panelName}</h2>
  <h1>{this.props.panelContent}</h1>
</div> 
  );
    }
}


export default Panels;
