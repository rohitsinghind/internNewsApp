import React,{ useState, useEffect } from 'react'
import axios from "axios";
import "../App.css"

export default function News() {
    const [news, setNews] = useState([]);
    const [category, setCategory] = useState("general")
  
    const getNews = async () => {
      axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=45cda00ea17e4e70bec0d1e6653c03ec`).then((res) => setNews(res.data.articles));
    };
  
    console.log(category)
  
    useEffect(() => {
      getNews();
    }, [category])

  return (
        <>
         {
      news.map((e)=>{
        return (
        <>
        <h2>{e.title}</h2>
        <img src={e.urlToImage} alt="" />
        <p>{e.description}</p>
        <a href={e.url}>read more</a>
        </>)
      })
    }
    </>
  )
}
