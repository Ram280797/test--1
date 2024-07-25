import logo from './logo.svg';
import "./style.css";
import MyButton from "./Components/MyButton";
import Counter from "./Components/Counter";
import ToggleMessage from './Components/ToggleMessage';
import { BrowserRouter, Router } from 'react-router-dom';
import Routers from "./Routers";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Index from "./Components/pages/index";


function App() {
  return (
 <>
  {/* <div className="App">
      <header className="App-header">
        <h1>Welcome to My App</h1>
        <MyButton /> 
        <br/>
        <Counter/>
        <br/>
        <ToggleMessage/>
      </header>
    </div> */}
    <BrowserRouter>
    <Index/>
      <Routers/>
    </BrowserRouter>
 </>
  );
}

export default App;
