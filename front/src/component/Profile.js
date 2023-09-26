import "../Style/Profile.css";
import { FaUser, FaBuilding } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ThreeDots } from "react-loader-spinner";
import { Logout } from "../store/Slices/auth";
import { useDispatch } from "react-redux";


const Profile = () => {
  const { loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userDetail = JSON.parse(localStorage.getItem("userInfo"));

  const LogoutUser = () => {
    navigate("/userauth");
    dispatch(Logout());
  };

  return (
    <>
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-outline-light dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {/* <img src="../images/user-profile.jpg" className="img-fluid rounded-circle" alt="img_profile" width={40} /> */}
          <FaUser style={{ fontSize: "18px" }} />
        </button>
        <ul className="dropdown-menu">
          <NavLink to="/yourprofile" className="" style={{textDecoration:"none", color:"black"}}>
            <li className="dropdown d-flex justify-content-center p-2 colorhover">
              <div><FaUser style={{ fontSize: "18px" }} /></div>
              <div className="ps-2">My Profile</div>
            </li>
          </NavLink>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <NavLink to="/myproperty" style={{ textDecoration: "none" }}>
            <li className="dropdown d-flex justify-content-center p-2 " style={{ color: "black" }}>
              <div className="colorhover"><FaBuilding style={{ fontSize: "18px" }} />My properties</div>
            </li>
          </NavLink>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <button
            type="button"
            onClick={LogoutUser}
            className="btn btn-danger d-flex mx-auto swapbtn"
          >
            {loading ? (
              <ThreeDots
                height="30"
                width="50"
                radius="9"
                color="#0d6efd"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            ) : (
              "Logout"
            )}
          </button>
        </ul>
      </div>
    </>
  );
};
export default Profile;
