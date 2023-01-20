import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
// import { Input } from "@chakra-ui/input"
// import {  Stack } from "@chakra-ui/Stack"
import SearchInput from "../../components/input/index";
import { Input } from 'antd';
// import {
//   Input,
 
// } from "@chakra-ui/input"
const HomePage = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      "https://www.omdbapi.com/?apiKey=398de975&s=harry"
    );

    setData(await response.data);
  };
  useEffect(() => {
    getData();
  }, []);
//search
  const handleChange = async (e) => {
    
      const searchDatas = await axios.get("https://www.omdbapi.com/?apiKey=398de975&s=harry") 
    
      setData([...searchDatas.data.Search.filter((el) =>
        el.Title.includes(e.target.value)
      )]);

    console.log(([...searchDatas.data.Search.filter((el) =>
      el.Title.includes(e.target.value)
    )]))
  };
//sort
  const handleSort=()=>{
    const sortedData = data?.Search.sort((a,b) => a.Title > b.Title ? 1 : -1)
    setData([...data], sortedData)
  }

  //link(https://www.omdbapi.com/?apiKey=398de975&s=harry)
  return (
    <div style={{maxWidth:"1300px",margin:"0 auto"}}>
  

  <input type="text" onChange={(e)=>{
  handleChange(e)
}} />
<button onClick={()=>{handleSort()}}>Sort</button>
      <h4 style={{ color: "blue" }}>Movies</h4>
    <div >
    
    {data.Search?.map((element) => {
        return (
          <Link key={element.imdbID} to={`/:${element.imdbID}`}  style={{ display: "flex", flexWrap: "wrap", maxWidth:"1300px",margin:"0 auto" }}>
            <div className="zoom"  style={{backgroundColor:"#5C5C5C", color:"white",margin:"0 auto", margin:"10px",rowGap:"4%"}}>
            <div>
              <img  src={element.Poster} alt="" style={{width:"100%", height:"400px"}} />
            </div>
            <div>
              <p>{element.Title}</p>
              <p>{element.Year}</p>
            </div>
          </div>
          
          </Link>
        );
      })}
    
    </div>
    </div>
  );
};
export default HomePage;
