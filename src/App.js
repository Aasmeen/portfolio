import './App.css';
import Header from './Header/Header';
import Body from './Body/Body';
import SideDiveLinks from './SideDivs/SideDivLinks';
import SideDiveEmail from './SideDivs/SideDivEmail';
import GlowCursor from './Cursor/GlowCursor';

function App() {
  return (
    <div>
      <GlowCursor/>
      <SideDiveLinks/>
      <SideDiveEmail/>
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
