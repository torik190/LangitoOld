import './Home.css';
import img1 from '../images/home1.gif';
import img2 from '../images/home2.gif';
import img3 from '../images/home3.gif';
import img4 from '../images/home4.gif';

export default function Home() {
  return (
    <div id='Side'>
      <table>
        <tr>
          <td className='HomeText'>
            <h2>Czym jest Langito.pl</h2>
            Langito.pl to darmowa aplikacja do nauki języków obcych dla szkół podstawowych.
          </td>
          <td className='HomeImg'><img src={img1} alt=''/></td>
        </tr>
        <tr>
          <td className='HomeImg'><img src={img2} alt=''/></td>
          <td className='HomeText'>
            <h2>Co oferujemy</h2>
            Langito.pl pozwala ci uczyć się takich języków jak: angielski, niemiecki, ##### i #####.
            Nauka jest bardzo prosta poniewasz każdy język podzielony jest na lekcje, w których wystarczy przeczytać tekst, zrobić fiszki lub przejść test.
          </td>
        </tr>
        <tr>
          <td className='HomeText'>
            <h2>Dlaczego my?</h2>
            Langito.pl jest darmowe i nie wymaga rejestracji. Naukę można kontynuować w dowolnym miejscu, nawet nie miejąc wiele czasu.
          </td>
          <td className='HomeImg'><img src={img3} alt=''/></td>
        </tr>
        <tr>
          <td className='HomeImg'><img src={img4} alt=''/></td>
          <td className='HomeText'>
            <h2>Jak to działa?</h2>
            Aby rozpocząć naukę wystarczy że wybierzesz interesujący cię język z paska na górze strony.
            Jeśli twojego języka nie ma na pasku możesz wybrać opcję wszystkie języki.
            Następnie możesz wybrać klasę po czym zobaczysz spis wszystkich lekcji pogrupowanych w działy
          </td>
        </tr>
      </table>
    </div>
  );
}
