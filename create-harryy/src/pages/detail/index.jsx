import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DetailPage = () => {
  const [detailData, setDetailData] = useState([])
  const {imdbID}=useParams()
  const getProductById=async(imdbID)=>{
    const data= await axios.get(`https://www.omdbapi.com/?apiKey=398de975&s=harry${imdbID}`)
    setDetailData( data.data)
  }
  useEffect(() => {
    getProductById(imdbID)
  
  
  }, [])
  
  return (
    <div >
        detailPage
      <p>
        {detailData?.Year}
      </p>
    </div>
  )
}

export default DetailPage