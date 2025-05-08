// components/Banner.jsx
import React, { Component } from "react";
import './style.css';

class Banner extends Component {
  render() {return (
    <div class="text1">
		<h1>{this.props.bannerText}</h1>
		<hr class="solid"></hr>
    </div>
 		 );
	}
}

export default Banner;
