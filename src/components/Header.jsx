import { FaInstagramSquare } from "react-icons/fa";
import { CiSquarePlus, CiMenuBurger } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { Button } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="fs-1 d-flex align-items-center gap-2">
          <FaInstagramSquare />
          <span className="fw-bold">Instagram</span>
        </div>
        <div className="d-flex gap-3 align-items-center">
          <CiSquarePlus size={30} />
          <CiMenuBurger size={30} />
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-start gap-5 my-4">
        <div
          className="d-flex justify-content-center align-items-center bg-secondary rounded-circle"
          style={{ width: "100px", height: "100px" }}
        >
          <CgProfile size={60} color="white" />
        </div>

        <div className="d-flex flex-column">
          <h4 className="fw-semibold mb-3">samudra</h4>

          <div className="d-flex gap-5 mb-3">
            <div>
              <h5 className="mb-0 fw-semibold">Posts</h5>
              <p className="mb-0">30</p>
            </div>
            <div>
              <h5 className="mb-0 fw-semibold">Followers</h5>
              <p className="mb-0">3,000</p>
            </div>
            <div>
              <h5 className="mb-0 fw-semibold">Following</h5>
              <p className="mb-0">30</p>
            </div>
          </div>

          <div className="d-flex gap-3">
            <Button variant="primary" className="rounded-pill px-4">
              Edit Profile
            </Button>
            <Button variant="outline-dark" className="rounded-pill px-4">
              Share Profile
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
