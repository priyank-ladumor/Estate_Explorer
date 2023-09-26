import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get_prop } from "../store/actions/getPropAction.js";
import { useNavigate } from "react-router-dom";
import "../Style/allproperty.css";
const Features = () => {
  const { getusers } = useSelector((state) => state.getprop);
  const [item, setitem] = useState([])
  // const [limit, setlimit] = useState(3)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(get_prop());
  }, []);

  useEffect(() => {
    if (getusers) {
      setitem(getusers)
    }
  }, [getusers])

  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      navigate("/userauth");
    }
  }, []);

  const viewProduct = () => {

  }
  return (
    <>
      {/* <NavLink className="nav-link nav-text" to="/addproperty">
        <button className="btn btn-primary">Add Property</button>
      </NavLink> */}

      <div className="col-md-12">
        <div className="row d-flex justify-content-evenly gy-3 m-5">
          {item.length > 0 ?
            item.slice(0).reverse().map((curval, index) => (
              <>
                {/* <div className="col-md-3 rounded m-3" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }} key={item.index}>
                  <NavLink to={`/property/${curval.p_id}`} style={{ textDecoration: "none", color: "black" }}>
                    <ul style={{ listStyle: "none" }}>
                      <img src={curval.photo[0]} className="img-fluid" alt="house_photo" />
                      <li> price : {curval.price}</li>
                      <li>bhk : {curval.bhk}</li>
                      <li>property size : {curval.prop_size}</li>
                      <li>city name : {curval.city_name}</li>
                      <li>state name : {curval.state_name}</li>
                    </ul>
                  </NavLink>
                </div> */}
                <div className="col-lg-3 col-md-6 col-sm-6 ">
                  <div class="card p-3" >
                    <NavLink to={`/property/${curval.p_id}`} style={{ textDecoration: "none", color: "black" }}>

                      <div style={{ height: "200px", width: "100%" }}>
                        <img src={curval.photo[0]} class="card-img-top img-fluid" alt="Product" style={{ height: "200px", width: "100%", objectFit: "contain" }} />
                      </div>


                      <div class="card-body px-1  pb-0 ">
                        <div className="d-flex justify-content-between">
                          <p class="">Price : {curval.price}</p>
                          <p class="product_brand mb-0">BHK : {curval.bhk}</p>
                        </div>
                        <p>Property Size(sqrft) : {curval.prop_size}</p>
                        <p>State Name : {curval.state_name}</p>
                        <p>City Name : {curval.city_name}</p>
                      </div>
                    </NavLink>
                  </div>
                </div>
              </>
            )
            )
            : ("")
          }
        </div>
        {/* <div className='col-12'>
          <button type='button' className='btn btn-primary w-100' onClick={() => setlimit(limit + 3)}>load more</button>
        </div> */}
      </div>
    </>
  );
};

export default Features;
