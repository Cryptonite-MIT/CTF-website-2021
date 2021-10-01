import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Footer from './components/Footer'
import BitCoin from './components/Bitcoin';
import Header from './components/Header';
import GLOBE from 'vanta/dist/vanta.globe.min'
import gcpLogo from './logo_googleCloud.png'

function App() {
  const reference = useRef(0);
  const [vantaEffect, setVantaEffect] = useState(0);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(GLOBE({
        el: reference.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        color: 0x0b9444,
        color3: 0xffffff,
        backgroundColor: 0x131f20
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect]);
  return (
    <div className="app">
      <div id="splash-screen" className="splash-screen" ref={reference}>
      </div>
      <div className="actual-text">
        <Header/>
        <div className="banner-cont">
          <h1>niteCTF</h1>
        </div>
        <div className="content-cont">
          <div className="content">
            <p>niteCTF is a jeopardy style CTF for students interested in cybersecurity. niteCTF is designed to help students explore newer domains in cybersecurity as well as help existing professionals practise their skills. We will feature challenges which cover various domains of cybersecurity including cryptography, reversing, forensics, web exploitation, pwn and more!
            </p>
            <p>We will also have exciting prizes for the teams that come 1st, 2nd or 3rd in the CTF</p>
            <h3>Coming on 10 December 2021</h3>
            <br></br>
            <p><small>Infra sponsored by <a href="https://g.co/cloud"><img className="content-google-cloud-logo" src={gcpLogo} alt="Google Cloud"></img></a></small></p>
          </div>
        </div>
        <Footer/>
        <BitCoin/>
      </div>
    </div>
  );
}

export default App;
