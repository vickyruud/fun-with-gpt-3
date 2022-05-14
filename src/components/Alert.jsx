import React from 'react'

function Alert({ message }) {
  
  return (
    <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 md:w-96" role="alert">
      <p className="font-bold">Error!</p>
      <p>{message}</p>
    </div>
  )
}

export default Alert