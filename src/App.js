import { 
  HomePage
} from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          {/*<Route component={NavigationBar} />*/}
          <Route exact path='/' component={HomePage} />
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
