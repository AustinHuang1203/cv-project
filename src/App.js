import React, {useState} from "react";
import './styles/style.css';
import Fillin from './components/Fillin.js';
import Generate from './components/Generate.js';

function App() {
  const [name, setName] = useState();

  function update1(){
    setName(document.getElementById("name1").value);
  }

  return (
    <div class="body1">
      <div class="leftpanel">
        <input type ="text" id ="name1"></input>
        <button type="button" onClick={update1}>Submit</button>
      </div>
      <Generate name={name} />
    </div>
  );
}

export default App;
