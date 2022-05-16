import { useState } from 'react';
import AIEngines from './AIEngines';
import Alert from './Alert';


function TextInput({ getResponse, setLoading }) {

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
    <div className="mb-3 xl:w-96 flex flex-row flex-wrap justify-between">
        <label
          htmlFor="exampleFormControlTextarea1"
          className="form-label inline-block mb-2 text-white font-semibold"
          >Ask AI anything:       
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
          h-auto
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          "
        onChange={(e) => setQuestion(e.target.value)}
        id="textArea"
        rows="3"
        placeholder="Type your question here..."
        autoFocus
        >
        </textarea>
        <AIEngines setAI={setAI} />
          <button            
            className="bg-blue-500 hover:bg-teal-500
            text-white
            font-bold py-2 px-4
            rounded
            mt-3
            md:m-3"
            type='submit'
            >
            Submit
          </button>
      </div>
      </form>
      {errorMessage ? <Alert message={errorMessage}/> : null}
    </div>

  )
}

export default TextInput

