import React, {useState} from 'react'


import {cardOneList, lineChartData, tableData} from './../components/dashboard/dashboard-data'

import DashNav from '../components/dashboard/DashNav'
import DashCard from '../components/dashboard/DashCard'
import Table from '../components/dashboard/Table'

import './../assets/css/pages/Dashboard.css'
import LineChart from '../components/dashboard/LineChart'
import BarChart from '../components/dashboard/BarChart'



const Dashboard = () => {

   const [chartData, setChartData] = useState({
     labels: lineChartData.map((data) => data.month.substring(0,3)),
     datasets: [
       {
         label: 'Yearly Report',
         data: lineChartData.map((data) => data.amount),
         backgroundColor: [
           'rgba(75,192,192,1)'
          //  '#ecf0f1',
          //  '#50AF95',
          //  '#f3ba2f',
          //  '#2a71d0',
         ],
         borderColor: 'black',
         borderWidth: 2,
       },
     ],
   })

   const [barData, setBarData] = useState({
     labels: lineChartData.map((data) => data.month.substring(0, 3)),
     datasets: [
       {
         label: 'Yearly Report',
         data: lineChartData.map((data) => data.amount),
         backgroundColor: [
          //  'rgba(75,192,192,1)',
          //   '#ecf0f1',
          //   '#50AF95',
          //   '#f3ba2f',
            '#2a71d0',
         ],
         borderColor: 'black',
         borderWidth: 2,
       },
     ],
   })
  return (
    <div className='sb-nav-fixed'>
      <DashNav />
      <div id='layoutSidenav'>
        <div id='layoutSidenav_content'>
          <main>
            <div className='container-fluid px-4'>
              <h1 className='mt-4'>Dashboard</h1>
              <ol className='breadcrumb mb-4'>
                <li className='breadcrumb-item active'>Dashboard</li>
              </ol>
              <div className='row'>
                {cardOneList.map((card) => (
                  <DashCard key={card.id} {...card} />
                ))}
              </div>
              <div className='row'>
                <div className='col-xl-6'>
                  <div className='card mb-4'>
                    <div className='card-header'>
                      <i className='fas fa-chart-area me-1'></i>
                      Yearly Booking Metrics
                    </div>
                    <div className='card-body'>
                      {/* <canvas
                        id='myAreaChart'
                        width='100%'
                        height='40'
                      ></canvas> */}
                      <LineChart data={chartData} />
                    </div>
                  </div>
                </div>
                <div className='col-xl-6'>
                  <div className='card mb-4'>
                    <div className='card-header'>
                      <i className='fas fa-chart-bar me-1'></i>
                      Monthly Booking Metrics
                    </div>
                    <div className='card-body'>
                      {/* <canvas id='myBarChart' width='100%' height='40'></canvas> */}
                      <BarChart data={barData} />
                    </div>
                  </div>
                </div>
              </div>
              <div className='card mb-4'>
                <Table data={tableData} />
              </div>
            </div>
          </main>
          <footer className='py-4 bg-light mt-auto'>
            <div className='container-fluid px-4'>
              <div className='d-flex align-items-center justify-content-between small'>
                <div className='text-muted'>
                  Copyright &copy; Just Klean 2023
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Dashboard