// Import libraries
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// Import private route
import { PrivateRoute } from './PrivateRoute';
// Import views
import { ViewLanding } from './views/Landing/Landing';
import { ViewLogin } from './views/Login/Login';
import { ViewStatisticsActiveChart } from './views/Statistics/Active/Chart/Chart';
import { ViewStatisticsActiveMap } from './views/Statistics/Active/Map/Map';
import { ViewStatisticsDeathChart } from './views/Statistics/Death/Chart/Chart';
import { ViewStatisticsDeathMap } from './views/Statistics/Death/Map/Map';
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
            <PrivateRoute exact path="/statistics/active/chart" component={ViewStatisticsActiveChart}/>
            <PrivateRoute exact path="/statistics/active/map" component={ViewStatisticsActiveMap}/>
            <PrivateRoute exact path="/statistics/death/chart" component={ViewStatisticsDeathChart}/>
            <PrivateRoute exact path="/statistics/death/map" component={ViewStatisticsDeathMap}/>
            <Redirect to="/" />
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
