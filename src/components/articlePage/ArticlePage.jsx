import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ArticlePage() {

  const params = useParams();
  const [article , setArticle] = useState({});
  useEffect(()=>{
    axios.get(`http://localhost:8000/articles/${params.id}`)
    .then((result)=>{
      setArticle(result.data);
      console.log(result.data);
      
    })
  } , [])
  return (
    <div className="customContainer">
      <h3 className="text-xl font-medium text-cyan-700">{article.title}</h3>
      <div className="flex items-center">
        <p className="text-gray-500 mt-3 mb-15">
            <span>Author: {article.author}</span>
            <span className="mx-5">Study time {article.time} minutes</span>
            <span>{article.date}</span>
        </p>
      </div>
      <img className="mx-auto mb-10" src={article.image} alt="" />
      <p className="text-lg text-cyan-800">{article.description}</p>
    </div>
  )
}


export default ArticlePage;