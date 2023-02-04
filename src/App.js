import logo from './logo.svg';
import './App.css';
import { Counter } from './Counter';
import { DisplayNum } from './DisplayNum';
import { Home } from './Home';
import { DisplayCalc } from './DisplayCalc';
import { DisplayAlert } from './DisplayAlert';

function App() {
  return (
    <div className="App">
      <Counter/>
      <Home/>
      <DisplayNum/>
      <DisplayCalc/>
      <DisplayAlert/>
      
    </div>
  );
}

export default App;
