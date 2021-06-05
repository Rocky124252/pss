import { 
  HomePage,
  ContactPage,
  ProfilePage,
} from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          {/*<Route component={NavigationBar} />*/}
          <Route exact path='/' component={HomePage} />
          <Route exact path='/contact' component={ContactPage} />
          <Route exact path='/profile' component={ProfilePage} />
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
