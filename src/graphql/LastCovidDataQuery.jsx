// Import libraries
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

export const LastCovidDataQuery = ({ children }) => (
  <Query
    query={gql`
      {
        Statistics {
          CountryCodeId
          CreationDate
          Deaths
          Confirmed
        }
      }
    `}
  >
    {({ loading, error, data }) => children({ loading, error, data })}
  </Query>
);
