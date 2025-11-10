import { FaHome } from "react-icons/fa";
import { LuSquarePlay } from "react-icons/lu";
import { CiLocationArrow1, CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

export default function NavBar() {
  return (
    <>
      <nav
        className="d-flex gap-4 justify-content-around text-center bg-white py-3 border-top position-fixed bottom-0 w-100"
        style={{ zIndex: 1000 }}
      >
        <FaHome size={24} />
        <LuSquarePlay size={24} />
        <CiLocationArrow1 size={24} />
        <CiSearch size={24} />
        <CgProfile size={24} />
      </nav>
    </>
  );
}
