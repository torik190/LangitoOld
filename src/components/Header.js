import './Header.css';
import logo from '../images/logo.png';
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <header id='Header'>
      <Link to='/' className='HeaderElement'><img src={logo} alt='logo' id='Logo'/></Link>
      <Link to='/en' className='HeaderElement'>Angielski ⯆</Link>
      <Link to='/de' className='HeaderElement'>Niemiecki ⯆</Link>
      <Link to='/all' className='HeaderElement'>Wszystkie języki</Link>
    </header>
  );
}
