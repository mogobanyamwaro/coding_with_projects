import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setState] = useState(data)
  return <main>
      
      <h2>{people.length} birthdays today</h2>
      <button onClick ={()=>setState([])}>clear all</button>
      <List people ={people}/>
      


  </main>;
}

export default App;
