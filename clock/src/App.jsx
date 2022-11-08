import './App.scss';
import Countdown from './components/Countdow';
import DigitalClock from './components/DigitalClock';
import Stopwatch from './components/Stopwatch';

function App() {
  return (
    <div className="app">
    <DigitalClock/>
    <Countdown/>
    <Stopwatch/>
    </div>
  );
}

export default App;
