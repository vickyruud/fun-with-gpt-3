import React, {  useState, useEffect } from 'react';
import './app.css';
import ResponseCard from './components/ResponseCard';
import TextInput from './components/TextInput';
import { v4 as uuidv4 } from 'uuid';


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
  const [question, setQuestion] = useState('');
  const [responses, setResponses] = useState(sampleData.reverse())
  console.log(responses)

  //stores the questions and response in JSON

  useEffect(() => {
    const responseJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (responseJSON != null) setResponses(JSON.parse(responseJSON))
  }, [])

   useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(responses))
  }, [responses])


  //calls the api and stores data in state
  
  const getResponse = (question) => {
    const data = {
      prompt: question,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };


    fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
      body: JSON.stringify(data),
    }).then(res => res.json())
      .then(data => {
        let newResponse = {
          id: uuidv4(),
          question: question,
          reply: data.choices[0].text
        }
        setResponses([...responses, newResponse])
      })
      .catch(err => {
      console.log(err);
    })
  }
  



  return (
    <div className='h-screen flex flex-col align-center justify-center bg-gray-700'>      
      <TextInput getResponse={getResponse} question={question} setQuestion={setQuestion} /> 
      
      {responses.reverse().map(response => {
        return <ResponseCard key={response.id} question={response.question} reply={response.reply} />
      })}
       
    </div>
  )
}

export default App