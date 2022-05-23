import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import CandidateCard from "./components/CandidateCard";
import "./styles.css";

// import {handleApi} from "./components/CandidateCard"


export default function App() {
  const [loading , setLoading] = useState(true)
  const [error , setError] = useState(false)
  const [data, setData] = useState([]);
  
useEffect(()=>{
  getData();
},[])
 
const getData = ()=>{
  setLoading(true)
  axios({
    method: "GET",
    url:"http://localhost:8080/candidates",
  })
  .then((res)=>{
    setData(res.data)
    setLoading(false)
  })
  .catch((error)=>{
    setError(true)
    setLoading(false)
  })
};
console.log(data)

  return (
    <>
    <div className="App">
      <div>
        {loading && <div id="loading-container">...Loading</div>}
        {error && <div id="error-container">...Error</div>}
        <Button id="SORT_BUTTON" title={`Sort by Ascending Salary`} />
        <Button title="PREV" id="PREV" />
        <Button  id="NEXT" title="NEXT" />
      </div>
      {data.map((item) => (
        <CandidateCard key={item.id} {...item}/>
      ))}
      
    </div>
    
    </>
  );
}

