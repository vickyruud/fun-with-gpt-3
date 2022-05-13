import { useState } from 'react';


function TextInput({ getResponse }) {

  const [question, setQuestion] = useState('');


  const handleSubmit = () => {
    getResponse(question);
  }

  return (
  <div className="flex justify-center p-4">
    <div className="mb-3 xl:w-96">
        <label
          htmlFor="exampleFormControlTextarea1"
          className="form-label inline-block mb-2 text-white font-semibold"
        >
          Ask me about anything!
        </label>
      <textarea
        className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
        onChange={(e) => setQuestion(e.target.value)}
        id="exampleFormControlTextarea1"
        rows="3"
        placeholder="Your message"
        >
        </textarea>
          <div className='flex justify-center py-2 px-4'>
          <button
            onClick={handleSubmit}
            className="bg-teal-500 hover:bg-blue-400
            text-white
            font-bold py-2 px-4
            rounded w-32"
          >
            Submit
          </button>
        </div>
      </div>
    </div>

  )
}

export default TextInput