
import React from 'react'
import "./Spinner.css"
const Spinner = () => {
  return (
    <div className="flex flex-col justify-center items-center absolute top-64">
      <div className='spinner'></div>
      <p className="text-bgDark text-lg font-semibold">Loading....</p>
    </div>
  )
}

export default Spinner;