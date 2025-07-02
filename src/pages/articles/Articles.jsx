import { useEffect, useState } from "react";
import Article from "../../components/article/Article";
import axios from "axios";
import { Link } from "react-router-dom";

function Articles() {

    const [articles , setArticles] = useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:8000/articles`)
        .then((result)=>{
            setArticles(result.data);
        })
    } , [])
  return (
    <div className="customContainer">
      <h1 className="text-2xl font-medium">Articles</h1>
      <div className="mt-10 grid grid-cols-4 gap-7">
        {
            articles.map((article)=>(
                <Link key={article.id} to={`/article/${article.id}`}>
                    <Article article={article} />
                </Link>
            ))
        }
      </div>
    </div>
  )
}


export default Articles;