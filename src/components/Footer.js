import React, { useState } from 'react';
import './Footer.css'

function Footer() {
  const [showFlag, setShowFlag] = useState(false);
  const hidden = "nite{organized_by_cryptonite_manipal@bWFuaXBhbAo=}";
  const normal = "Organized by Cryptonite Manipal"
  return <footer onMouseEnter={() => setShowFlag(true)} onMouseLeave={() => setShowFlag(false)}><div>{ showFlag ? hidden : normal}</div></footer>
}

export default Footer