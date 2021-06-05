// Import libraries
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
// Import get country code
import { getCountryId } from '../../helper/getCountryId';

export const RatiosCovidData = ({ children }) => (
  <Query
    query={gql`
      {
        Ratios {
          Code
          Ratio_per_100_000
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (data) {
        const ratios = data.Ratios.map(country => ({
          id: getCountryId(country.CountryCodeId),
          value: country.Deaths
        }))
        return children({ loading, error, data: ratios })
      } else {
        return children({ loading, error, data: [] })
      }
    }}
  </Query>
);
