// Import libraries
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
// Import get country code
import { getCountryId } from '../../helper/getCountryId';

export const LastDeathCovidData = ({ children }) => (
  <Query
    query={gql`
      {
        Ratios {
          Name
          Ratio_per_100_000
          Total_Ratio
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (data) {
        const ratios = data.Ratios.map(country => ({
          id: getCountryId(country.CountryCodeId),
          value: country.Ratio_per_100_000
        }))
        return children({ loading, error, data: ratios })
      } else {
        return children({ loading, error, data: [] })
      }
    }}
  </Query>
);
