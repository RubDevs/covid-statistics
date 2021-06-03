import React from 'react'
import Chart from 'react-apexcharts'

const options = {
  chart: {
    id: "basic-bar"
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
  },
  theme :{
    palette: 'palette4'
  },
  title: {
    text: "Covid-19 Deaths Projections",
    align: 'center',
    margin: 10,
    floating: false,
    style: {
      fontSize:  '18px',
      fontWeight:  'bold',
      fontFamily: "Noto Sans JP",
      color: '#033a75',
    },
  },
  stroke: {
    curve: 'smooth',
  }
}

const series = [
  {
    name: "series-1",
    data: [30, 40, 45, 50, 49, 60, 70, 91]
  }
]

export const StatisticsDeathChart = () => (
  <div className="container-fluid">
    <section className="row">
      <div className="col-9">
        <Chart
          options={options}
          series={series}
          type="line"
          width="700"
        />
      </div>
    </section>
  </div>
);