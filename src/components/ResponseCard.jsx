import React from 'react'

function ResponseCard({ question, reply }) {
  
  
  return (
    <div className="flex justify-center py-2 px-4 text-white font-medium">
        <div href="#" class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Question: {question}</h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">Response: {reply}</p>
        </div>
    </div> 
  )
}

export default ResponseCard