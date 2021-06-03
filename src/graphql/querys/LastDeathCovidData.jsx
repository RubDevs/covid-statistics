// Import libraries
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
// Import get country code
import { getCountryId } from '../../helper/getCountryId';

export const LastDeathCovidData = ({ children }) => (
  <Query
    query={gql`
      {
        Statistics {
          CountryCodeId
          Deaths
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (data) {
        const statistics = data.Statistics.map(country => ({
          id: getCountryId(country.CountryCodeId),
          value: country.Deaths
        }))
        return children({ loading, error, data: statistics })
      } else {
        return children({ loading, error, data: [] })
      }
    }}
  </Query>
);
