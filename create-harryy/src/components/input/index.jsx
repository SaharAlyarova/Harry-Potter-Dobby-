import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchInput = ({ setData }) => {
  
  const [name, setName] = useState([]);
  const BASE_URL = "https://www.omdbapi.com/?apiKey=398de975&s=harry";

  useEffect(() => {
    axios.get(BASE_URL).then((data) => setName(data.data));
  }, []);

  const searchName = (e) => {
    let newData = name.Search.filter((element) =>
      element.Title
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase())
    );
    setData(newData);
  
  };
  useEffect(() => {
    axios.get(BASE_URL).then((data) => setName(data.data));
  }, []);



  
  return (
    <div>
      <div className="input">
        <input type="text" onChange={(e) => searchName(e)}  placeholder="search for fun..."/>
      </div>
    </div>
  );
};

export default SearchInput;
