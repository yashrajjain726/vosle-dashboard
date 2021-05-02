import DashBoard from './components/dashboard'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ForgotPassword from './components/forgotPassword';
import SignUp from './components/signUp';
function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact path="/" component={DashBoard}></Route>
        <Route exact path="/forgotpassword" component={ForgotPassword}/>
        <Route exact path="/signup" component={SignUp}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
