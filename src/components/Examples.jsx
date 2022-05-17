import React from 'react'

function Examples({ loadExample }) {

 

  return (
    <div>
       <button
                className="bg-blue-500 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded mt-3"
                onClick={loadExample} type="button"
              >
            Load an example
          </button>
    </div>
  )
}

export default Examples