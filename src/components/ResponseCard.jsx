import React from 'react'

function ResponseCard(props) {
  
  
  const {handleResponseDelete, response } = props

  const {question, reply, id} = response
  
  return ( 
    <div className="flex flex-col align-bottom justify-between p-4  bg-gray-500 rounded-lg border border-gray-200 md:h-72 max-w-prose ">
      <h5 className="mb-2 text-xl font-bold tracking-tight text-white">{question}</h5>      
      <p className="mb-3 text-white font-semibold ">{reply}</p>     
      <button
            onClick={() => handleResponseDelete(id)}
            className="bg-red-500 hover:bg-orange-600
            text-white
            font-bold py-2 px-4
            rounded w-fit"
          >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
          </button>
    </div>
  )
}

export default ResponseCard