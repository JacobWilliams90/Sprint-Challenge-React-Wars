import React, { useState, useEffect }from 'react';
import './App.css';
import axios from 'axios'
import Card from './components/profile';

const App = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    function getData(){
      axios
        .get(`https://swapi.co/api/people/`)
        .then(res => {
          setResults(res.data.results);
        })
        .catch(err => console.log(err))
    }
    getData();
  },[])

  console.log(results)
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {results.map(person => {
        return <Card key={person} person={person}/>;
      })}
    </div>
  );
}

export default App;
