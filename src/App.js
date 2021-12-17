import logo from './logo.svg';
import './App.css';
import {Router} from '@reach/router'
import Home from './page/Home/Home';
import Edit from './page/Home/Edit';

function App() {
 
  return (
    <div className="App">
       
     <Router  >
        <Home path='/' />
        
     </Router>
          
    </div>
  );
}

export default App;
