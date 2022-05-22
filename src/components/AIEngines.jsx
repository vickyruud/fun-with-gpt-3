import React from 'react'

function AIEngines({ setAI }) {
  return (
    <div className='flex flex-col items-start'>
       <label
          htmlFor="select-ai-engine"
          className="form-label inline-block mb-2 text-white text-xl font-semibold mt-4"
          >Select an AI Engine:       
        </label>
      <select className="form-select appearance-none
        block
        w-full
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding bg-no-repeat
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        aria-label="Default select example"
        onChange={(e) => setAI(e.target.value)}
      >
        <option value="text-ada-001">Ada</option>
        <option value="text-babbage-001">Babbage</option>
        <option value="text-curie-001">Curie</option>
        <option value="text-davinci-002">Da Vinci</option>
      </select>
    </div>
  )
}

export default AIEngines