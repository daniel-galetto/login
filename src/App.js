import './App.css';
import Home from './Components/Home';
import Tareas from './Components/Tareas';
import Login from './Components/Login';
import Menu from './Components/Menu';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="bg-warning">
      <Router>
     
        <Menu></Menu>

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/tareas" component={Tareas}></Route>
          <Route path="/login" component={Login}></Route>
        </Switch>

      </Router>
     
    </div>
  );
}

export default App;
