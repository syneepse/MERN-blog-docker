import { useEffect, useState } from "react";
import Post from "../Post";
import { apiUrl } from "../ApiUrl";


export default function IndexPage(){
    const [posts,setPosts] = useState([]);
    useEffect( () => {
        fetch(apiUrl + '/post').then( response => {
            response.json().then( posts => {
                setPosts(posts);
            })
        })
    }, [])
    return(
        <>
           {posts.length > 0 && posts.map( post =>
           <Post{...post} />
        )}
        </>
    );
}