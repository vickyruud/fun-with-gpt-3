import React, {  useState, useEffect } from 'react';
import './app.css';
import TextInput from './components/TextInput';
import { v4 as uuidv4 } from 'uuid';
import Loading from './components/Loading';
import ResponseList from './components/ResponseList';
import AIEngines from './components/AIEngines';
import NavBar from './components/NavBar';
import Alert from './components/Alert';


//Sample Data
const sampleData = [{
  id: 1,
question: "Who is Gandalf?",
reply: " Gandalf is a wizard who appears in the fictional works of J.R.R. Tolkien. He is one of the most important characters in the story."
}, {
  id: 2,
  question: "Where do the Simpsons live?",
  reply: "742 Evergreen Terrace"
}]

const LOCAL_STORAGE_KEY = 'funWithGPT'


function App() {
  
  //store poem in state
  const [responses, setResponses] = useState(sampleData);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  //stores the questions and responses in local storage
  useEffect(() => {
    const responseJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (responseJSON != null) setResponses(JSON.parse(responseJSON))
  }, [])

  //When responses changes, this will re-render the component
   useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(responses))
  }, [responses])


  //calls the api and returns the data  
  const getResponse = (question, aI) => {
    const data = {
      prompt: question,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };


    fetch(`https://api.openai.com/v1/engines/${aI}/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
      body: JSON.stringify(data),
    }).then(res => res.json())
      .then(data => {
        //create a new response object
        let newResponse = {
          id: uuidv4(),
          question: question,
          reply: data.choices[0].text
        }
        setResponses([...responses, newResponse]); //adds latest response to state
        setLoading(false);
        setError(false);

      })
      .catch(err => {
        setError(true)
        setErrorMessage(err.message)
        setLoading(false);
        console.log(err);
    })
  }
  
  const handleResponseDelete = (id) => {    
    setResponses(responses.filter(response => response.id !== id));
  }



  return (
    <>
      <NavBar />  
      <div className='bg-gray-600 flex flex-col'>
        <div className='flex  items-center flex-col '> 
          <TextInput getResponse={getResponse} setLoading={setLoading} /> 
          {error ? <Alert message={errorMessage}/> : null}
          <div className='justify-center grid auto-rows-auto  grid-flow-row-dense gap-4 p-8 '>
            {loading ? <Loading/> : null}
            <ResponseList responses={responses} handleResponseDelete={handleResponseDelete} />
          </div>       
        </div>
      </div>
    </>
  )
}

export default App