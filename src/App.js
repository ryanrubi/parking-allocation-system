import { Route, Switch, Redirect } from "react-router-dom";
import FormInput from "./components/form";
import Parking from './components/parking';
import NavBar from "./components/navBar";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>

      <Switch>
        <Route path="/" exact>
          <Redirect to="/parking-allocation-system"/>
        </Route>

        <Route path="/parking-allocation-system">
          <Parking/>
        </Route>

        <Route path="/manage">
          <FormInput/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
