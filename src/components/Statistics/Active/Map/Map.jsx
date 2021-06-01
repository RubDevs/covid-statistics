// Import components
import { LastCovidDataQuery } from '../../../../graphql/LastCovidDataQuery';

export const Component = ({ loading, error, data }) => {
  console.log(data);
  return (
    <section className="py-5">
      <h1>Statistics Active Map</h1>
    </section>
  )
};

export const StatisticsActiveMap = () => (
  <LastCovidDataQuery>
    {Component}
  </LastCovidDataQuery>
)