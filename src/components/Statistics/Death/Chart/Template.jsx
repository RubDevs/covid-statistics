// Import libraries
import { connect } from 'react-redux';
import Chart from 'react-apexcharts';

export const Component = ({ deathData }) => (
  <Chart
    options={{
      chart: {
        id: "basic-line"
      },
      xaxis: {
        categories: deathData.map(d => d.CreationDate.slice(0, 10)),
        labels: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      title: {
        text: 'Death predictions',
        align: 'left',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize:  '25px',
          fontWeight:  'bold',
          fontFamily:  "Nanum Gothic",
          color:  '#263238'
        },
    }
    }}
    series={[
      {
        name: "Death Predictions",
        data: deathData.map(d => Math.round(d.values))
      }
    ]}
    type="line"
    width="100%"
  />
);

// Map state
const mapStateToProps = state => ({
  deathData: state.predictionsReducer.deathData
});

export const Template = connect(mapStateToProps, null)(Component);