import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
const Protected = ({Cmp}) => {
const navigate = useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem("userInfo")){
            navigate("/userauth")
        }
    },[])
  return (
    <div>
        <Cmp/>
    </div>
  )
}

export default Protected
