import React from 'react';
import LoadingSpin from "react-loading-spin";

function Loading() {
  return (
    <div className='flex justify-center align-middle'>
      <LoadingSpin />
    </div>
  )
}

export default Loading