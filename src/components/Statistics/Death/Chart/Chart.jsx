import React from 'react'
import Chart from 'react-apexcharts'

const options = {
  chart: {
    id: "basic-bar",
    toolbar: {
      show: true,
      offsetX: 5,
      offsetY: 2,
      tools: {
        download: true,
        selection: true,
        zoom: true,
        zoomin: true,
        zoomout: true,
        reset: true | '<img src="/static/icons/reset.png" width="20">',
      }
    }
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
  },
  theme: {
    palette: 'palette4'
  },
  title: {
    text: "Covid-19 Deaths Projections",
    align: 'center',
    margin: 10,
    floating: false,
    style: {
      fontSize: '14px',
      fontFamily: "Nanum Gothic",
      color: '#033a75',
    },
  },
  stroke: {
    curve: 'smooth',
    width: 2,
  },
  responsive: [{
    breakpoint: 500,
    options: {
      chart: {
        toolbar: {
          show: true,
          tools: {
            download: false,
            selection: false,
            zoom: false,
            zoomin: true,
            zoomout: false,
            pan: false,
            reset: true | '<img src="/static/icons/reset.png" width="20">',
          }
        },
        width: '290'
      },
    }
  }]
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
      <div className="col-10 col-xl-6">
        <Chart
          options={options}
          series={series}
          type="line"
          width="640"
        />
      </div>
    </section>
  </div>
);