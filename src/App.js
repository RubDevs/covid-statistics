// Import libraries
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
// Import private and public route
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
// Import views
import { ViewLanding } from './views/Landing/Landing';
import { ViewLogin } from './views/Login/Login';
import { ViewRegister } from './views/Register/Register';
import { ViewStatisticsActiveChart } from './views/Statistics/Active/Chart/Chart';
import { ViewStatisticsActiveMap } from './views/Statistics/Active/Map/Map';
import { ViewStatisticsDeathChart } from './views/Statistics/Death/Chart/Chart';
import { ViewStatisticsDeathMap } from './views/Statistics/Death/Map/Map';
import { ViewStatisticsRatioMap } from './views/Statistics/Death/Ratio/Map'
// Import components
import { Header} from './components/UI/Header/Header';
import { Footer } from './components/UI/Footer/Footer';
import { Menu } from './components/Menu/Menu';
// Import styles
import './styles/styles.scss';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Menu />
          <Switch>
            <PublicRoute exact path="/" component={ViewLanding}/>
            <PublicRoute exact path="/login" component={ViewLogin}/>
            <PublicRoute exact path="/register" component={ViewRegister}/>
            <PrivateRoute exact path="/statistics/active/chart" component={ViewStatisticsActiveChart}/>
            <PrivateRoute exact path="/statistics/active/map" component={ViewStatisticsActiveMap}/>
            <PrivateRoute exact path="/statistics/death/chart" component={ViewStatisticsDeathChart}/>
            <PrivateRoute exact path="/statistics/death/map" component={ViewStatisticsDeathMap}/>
            <PrivateRoute exact path="/statistics/death/ratio" component={ViewStatisticsRatioMap} />
            <Redirect to="/" />
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
