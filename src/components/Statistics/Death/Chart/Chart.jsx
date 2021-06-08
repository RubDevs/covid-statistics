// Import libraries
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// Import components
import { Spinner } from '../../../UI/Spinner/Spinner';
import { Template } from './Template';
import { CountriesSelect } from './CountriesSelect';
import { DaysSelect } from './DaysSelect';
// Import actions
import { getDeathPredictions } from '../../../../redux/actions/predictionsActions';

export const Component = ({ 
  getDeathPredictions,
  loadingDeathData 
}) => {
  // State
  const [country, setCountry] = useState('Colombia');
  const [day, setDay] = useState('90');

  // Get statistics
  useEffect(() => {
    getDeathPredictions(country, day);
  }, [getDeathPredictions, country, day])

  return (
    <section className="py-5 container">
      <div className="row">
        <div className="col-md-9 px-3">
          {loadingDeathData ? 
            <div className="w-100 d-flex justify-content-center">
              <Spinner size={50} /> 
            </div>
            :
            <Template />
          }
        </div>
        <div className="col-md-3">
          <CountriesSelect country={country} setCountry={setCountry}/>
          <DaysSelect day={day} setDay={setDay} />
        </div>
      </div>
    </section>
  )
};

// Map dispatch
const mapDispatchToProps = dispatch => ({
  getDeathPredictions(countryName, days) {
    dispatch(getDeathPredictions({ countryName, days }))
  }
});

// Map state
const mapStateToProps = state => ({
  loadingDeathData: state.predictionsReducer.loadingDeathData
});

export const StatisticsDeathChart = connect(mapStateToProps, mapDispatchToProps)(Component);