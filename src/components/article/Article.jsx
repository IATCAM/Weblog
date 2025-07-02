
function Article(props) {
  return (
    <div>
      <div className="shadow-md shadow-blue-200 rounded">
          <img className="rounded-t h-55" src={props.article.image} alt="" />
          <h4 className="mt-5 text-xl font-medium text-cyan-800 px-4">{props.article.title}</h4>
          <p className="mt-2 pb-4 px-4 text-gray-500">Study time {props.article.time} minutes</p>
        </div>
    </div>
  )
}


export default Article;