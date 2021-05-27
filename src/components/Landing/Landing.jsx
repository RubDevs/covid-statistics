export const Landing = () => (
  <section className="row">
      <div className="col-sm-12 col-12">
        <section className="hero-container text-center">
          <h1>Graphs and statistics related to covid</h1>
          <p>Verify data related to covid, occupied beds, recovered and deceased patients in real time.</p>
          <button>Start looking</button>
        </section>
      </div>
      <div className="col-12">
        <section className="maps-container">
          <h2>Maps</h2>
          <p>Our APIs, SDKs, and live updating map data give developers tools to build better mapping, navigation, and search experiences across platforms.</p>
          <button>Start looking</button>
          {/* <img src="" alt="" /> */}
        </section>
      </div>
      <div className="col-md-12">
        <section className="seach-img">
        
        </section>
        <section className="search-container">
          <h2>Search</h2>
          <p>Our APIs, SDKs, and live updating map data give developers tools to build better mapping, navigation, and search experiences across platforms.</p>
          <button>Start looking</button>
        </section>
      </div>
    </section>
);