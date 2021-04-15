import React,{useState} from 'react';
import fire from '../config/fire';
import '../App.css';

export default function Update({ dt }) {
  const [title1, setTitle] = useState('');
  const handleOnChangedata_ = (e) => {
    setTitle(e.target.value);} 
    
  const deleteTodo = () => {
    const dataRef = fire.database().ref('text').child(dt.id);
    dataRef.remove();
  };
  const completeTodo = () => {
    const dataRef = fire.database().ref('text').child(dt.id);
    
    dataRef.update({
      title: title1
    });
  };
  return (
    <div>
      <h1 className={dt.title ? 'title' : ''}>{dt.title}</h1>
      <button onClick={deleteTodo}>Delete</button>
      <input type="text" placeholder="Enter to update text" onChange={handleOnChangedata_} value={title1} />
      <button onClick={completeTodo} >Update</button>
    </div>
  );
}