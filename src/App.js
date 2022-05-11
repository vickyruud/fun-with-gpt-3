import React, { useEffect } from 'react'

function App() {

 
  
  //calls the api
  useEffect(() => {
    const data = {
      prompt: "Write a poem about a dog wearing skis",
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
      .then(data => console.log(data))
      .catch(err => {
      console.log(err);
    })
  }, [])


  return (
    <div>App</div>
  )
}

export default App