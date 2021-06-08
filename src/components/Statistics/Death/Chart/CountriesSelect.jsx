// Import libraries
import { useEffect } from 'react';
import { connect } from 'react-redux';
// Import components
import { Spinner } from '../../../UI/Spinner/Spinner';
// Import actions
import { getCountries } from '../../../../redux/actions/countriesActions';

export const Component = ({
  getCountries,
  country,
  setCountry, 
  countries,
  loadingCountries
}) => {
  // Get countries
  useEffect(() => {
    getCountries();
  }, [getCountries])
  
  if (loadingCountries) {
    return <Spinner size={50} />
  }
  return (
    <>
      <label htmlFor="countries" className="form-label">Countries</label>
      <select
        className="form-select menu__select w-100"  
        value={country} 
        onChange={({ target }) => setCountry(target.value)}
        id="countries"
      >
        {countries.map(country => 
            <option 
              key={country.CountryCodeId} 
              value={country.CountryName}
            >
              {country.CountryName}
            </option>
          )}
      </select>
    </>
  )
};

// Map dispatch
const mapDispatchToProps = dispatch => ({
  getCountries() {
    dispatch(getCountries())
  }
});

// Map state
const mapStateToProps = state => ({
  countries: state.countriesReducer.countries,
  loadingCountries: state.countriesReducer.loadingCountries
});

export const CountriesSelect = connect(mapStateToProps, mapDispatchToProps)(Component);