import './Header.css'

function Header() {
  return <header className="header">
    <ul>
      <li><a className="hover-underline-animation" href="/">Home</a></li>
      <li><a className="hover-underline-animation" href="https://cryptonite.team" target="_blank" rel="noreferrer">About us</a></li>
    </ul>
  </header>
}

export default Header;