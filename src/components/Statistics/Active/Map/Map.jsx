// Import libraries
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Maps from 'fusioncharts/fusioncharts.maps';
import World from 'fusionmaps/maps/fusioncharts.worldwithcountries';
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
// Import components
import { Spinner } from '../../../UI/Spinner/Spinner';
import { LastActiveCovidData } from '../../../../graphql/querys/LastAcviteCovidData';
// Import data
import { dataSource } from './data';
// Resolves charts dependancy
ReactFC.fcRoot(FusionCharts, Maps, World, FusionTheme);

export const Component = ({ loading, error, data }) => {
  return (
    <section className="py-5">
      {loading ?
        <div className="d-flex w-100 justify-content-center">
          <Spinner size={50} />
        </div>
        :
        <ReactFC
          type="maps/worldwithcountries" 
          width="100%" 
          height="600"
          dataFormat="json"
          dataSource={dataSource(data)}
        />
    }
    </section>
  )
};

export const StatisticsActiveMap = () => (
  <LastActiveCovidData>
    {Component}
  </LastActiveCovidData>
)
