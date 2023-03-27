import './Header.css';
import logo from './images/logo.png';

export default function Header() {
  return (
    <header id='Header'>
      <a href='#' className='HeaderElement'><img src={logo} alt='logo' id='Logo'/></a>
      <a href='#' className='HeaderElement'>Angielski ⯆</a>
      <a href='#' className='HeaderElement'>Niemiecki ⯆</a>
      <a href='#' className='HeaderElement'>Wszystkie języki</a>
    </header>
  );
}
