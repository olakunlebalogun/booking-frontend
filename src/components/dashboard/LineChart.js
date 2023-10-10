import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as Chartjs } from 'chart.js/auto'


const LineChart = ({data}) => {
  return (
    <div>
<Line data={data} />
    </div>
  )
}

export default LineChart