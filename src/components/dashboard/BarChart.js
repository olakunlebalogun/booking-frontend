import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as Chartjs } from 'chart.js/auto'
const BarChart = ({data}) => {
  return (
    <div>
        <Bar data={data} />
    </div>
  )
}

export default BarChart