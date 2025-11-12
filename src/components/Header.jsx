import { FaInstagramSquare } from "react-icons/fa";
import { CiSquarePlus, CiMenuBurger } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { Button } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <div
        className="d-flex justify-content-between align-items-center mb-4 px-3 py-2 shadow-sm rounded-3"
        style={{
          background: "linear-gradient(90deg, #fdfbfb 0%, #ebedee 100%)",
        }}
      >
        <div className="fs-1 d-flex align-items-center gap-2 text-primary">
          <FaInstagramSquare />
          <span
            className="fw-bold"
            style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: "1px" }}
          >
            Instagram
          </span>
        </div>
        <div className="d-flex gap-3 align-items-center">
          <CiSquarePlus
            size={30}
            className="hover-icon"
            style={{ cursor: "pointer" }}
          />
          <CiMenuBurger
            size={30}
            className="hover-icon"
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-start gap-5 my-4 px-2">
        <div
          className="d-flex justify-content-center align-items-center rounded-circle shadow-sm"
          style={{
            width: "120px",
            height: "120px",
            background:
              "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
          }}
        >
          <CgProfile size={70} color="white" />
        </div>

        <div className="d-flex flex-column">
          <h4
            className="fw-semibold mb-3"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            samudra
          </h4>

          <div className="d-flex gap-5 mb-3 text-center">
            {[
              { title: "Posts", count: "30" },
              { title: "Followers", count: "3,000" },
              { title: "Following", count: "30" },
            ].map((item, index) => (
              <div key={index}>
                <h6 className="mb-0 fw-semibold text-secondary">{item.title}</h6>
                <p className="mb-0 fw-bold fs-5 text-dark">{item.count}</p>
              </div>
            ))}
          </div>

          <div className="d-flex gap-3">
            <Button
              variant="primary"
              className="rounded-pill px-4 shadow-sm"
              style={{
                background: "linear-gradient(135deg, #6a11cb, #2575fc)",
                border: "none",
                transition: "transform 0.2s ease",
              }}
              onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            >
              Edit Profile
            </Button>

            <Button
              variant="outline-dark"
              className="rounded-pill px-4 shadow-sm"
              style={{ transition: "all 0.2s ease" }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#212529";
                e.target.style.color = "#fff";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#212529";
              }}
            >
              Share Profile
            </Button>
          </div>
        </div>
      </div>

      <style>
        {`
          .hover-icon:hover {
            transform: scale(1.2);
            transition: transform 0.2s ease;
            color: #2575fc;
          }
        `}
      </style>
    </>
  );
}
