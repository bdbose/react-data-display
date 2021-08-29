import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Index';
import User from './pages/User';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/user/:id' exact component={User} />
          <Route path='*'>404 Page Not Found</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
