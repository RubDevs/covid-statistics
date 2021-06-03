import { Link } from 'react-router-dom'

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
      <div className="col-12">
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
    </section>
  </div>
);