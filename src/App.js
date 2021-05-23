// Import libraries
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Import views
import { ViewLanding } from './views/Landing/Landing';
import { ViewLogin } from './views/Login/Login';
// Import styles
import './styles/styles.scss';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <main className="container">
          <Switch>
            <Route exact path="/" component={ViewLanding}/>
            <Route exact path="/login" component={ViewLogin}/>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
