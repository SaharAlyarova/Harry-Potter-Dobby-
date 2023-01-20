import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DetailPage = () => {
  const [detailData, setDetailData] = useState({})
  const {imdbID}=useParams()
  const getProductById=async(imdbID)=>{
    const data= await axios.get( `https://www.omdbapi.com/?apiKey=398de975&i=${imdbID}`)
    setDetailData(await data.data)
  }
  useEffect(() => {
    getProductById(imdbID)
  }, [])
  
  return (
    <div style={{color:"white"}}>
        detailPage
      <p style={{color:"white"}}>
        {detailData?.Year}
      </p>
     { console.log(detailData)}
      <p style={{color:"white"}}>
        {detailData?.Type}
      </p>
      <h1></h1>
    </div>
  )
}

export default DetailPage