import { useState } from 'react';
import AIEngines from './AIEngines';
import Alert from './Alert';
import Examples from './Examples';


function TextInput({ getResponse, setLoading, loadExample }) {

  const [question, setQuestion] = useState('');//sets the question
  const [aI, setAI] = useState('');//sets the AI engine
  const [errorMessage, setErrorMessage] = useState('');//sets the error message

  //handles form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const prompt = question.trim() // removes any spaces or line breaks
    if (!prompt) {
      setErrorMessage('Please enter a question before submitting.')
      return null;
    }
    if (aI === 'Select an AI Engine' || !aI) {
      setErrorMessage('Please select an AI engine before submitting.')
      return null;
    }
    setErrorMessage(false);
    setLoading(true);
    getResponse(question, aI);
    const textArea = document.getElementById('textArea');
    textArea.value = ''
    setQuestion('')

  }

  return (
    
    <div className="flex flex-col  p-4 text-white">
    <form onSubmit={handleSubmit}>
    <div className="mb-3 xl:w-96 flex flex-col flex-wrap justify-between">
        <label
          htmlFor="textarea"
          className="form-label inline-block mb-2 text-white text-xl font-semibold"
          >Get answers to all your trivia questions!      
        </label>
      <input
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
          h-auto
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          "
        onChange={(e) => setQuestion(e.target.value)}
        id="textArea"
        rows="3"
        placeholder="Type your question here..."
        autoFocus
        >
      </input>
        <AIEngines setAI={setAI} />
          <div className='flex flex-col xl:flex-row justify-between'>
          <button            
            className="bg-blue-500 hover:bg-teal-500
            text-white
            font-bold py-2 px-4
            rounded
            mt-3
            w-40
            xl:w-auto
            "
            type='submit'
            >
            Submit
          </button>
           <Examples loadExample= {loadExample} />
        </div>

      </div>
      </form>
      {errorMessage ? <Alert message={errorMessage}/> : null}
    </div>

  )
}

export default TextInput

