import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

//use navigate  we can get by using useLocation we can get the value

export default function SinglePost()
{
    const[post,setPost]=useState({});
    const {id} = useParams();

    
  async function fetchData() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();
    setPost(data);
  }
   useEffect(()=>{fetchData();
}
,[]);
// const location =useLocation();
// const post=location.state;
// const navigate=useNavigate();

    return(
        <>
      <div>
      <p>{post.id}</p>

<p>{post.userid}</p>
<p>{post.title}</p>
<p>{post.body}</p>

<button onClick={() => navigate(-1)}>Back to HomePage</button>
      </div>
        </>
    );
    }