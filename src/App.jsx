import React, {  useState } from 'react';
import './app.css';
import TextInput from './components/TextInput';

//mock data
// const mockData = {
//   text: 'Here goes poem',
//   index: 5,
//   logprobs: null,
//   finish_reason:'stop'
// }

function App() {

  //store poem in state
  const [reply, setReply] = useState('')
  const [question, setQuestion] = useState('');


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
        console.log(data.choices[0])
        setReply(data.choices[0].text);
      })
      .catch(err => {
      console.log(err);
    })
  }
  



  return (
    <div className='h-screen flex flex-col align-center justify-center bg-purple-900'>      
      <TextInput getResponse={getResponse} question={question} setQuestion={setQuestion} /> 
      <div className="flex justify-center text-white font-medium">
        <a href="#" class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Question: {question}</h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">{reply}</p>
        </a>
      </div>  
    </div>
  )
}

export default App