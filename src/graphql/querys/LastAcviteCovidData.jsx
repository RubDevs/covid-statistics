// Import libraries
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

export const LastActiveCovidData = ({ children }) => (
  <Query
    query={gql`
      {
        Statistics {
          CountryCodeId
          Confirmed
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (data) {
        const statistics = data.Statistics.map(country => ({
          id: country.CountryCodeId,
          value: country.Confirmed
        }))
        return children({ loading, error, data: statistics })
      } else {
        return children({ loading, error, data: [] })
      }
    }}
  </Query>
);
