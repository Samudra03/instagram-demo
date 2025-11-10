import { IoAppsOutline } from "react-icons/io5";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { MdContacts } from "react-icons/md";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import { useNavigate } from "react-router-dom";
import axios from 'axios';


export default function PostSection() {
  const [activeTab, setActiveTab] = useState("posts");
  const [post, setPosts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const navigate = useNavigate();


  // async function fetchData() {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   const data = await response.json();
  //   setPosts(data);
  //   setFiltered(data);
  // }

  const fetchData=async()=>{
    const res= await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPosts(res.data);
    setFiltered(res.data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="d-flex gap-3 justify-content-between text-center">
        <button
          className="btn w-100"
          onClick={() => {
            setActiveTab("posts");
            setFiltered(post);
          }}
        >
          <IoAppsOutline />
        </button>

        <button
          className="btn w-100"
          onClick={() => {
            setActiveTab("reels");
            setFiltered(post.filter((item) => item.userId === 1));
          }}
        >
          <AiOutlinePlaySquare />
        </button>

        <button
          className="btn w-100"
          onClick={() => {
            setActiveTab("tag");
            setFiltered(post.filter((item) => item.userId === 2));
          }}
        >
          <MdContacts />
        </button>
      </div>

      <ul>
        {filtered.map((item) => (
          <li key={item.id}>
            {/* <Link to={`/single-post/${item.id}`}>{item.title}</Link> */}
            <p onClick={()=>navigate("/single-post",{state: item})}>
            {item.title}</p>
          </li>
        ))}
      </ul>

      {activeTab === "posts" && <p>posts</p>}
      {activeTab === "reels" && <p>reels</p>}
      {activeTab === "tag" && <p>tag</p>}
    </>
  );
}

//filter
//uselocation 
//routing
//axios
//fetch
