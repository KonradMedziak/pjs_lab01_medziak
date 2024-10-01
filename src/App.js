//import logo from './logo.svg';
import CHeader from './components/CHeader';
import {CFooter} from './components/CFooter';
import './components/CHeader.css';

function App() {
  return (
    <div className="App">
      <CHeader aName="Jan" aFamily="Kowalski"/>
      <CFooter weather="słoneczna" temp="25"/>
      <CFooter weather="deszczowa" temp="13"/>
      <CFooter weather="śniezna" temp="-6"/>
      <CFooter weather="pochmurna" temp="10">
        <p>
          Niebo jest bezchmurne, wiatr słaby
        </p>
        </CFooter>
    </div>
  );
}

export default App;
