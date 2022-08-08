import React, {  useState, useEffect } from 'react';
import './app.css';
import TextInput from './components/TextInput';
import { v4 as uuidv4 } from 'uuid';
import Loading from './components/Loading';
import ResponseList from './components/ResponseList';
import NavBar from './components/NavBar';
import Alert from './components/Alert';
import {questions} from './components/questions';



//local storage key
const LOCAL_STORAGE_KEY = 'funWithGPT'


function App() {
  
  //store  in state
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(false);  

  //sets error message
  const [errorMessage, setErrorMessage] = useState('')

  //stores the questions and responses in local storage
  useEffect(() => {
    const responseJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    try {
      if (responseJSON != null) setResponses(JSON.parse(responseJSON))
    } catch (e) {
      if (e.code === 22) {
        setErrorMessage('Local Storage is full!')
      }
    }
  }, []);

  //When responses change, this will re-render the component
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(responses))
    } catch (e) {
       if (e.code === 22) {
        setErrorMessage('Local Storage is full!')
      }
    }
  }, [responses]);

  //loads random question and gets a response
  const loadExample = () => {    
    setLoading(true);    
    const randomIndex = Math.floor(Math.random() * questions.length);
    getResponse(questions[randomIndex], 'text-davinci-002');
    
  }
  
 
  
  
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
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
      },
      body: JSON.stringify(data),
    }).then(res => res.json())
      .then(data => {
        //create a new response object
        let newResponse = {
          id: uuidv4(), //generates random ID
          question: question,
          reply: data.choices[0].text
        }
        setResponses([...responses, newResponse]); //adds latest response to state
        setLoading(false);
        setErrorMessage(false);

      })
      .catch(err => { //handles errors
        setErrorMessage(err.message)
        setLoading(false);
    })
  }
  
  //deletes the response
  const handleResponseDelete = (id) => {    
    setResponses(responses.filter(response => response.id !== id));
  }



  return (
    <>
      <NavBar /> 
      <main>
      <div className='bg-gray-600 flex flex-col'>
        <div className='flex  items-center flex-col '> 
          <TextInput getResponse={getResponse} setLoading={setLoading} loadExample={loadExample} /> 
          {errorMessage ? <Alert message={errorMessage}/> : null}
          <div className='justify-center grid auto-rows-auto  grid-flow-row-dense gap-4 p-8 '>
            {loading ? <Loading/> : null}
            <ResponseList responses={responses} handleResponseDelete={handleResponseDelete} />
          </div>       
        </div>
      </div>
    </main>
    </>
  )
}

export default App;