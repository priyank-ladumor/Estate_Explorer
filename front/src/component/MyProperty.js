import React from 'react'
import { my_prop } from '../store/actions/myProperty'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const MyProperty = () => {
  const { usersprop } = useSelector((state) => state.myprop);
  const { u_id } = useSelector((state) => state.addprop);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [uid, setuid] = useState("")

  useEffect(() => {
    setuid(u_id)
    console.log(uid, "uid");
  }, [u_id])

  useEffect(() => {
    dispatch(my_prop());
  }, []);


  // useEffect(() => {
  //   if (getusers) {
  //     setitem(getusers)
  //   }
  // }, [my_prop]) 
  return (
    <div>

    </div>
  )
}

export default MyProperty
