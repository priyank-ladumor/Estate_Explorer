import React, { useEffect, useState } from "react";
import "../Style/Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { NavLink } from "react-router-dom";
import { FaPlus, FaSearch } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";

const Home = ({ setShow }) => {
  useEffect(() => {
    setShow(true)
  }, [])

  useEffect(() => {
    worldDataApi();
  }, []);
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
    reset,
  } = useForm({
  });

  const [worlddata, setWorlddata] = useState([]);
  const [state, setstate] = useState([]);
  const [city, setcity] = useState([]);

  const worldDataApi = async () => {
    const result = await axios.get(
      `https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json`,

      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setWorlddata(result.data);
    return result.data;
  };
  const country = [...new Set(worlddata.map((item) => item.country))];

  const handleState = (e) => {
    let allstate = worlddata.filter((val) => val.country === e);
    let statename = [...new Set(allstate.map((ele) => ele.subcountry))];
    setstate(statename);
  };
  const handleCity = (e) => {
    let allcity = worlddata.filter((val) => val.subcountry === e);
    let cityname = [...new Set(allcity.map((ele) => ele.name))];
    setcity(cityname);
  };
  return (
    <>
      <section className="home">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
          showArrows={false}
          showIndicators={false}
          emulateTouch={true}
        >
          <div className="image" id="img-1">
            <div className="black-bg d-flex justify-content-center align-items-center">
              <div className="d-md-block d-none">
                <h1 className="flex-wrap">
                  FIND YOUR PLACE WITH OUR LOCAL LIFE STYLE
                </h1>
                <p className="flex-wrap">
                  Search real estate property records, houses, condos, land and
                  more on realestate.com®. Find property info from the most
                  comprehensive source data.
                </p>
              </div>
            </div>
          </div>
          <div className="image" id="img-2">
            <div className="black-bg d-flex justify-content-center align-items-center">
              <div className="d-md-block d-none">
                <h1 className="flex-wrap">
                  FIND YOUR PLACE WITH OUR LOCAL LIFE STYLE
                </h1>
                <p className="flex-wrap">
                  Search real estate property records, houses, condos, land and
                  more on realestate.com®. Find property info from the most
                  comprehensive source data.
                </p>
              </div>
            </div>
          </div>
          <div className="image" id="img-3">
            <div className="black-bg d-flex justify-content-center align-items-center">
              <div className="d-md-block d-none">
                <h1 className="flex-wrap">
                  FIND YOUR PLACE WITH OUR LOCAL LIFE STYLE
                </h1>
                <p className="flex-wrap">
                  Search real estate property records, houses, condos, land and
                  more on realestate.com®. Find property info from the most
                  comprehensive source data.
                </p>
              </div>
            </div>
          </div>
        </Carousel>
        <div className="search">
          <div className="row form_search d-flex justify-content-evenly align-items-center">
            <div className="col-md-3">
              <input
                type="text"
                placeholder="Enter a street name,address number"
                className="form-control address"
                style={{ height: "56px" }}
              />
            </div>
            <div className="col-md-2 select">
              <div className="form-floating">
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                  {...register("country_name", {
                    onChange: (e) => handleState(e.target.value),
                  })}
                >
                  <option value="" defaultValue>
                    Select Country
                  </option>

                  {country.map((ele) => {
                    return (
                      <>
                        <option value={ele}>{ele}</option>
                      </>
                    );
                  })}
                </select>
                <label htmlFor="floatingSelect">Country</label>
              </div></div>
            <div className="col-md-2 select">
              <div className="form-floating">
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                  {...register("state_name", {
                    onChange: (e) => handleCity(e.target.value),
                  })}

                >
                  <option value="" defaultValue>
                    Select State
                  </option>
                  {state.length > 0 ? state.map((val) => {
                    return (
                      <>
                        <option value={val}>{val}</option>
                      </>
                    );
                  }) : <option value="" style={{ color: "red" }} disabled >please select country</option>}
                </select>
                <label htmlFor="floatingSelect">State</label>
              </div>
            </div>
            <div className="col-md-2 select">
              <div className="form-floating">
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                  {...register("city_name")}
                >
                  <option value="" defaultValue >
                    Select City
                  </option>
                  {city.length > 0 ? city.map((val) => {
                    return (
                      <>
                        <option value={val}>{val}</option>
                      </>
                    );
                  }) : <option value="" style={{ color: "red" }} disabled >please select state</option>}

                </select>
                <label htmlFor="floatingSelect">city</label>
              </div>
            </div>
            <div className="col-md-2">
              <button
                type="button"
                className="btn btn-outline-light form-control"
                style={{ padding: "8px" }}
              >
                <p style={{ fontSize: "25px", margin: "0px" }} className="d-flex align-items-center justify-content-center">Search</p>
              </button>
            </div>
          </div>
        </div>
        <NavLink className="nav-link nav-text" to="/addproperty">
          <button className="btn btn-dark btn-lg  d-flex align-items-center p-3" id="add-btn">
            <FaPlus />
          </button>
        </NavLink>
      </section>

    </>
  );
};

export default Home;
