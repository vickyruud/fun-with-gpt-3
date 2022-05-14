import React from 'react';
import ResponseCard from './ResponseCard';

function ResponseList({ responses, handleResponseDelete }) {
  
  const responseArray = responses.map(response => {
      return (
        <ResponseCard
        key={response.id}
        response={response}
        question={response.question}
            handleResponseDelete={handleResponseDelete}
            reply={response.reply}
            />)
          })


  return (
    <>
    {responseArray.reverse()}
    </>
  )
}

export default ResponseList