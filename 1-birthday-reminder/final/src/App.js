import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data)
  return (
          <>
                <h4>{people.length} birthdays</h4>
                <button onClick ={()=>{[]}}>clear all</button>
                <List people = {people}/>
          </>

  );
}

export default App;
