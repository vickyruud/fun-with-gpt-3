import React from 'react'

function ResponseCard(props) {
  
  const {handleResponseDelete, response } = props

  const {question, reply, id} = response
  
  return ( 
    <div className="flex flex-col align-bottom justify-between p-4  bg-gray-500 rounded-lg border border-gray-200 h-64 w-96">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{question}</h5>      
      <p className="mb-3 font-normal text-white font-semibold ">{reply}</p>
      <div onClick={() => handleResponseDelete(id)}  className="flex justify-center w-auto items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-800 ">
        Delete
        <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"></svg>
      </div>
    </div>
  )
}

export default ResponseCard