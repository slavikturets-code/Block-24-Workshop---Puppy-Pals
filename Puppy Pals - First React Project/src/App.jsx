import {puppyList} from './data.js'
import {useState} from 'react'
import './App.css'
import './mystyles.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  console.log(puppies);

  function handleClick(puppyId) {
    setFeatPupId(puppyId);
  }

  const featuredPup = puppies.find((pup) => pup.id === featPupId)
  console.log(featuredPup);

  return (
      
      <div className="App" >
        <h1>Amazing Puppies</h1>
         {puppies.map((puppy) => (
        <p onClick={() => handleClick(puppy.id)} key={puppy.id}>
          {puppy.name}
        </p>
      ))}
          

          {featPupId && featuredPup && (
        <div className="puppy">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );  
     
}

export default App
