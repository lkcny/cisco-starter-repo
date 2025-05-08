// components/Banner.jsx
import React, { useEffect, useState } from "react";
import './style.css';
import '../Ipify/Ipify.js';
import {fetchIPv4, fetchIPv6} from "../Ipify/Ipify.js";


function Panels() {
    const [ipv4, setIPv4] = useState("");
    const [ipv6, setIPv6] = useState("");
  
    useEffect(() => {
      const getIPs = async () => {
        const ip4 = await fetchIPv4();
        const ip6 = await fetchIPv6();
        if (ip4) setIPv4(ip4);
        if (ip6) setIPv6(ip6);
      };
  
      getIPs();
    }, []);


  return (
    <div >
  <h2 class="w3-panel w3-blue w3-card-4">Public IPv4 Address: {ipv4 || "Loading..." } </h2>

  <h2 class="w3-panel w3-blue w3-card-4">Public IPv6 Address: {ipv6 || "Loading..." } </h2>
</div> 
  );
};

export default Panels;
