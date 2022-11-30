import "./style.css";
//import FormControl from '@mui/material/FormControl';
import { FormControl } from '@mui/material';
import { InputLabel } from '@mui/material';
import { Input } from '@mui/material';
import { FormHelperText } from '@mui/material';
import Datepicker from "./Datepicker";
import {CalendarOutlined }from "@ant-design/icons"
import React, { useState, useEffect } from "react";

const getLocalData = () => {
    const lists = localStorage.getItem("mytodolist");
  
    if (lists) {
      return JSON.parse(lists);
    } else {
      return [];
    }
  };

const Schedular=()=>
{
    
    const [inputdata, setInputData] = useState("");
    const [descData, setDescData] = useState("");
    const [items, setItems] = useState(getLocalData());



    const getTimeVal=(timeData)=>
{
    console.log(timeData);

}

    const addItem = () => {
        if (!inputdata) {
          alert("plz fill the data");
        } else {
          const myNewInputData = {
            id: new Date().getTime().toString(),
            name: inputdata,
            desc: descData,
            //time: currTimeData
          };
          setItems([...items, myNewInputData]);
          setInputData("");
          setDescData("");
        }
      };
    
      useEffect(() => {
        localStorage.setItem("mytodolist", JSON.stringify(items));
      }, [items]);
    
    
    return(
        <div className="main-div">
            <div className="child-div" style={{width:"50%" , float:"left"}}>
            <figure>
                <CalendarOutlined style={{
                    color:"orange",fontSize:75
                    }}/>
            <figcaption>List your TODO Items</figcaption>
          </figure>
    <div>
    <FormControl>
  <InputLabel htmlFor="my-input" style={{size:"200px",color:"Beige"}}>Name</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" 
                 value={inputdata}
              onChange={(event) => setInputData(event.target.value)
              }/>
  <FormHelperText id="my-helper-text">Enter your full Name</FormHelperText>
</FormControl>
<br></br>
<br></br>
</div>
<div>
<FormControl>
  <InputLabel htmlFor="my-input" style={{color:"beige"}}>Description:</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" 
            value={descData}
            onChange={(event)=>setDescData(event.target.value)}/>
  <FormHelperText id="my-helper-text">Describe the task.</FormHelperText>
</FormControl>
</div>
<br></br>
<br></br>
<Datepicker onchange={getTimeVal}/>

<br></br>
<br></br>
<div>
<button
              className="btn effect04"
              data-sm-link-text="Set it Up!"
              onClick={addItem}>
              
              <span> Confirm </span>
            </button>
 </div>





</div>
<div className="child-div" style={{width:"50%" , float:"right"}}>

<div className="showItems">
            {items.map((curElem) => {
              return (
                
                <div className="eachItem" key={curElem.id}>
                  <h3>{curElem.name}
                  <br/>
                  <h4>{curElem.desc}</h4>
                  <br/>
                  {curElem.time}</h3>
                 
                  <div>
                
                </div>
                  
                </div>
               
              );
            })}
          </div>
   
</div>
</div>

    );
}
export default Schedular;