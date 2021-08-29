import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Index';
import User from './pages/User';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/users' />
          </Route>
          <Route path='/users' exact component={Home} />
          <Route path='/users/:id' exact component={User} />
          <Route path='*'>404 Page Not Found</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
