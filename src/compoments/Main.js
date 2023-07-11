import React, { useState } from 'react'
import { useEffect } from 'react';
import {AiOutlinePlusCircle} from "react-icons/ai";
import { Toast, toast } from 'react-toastify';
import {ToastContainer} from 'react-toastify';
import './Custom.css';
import "./Main.css"
const Main = () => {
    const [input,setInput]=useState('')
    const [list,setList]=useState([])
   
    const deletedata = (itemToDelete) => {
        const updatedItems = list.filter((item) => item !== itemToDelete);
        setList(updatedItems);
      };

  const AddData = () => {
    if (input.trim() !== '') { // Check if the input is not empty or only contains whitespace
      const updatedItems=([...list, input]);
      setList(updatedItems);
      setInput('');
      localStorage.setItem('data', JSON.stringify(updatedItems));
      toast.success('Your Note is added!',{
        style: {
        
          backgroundColor:'black',
          color:'wheat'
        },
      });
    }
  };
  useEffect(() => {
    const savedData = localStorage.getItem('data');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        if (Array.isArray(parsedData)) {
          setList(parsedData);
        } else {
          setList([]);
          console.error('Invalid data in local storage. Expected an array.');
        }
      } catch (error) {
        setList([]);
        console.error('Error parsing data from local storage:', error);
      }
    }
  }, []);
  return (
   <>
   <div>
  <div className="input-group inputdiv" >
    <input type="text" className="form-control" placeholder="Add Your Text" style={{height:"67px",fontSize:"20px"}} value={input} onChange={e=>setInput(e.target.value)} />
    <div className="input-group-btn">
      <button className="btn btn-default btn-lg" type="submit" style={{background:"#FFFF59"}} >
        <i className="glyphicon glyphicon-send " style={{height:"35px",fontSize:"30px",backgroundColor:"#FFFF59",padding:"10px"}} onClick={AddData}> <ToastContainer /></i>
      </button>
    </div>
  </div>
  <div className='grid-container'>
 { list.map((element, index) => {
        return (
          <div key={index}>
            <h2 className='card'> {element}
            <i className="glyphicon glyphicon-trash deleteicon" onClick={() => deletedata(element)}></i>
            </h2>
          </div>
        );
      })}
      </div>
</div>
   </>
  )
}

export default Main;