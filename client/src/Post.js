import {format} from "date-fns";
import {Link} from "react-router-dom";
import { apiUrl } from "./ApiUrl";


export default function Post({_id,title,summary,content,cover,createdAt,author}){
    return(
    <div className="post">
        <div className="image">
          <Link to={`/post/${_id}`}>
            <img src= {apiUrl+ '/'+ cover} alt = "yeh ek photo hai"/>
          </Link>
          
        </div>
        <div className="texts">
        <Link to={`post/${_id}`}>
          <h2>{title}</h2>
        </Link>
          <p className="info">
            <a className="author">{author.username}</a>
            <time>{format(new Date(createdAt), 'MMM d, yyyy HH:mm')}</time>
          </p>
          <p className="summary">{summary}</p>
        </div>
    </div>
    );
}