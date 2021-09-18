import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Footer from './components/Footer'
import BitCoin from './components/Bitcoin';
import Header from './components/Header';
import GLOBE from 'vanta/dist/vanta.globe.min'

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
        backgroundColor: 0x131f20,
        scale: 1.0
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
          <h1>NiteCTF</h1>
        </div>
        <div className="content-cont">
          <div className="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h3>Coming on 10 December 2021</h3>
          </div>
        </div>
        <Footer/>
        <BitCoin/>
      </div>
    </div>
  );
}

export default App;
