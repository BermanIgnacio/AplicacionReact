import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router } from 'react-router-dom';
import Public from './Routes/Public';
import NavBar from "./Components/NavBar/NavBar"
function App() {
  return (
    <div>
        <Router>
          <NavBar/>
          <Public/>
        </Router>
    </div>
  );
}

export default App;
