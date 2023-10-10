import React from 'react'

const DashCard = ({name, count, color}) => {

   
const addColor = {
  backgroundColor: color,
}
  return (
    <div className='col-xl-3 col-md-6'>
      <div className='card  text-white mb-4' style={addColor}>
        <div className='card-header'>{name}</div>
        <div className='card-body'>{count}</div>
      </div>
    </div>
  )
}

export default DashCard