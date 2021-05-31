// Import libraries
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Import views
import { ViewLanding } from './views/Landing/Landing';
import { ViewLogin } from './views/Login/Login';
// Import components
import { Header} from './components/UI/Header/Header';
import { Footer } from './components/UI/Footer/Footer';
// Import styles
import './styles/styles.scss';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={ViewLanding}/>
            <Route exact path="/login" component={ViewLogin}/>
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
