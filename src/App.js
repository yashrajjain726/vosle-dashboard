import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ForgotPassword from './components/pages/forgotPassword';
import SignUp from './components/pages/signUp';
import DashBoard from './components/pages/dashboard';
import Main from './components/pages/main'
function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route exact path="/forgot-password" component={ForgotPassword}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/dashboard" component={DashBoard}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
