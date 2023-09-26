import React, { useEffect } from "react";
import { NavLink } from 'react-router-dom';
import '../Style/Page404.css';

const Page404 = ({setShow, show}) => {
    useEffect(()=>{
        setShow(false)
    },[])
    return (
        <>
            <div style={{ background: "#f0f0f0", minHeight: "100vh" }} className="d-flex align-items-center justify-content-center">
                <div>
                    <img src="https://i.ibb.co/W6tgcKQ/softcodeon.gif" className="img-fluid" alt="page_not_found" />
                    <h1 className="error-text">Whoops, We can't seem to find the resource you're looking for.</h1>
                    <p className="text1">Please check that the Web site address is spelled correctly.Or,</p>
                    <div className="btn1">
                        <NavLink to="/"><button className="btn btn-outline-danger">Go to Homepage</button></NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page404;