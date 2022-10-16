import React, {useState} from "react";
import './styles/style.css';
import Fillin from './components/Fillin.js';
import Generate from './components/Generate.js';

function App() {
  const [firstname, setfirstname] = useState();
  const [lastname, setlastname] = useState();
  const [title, settitle] = useState();
  const [address, setaddress] = useState();

  function update1(){
    setfirstname(document.getElementById("name1").value);
    setlastname(document.getElementById("name2").value);
    settitle(document.getElementById("title1").value);
    setaddress(document.getElementById("address1").value);
  }

  return (
    <div class="body1">
      <div class="leftpanel">

        <input type ="text" id ="name1" placeholder="First Name" onChange={update1}></input>
        <input type ="text" id ="name2" placeholder="Last Name" onChange={update1}></input>
        <input type ="text" id ="title1" placeholder="Title" onChange={update1}></input>
        <input type ="text" id ="address1" placeholder="Address" onChange={update1}></input>
        
        <button type="button" onClick={update1}>Submit</button>
      </div>
      <Generate firstname={firstname} lastname={lastname} title={title} address={address}/>
    </div>
  );
  
}

export default App;
