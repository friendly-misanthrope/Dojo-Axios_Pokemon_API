import {useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';

function App() {

  // set up state to store and set all items from API response
  const [allPokemon, setAllPokemon] = useState([])

  // employ useEffect to make an API call with axios.get()
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
    // If response comes back good, update AllPokemon state variable
    .then((response) => {
      // console.log(response.data.results)
      setAllPokemon(response.data.results)
    })
    // otherwise log the error to the console
    .catch((error) => {
      console.log(error)
    })
  }, [])

  // JSX Return
  return (
    <div className="App">
      <h1>All {allPokemon.length} Pokemon</h1>
      {/* map through allPokemon array, rendering  */}
      <ul className="all-pokemon">
        {
          allPokemon.map((poke, index) => {
            return <li key={index} className="each-poke">{poke.name}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
