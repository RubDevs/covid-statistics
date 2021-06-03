// Import countries code data
import codeData from '../assets/json/coutries.json';

export const getCountryId = (countryCode) => {
  const countries = codeData.countries;
  const country = countries.find(country => country.largeCode === countryCode);
  if (country) {
    return country.id;
  }
  return '';
} 