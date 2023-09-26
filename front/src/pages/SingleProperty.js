import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { single_prop } from '../store/actions/singlepropertyaction';
import { useParams } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel';
const SingleProperty = () => {
  const dispatch = useDispatch()
  const { singleuser } = useSelector((state) => state.singleprop);
  const [item, setitem] = useState([])
  const [imgs, setimgs] = useState([])
  const { id } = useParams();

  useEffect(() => {
    dispatch(single_prop(id));
  }, []);

  useEffect(() => {
    if (singleuser) {
      setitem(singleuser)
    }
  }, [singleuser])

  useEffect(() => {
    setimgs(item.photo)
  }, [item])
console.log(item);
  return (
    <>
      {/* <div>
        <div className="col-12">
          <div className="row d-flex justify-content-evenly m-0"></div>
          {imgs &&
            imgs.map((e, i) => {
              return (
                <>
                  <img src={e} alt="image_property" className='img-fluid col-md-4' width={200} />
                </>
              )
            })
          }
        </div>
      </div>
      <p> name : {item.Holder_name}</p>
      <p> area name : {item.area_name}</p>
      <p> state name : {item.state_name}</p>
      <p> city name : {item.city_name}</p>
      <p> country name : {item.country_name}</p>
      <p> bhk : {item.bhk}</p>
      <p> dis : {item.dis}</p>
      <p> mobile_no : {item.mobile_no}</p>
      <p> house_no : {item.house_no}</p>
      <p> furniture : {item.furniture}</p>
      <p> price : {item.price}</p>
      <p> rent_or_sell : {item.rent_or_sell}</p>
      <p> prop_size : {item.prop_size}</p> */}
      <div className='container mt-5'>
        <div className='row mx-auto'>
          <div className='col-md-6' style={{width:"550px"}}>
          <Carousel
        
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
          showArrows={false}
          showIndicators={false}
          emulateTouch={true}
        >
         {imgs && imgs.map((val,index)=>{
          return(
            <>
              <img src={val} alt='single property' className='img-fluid'></img>
            </>
          )
         })}
        </Carousel>
          </div>
          <div className='col-md-6 mx-auto'>
          <p> name : {item.Holder_name}</p>
      <p> area name : {item.area_name}</p>
      <p> state name : {item.state_name}</p>
      <p> city name : {item.city_name}</p>
      <p> country name : {item.country_name}</p>
      <p> bhk : {item.bhk}</p>
      <p> dis : {item.dis}</p>
      <p> mobile_no : {item.mobile_no}</p>
      <p> house_no : {item.house_no}</p>
      <p> furniture : {item.furniture}</p>
      <p> price : {item.price}</p>
      <p> rent_or_sell : {item.rent_or_sell}</p>
      <p> prop_size : {item.prop_size}</p>
          </div>
        </div>
      </div>

    </>
  )
}

export default SingleProperty
