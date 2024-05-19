import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './UserInput.css';

function UserInput() {
  const [name, setName] = useState("");
  

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
     
    
  }
  
 

  return (
    <form className='Inputform' onSubmit={handleSubmit}>
      <label>
        <h1>Describe you Quiz</h1>
        <textarea
          className='textarea'
          placeholder='e.g. Generate 10 questions on Linux Administration'
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        <button  className='submitButton' type="submit"><h2>Submit</h2></button>
      </label>

    </form>
  )
}

export default UserInput;