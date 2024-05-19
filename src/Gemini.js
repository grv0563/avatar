import React from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai';
function Gemini() {

    // Access your API key as an environment variable (see "Set up your API key" above)
    const genAI = new GoogleGenerativeAI("AIzaSyB0T3WZxbE0UG5vs4TI-B-nTt2I2SNYtFg");
    
    // ...
    
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    
    // ...
    async function run() {
        const prompt = "Generate 10 question on Linux Administration on bloom's Level 1 and Earch question has four options and first correct and rest 3 incorrect"
      
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        console.log(text);
        document.getElementById("demo").innerHTML = text;
        
      }
      
    run();


  return (

    <div>
        <h1>Generating the Quiz Question</h1>
        <h3 id="demo">

        </h3>
    </div>

  )
}

export default Gemini