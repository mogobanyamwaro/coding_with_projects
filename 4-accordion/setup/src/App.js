import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions, setQuestion] = useState(data)
  return(
    <div className="container">
      <h3>the questions and asnwers</h3>
      <section className="info">
        {
          questions.map(question=>{
            return(
              <SingleQuestion key = {question.id} {...question}/>
            )
          })
        }
      </section>
    </div>
  )
}
export default App;
