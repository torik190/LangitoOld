import './Header.css';
import logo from './images/logo.png';

export default function Header() {
  return (
    <header id='Header'>
      <a href='#' className='HeaderElement'><img src={logo} alt='logo' id='Logo'/></a>
      <a href='#' className='HeaderElement'>angielski ⯆</a>
      <a href='#' className='HeaderElement'>niemiecki ⯆</a>
    </header>
  );
}
