import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [news, setNews] = useState([]);

  const getNews = async () => {
    axios.get("https://newsapi.org/v2/everything?q=tesla&from=2022-12-09&sortBy=publishedAt&apiKey=479a5350a3e044c6a7a21e03fd1298c8").then((res) => setNews(res.data.articles));
  };

  console.log(news)

  useEffect(() => {
    getNews()
  }, [])
  

  return <>
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
  </>;
}

export default App;
