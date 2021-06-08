import { Link } from 'react-router-dom'
// Import images
import chart from '../../assets/images/chart.PNG';
import map from '../../assets/images/map.PNG';

export const Landing = () => (
  <div className="container-fluid">
    <section className="row">
      <div className="col-12">
        <section className="hero-container text-center">
          <h1>Graphs and statistics related to covid</h1>
          <p>Verify data related to covid, occupied beds, recovered and deceased patients in real time.</p>
          <Link to="/login">
            <button>Start looking</button>
          </Link>
        </section>
      </div>
      <div className="col-12">
        <div className="row">
          <div className="col-md-6">
            <section className="maps-container">
              <h2>Maps</h2>
              <p>Our APIs, SDKs, and live updating map data give developers tools to build better mapping, navigation, and search experiences across platforms.</p>
              <div className="col-sm-12 btn-container">
                <Link to="/login">
                  <button>Start looking</button>
                </Link>
              </div>
            </section>
          </div>
          <div className="col-md-6">
            <section className="image__container">
              <img src={map} alt="Map" className="w-100"/>
            </section>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="row">
          <div className="col-md-6 d-none d-md-block">
            <section className="image__container">
              <img src={chart} alt="Chart" className="w-100"/>
            </section>
          </div>
          <div className="col-md-6">
            <section className="search-container">
              <h2>Search</h2>
              <p>Our APIs, SDKs, and live updating map data give developers tools to build better mapping, navigation, and search experiences across platforms.</p>
              <div className="col-sm-12 btn-container">
                <Link to="/login">
                  <button>Start looking</button>
                </Link>
              </div>
            </section>
          </div>
          <div className="col-md-6 d-md-block d-md-none">
            <section className="image__container">
              <img src={chart} alt="Chart" className="w-100"/>
            </section>
          </div>
        </div>
      </div>
    </section>
  </div>
);