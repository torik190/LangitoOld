import './Languages.css';
import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <div id='Side'>
      <h2><Link to='/en' className='Language'>Język angielski</Link></h2>
      <u id='Classes'>
        <li><Link to='/en/1' className='Class'>Klasa 1</Link></li>
        <li><Link to='/en/2' className='Class'>Klasa 2</Link></li>
        <li><Link to='/en/3' className='Class'>Klasa 3</Link></li>
        <li><Link to='/en/4' className='Class'>Klasa 4</Link></li>
        <li><Link to='/en/5' className='Class'>Klasa 5</Link></li>
        <li><Link to='/en/6' className='Class'>Klasa 6</Link></li>
        <li><Link to='/en/7' className='Class'>Klasa 7</Link></li>
        <li><Link to='/en/8' className='Class'>Klasa 8</Link></li>
      </u>
      <h2><Link to='/de' className='Language'>Język niemiecki</Link></h2>
      <u id='Classes'>
        <li><Link to='/de/7' className='Class'>Klasa 7</Link></li>
        <li><Link to='/de/8' className='Class'>Klasa 8</Link></li>
      </u>
    </div>
  );
}
