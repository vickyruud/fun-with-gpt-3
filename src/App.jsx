import React, { useEffect, useState } from 'react';
import './app.css';
import Form from './components/Form';
import SiteDetails from './components/SiteDetails';

//mock data
const mockData = {
  text: 'Here goes poem',
  index: 5,
  logprobs: null,
  finish_reason:'stop'
}

function App() {

  //store poem in state
  const [poem, setPoem] = useState('')
  
  //calls the api and stores data in state
  useEffect(() => {

    setPoem(mockData.text);
    // const data = {
    //   prompt: "What did Frodo achieve?",
    //   temperature: 0.5,
    //   max_tokens: 64,
    //   top_p: 1.0,
    //   frequency_penalty: 0.0,
    //   presence_penalty: 0.0,
    // };

    // fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
    //   },
    //   body: JSON.stringify(data),
    // }).then(res => res.json())
    //   .then(data => {
    //     console.log(data.choices[0])
    //     setPoem(data.choices[0].text);
    //   })
    //   .catch(err => {
    //   console.log(err);
    // })
  }, [])


  return (
    <>
      <SiteDetails />
    </>
  )
}

export default App