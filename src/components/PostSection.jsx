import { IoAppsOutline } from "react-icons/io5";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { MdContacts } from "react-icons/md";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function PostSection() {
  const [activeTab, setActiveTab] = useState("posts");
  const [post, setPosts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const navigate = useNavigate();

  const fetchData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPosts(res.data);
    setFiltered(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div
        className="d-flex gap-2 justify-content-between text-center mt-4 mb-3 border-bottom pb-2"
        style={{ borderColor: "#e6e6e6" }}
      >
        <button
          className={`btn w-100 py-2 ${
            activeTab === "posts" ? "active-tab" : "inactive-tab"
          }`}
          onClick={() => {
            setActiveTab("posts");
            setFiltered(post);
          }}
        >
          <IoAppsOutline size={24} />
        </button>

        <button
          className={`btn w-100 py-2 ${
            activeTab === "reels" ? "active-tab" : "inactive-tab"
          }`}
          onClick={() => {
            setActiveTab("reels");
            setFiltered(post.filter((item) => item.userId === 1));
          }}
        >
          <AiOutlinePlaySquare size={24} />
        </button>

        <button
          className={`btn w-100 py-2 ${
            activeTab === "tag" ? "active-tab" : "inactive-tab"
          }`}
          onClick={() => {
            setActiveTab("tag");
            setFiltered(post.filter((item) => item.userId === 2));
          }}
        >
          <MdContacts size={24} />
        </button>
      </div>

      <div className="row g-3">
        {filtered.slice(0, 9).map((item) => (
          <div
            key={item.id}
            className="col-12 col-sm-6 col-md-4"
            onClick={() => navigate("/single-post", { state: item })}
          >
            <div
              className="post-card rounded-4 p-3 shadow-sm h-100"
              style={{
                background: "linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)",
                cursor: "pointer",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.1)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.05)";
              }}
            >
              <h6 className="fw-semibold text-dark mb-2 text-truncate">
                {item.title}
              </h6>
              <p className="text-muted small mb-0">
                {item.body.slice(0, 60)}...
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          .active-tab {
            border-bottom: 3px solid #007bff;
            color: #007bff;
            font-weight: 600;
            background-color: transparent;
          }
          .inactive-tab {
            color: #6c757d;
            background-color: transparent;
          }
          .btn:hover {
            background-color: #f1f1f1;
          }
        `}
      </style>
    </>
  );
}
