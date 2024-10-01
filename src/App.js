//import logo from './logo.svg';
import CHeader from './components/CHeader';
import CContents from './components/CContent';
import {CFooter} from './components/CFooter';
import './components/CHeader.css';

function App() {
  return (
    <div className="App">
      
      <CFooter weather="pochmurna" temp="10">
        <p>
          Niebo jest bezchmurne, wiatr słaby
        </p>
        </CFooter>
    </div>
  );
}

export default App;
