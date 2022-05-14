import React from 'react'

function ResponseCard(props) {
  
  
  const {handleResponseDelete, response } = props

  const {question, reply, id} = response
  
  return ( 
    <div className="flex flex-col align-bottom justify-between p-4  bg-gray-500 rounded-lg border border-gray-200 h-72 md:w-96 ">
      <h5 className="mb-2 text-xl font-bold tracking-tight text-white">{question}</h5>      
      <p className="mb-3 text-white font-semibold ">{reply}</p>     
      <button
            onClick={() => handleResponseDelete(id)}
            className="bg-red-500 hover:bg-orange-600
            text-white
            font-bold py-2 px-4
            rounded w-32"
          >
            Delete
          </button>
    </div>
  )
}

export default ResponseCard