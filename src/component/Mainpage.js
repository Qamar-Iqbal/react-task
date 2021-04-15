import React, { useState } from 'react';
import fire from '../config/fire';



export default function Mainpage() {
  const [title, setTitle] = useState('');

  const handleOnChangedata = (e) => {
    setTitle(e.target.value);
  };
  const createdata = () => {
    const dataRef = fire.database().ref('text');
    const text = {
      title
    };

    dataRef.push(text);
  };

  const logout =()=>{
    fire.auth().signOut();
}
  return (
    <div>
        <h1> **WELCOME**  </h1>
        <input type="text" placeholder="Enter to new text" onChange={handleOnChangedata} value={title} />
        <button onClick={createdata}>Add Data</button>
        <button onClick= {logout} >logout</button>

    </div>
  );
}