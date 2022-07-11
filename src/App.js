// import logo from './logo.svg';
import './App.css';
// import Try from './try';
import OddEvenButton from './OddEvenButton';
import Counter from './Counter';
import Countdown from './Countdown';
import Stopwatch from './Stopwatch';
// import Clock from './try2';
function App() {
  return (
    <div className="App" style={{backgroundColor:'black',padding:'100px'}}>
      {/* <Try /> */}
      <OddEvenButton />
      <Counter />
      <Countdown />
      <Stopwatch />
    </div>
  );
}

export default App;
