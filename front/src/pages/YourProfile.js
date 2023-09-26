import React, { useEffect, useState } from 'react'
import "../Style/YourProfile.css"
import { useDispatch, useSelector } from 'react-redux'
import { GetProfileAction } from '../store/actions/profilegetupdate'
import EditProfile from './EditProfile'
import ResetPassword from '../component/ResetPassword'
import { NavLink } from 'react-router-dom'

const YourProfile = () => {

  const dispatch = useDispatch()
  const { profiledata, issuccess, Updatedata } = useSelector((state) => state.getupdateprofile)
  const [profileitem, setprofileitem] = useState()

  useEffect(() => {
    dispatch(GetProfileAction())
  }, [issuccess, Updatedata])

  useEffect(() => {
    if (profiledata) {
      setprofileitem(profiledata)
    }
  }, [profiledata])


  return (
    <div>
      <section className="h-100 gradient-custom-2">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-9 col-xl-8">
              <div className="card">
                <div className="rounded-top text-white d-flex flex-row black-layer">
                  <div className="ms-3 ms-md-5 mt-5 d-flex flex-column page-1">
                    <img src={profileitem?.photo} alt="profile image" className="img-fluid img-thumbnail mt-4 mb-2 img-size" />
                  </div>
                  <div className="ms-3 text-locate">
                    <h5>username:</h5>
                    <h5>{profileitem?.Username}</h5>
                  </div>
                </div>
                <div className="d-flex mt-5 ms-3 ms-md-5">
                  <button type="button" className="btn btn-outline-dark mt-3" data-mdb-ripple-color="dark" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ zIndex: "1" }}>
                    Edit profile
                  </button>

                  <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Profile</h1>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          <EditProfile />
                        </div>
                      </div>
                    </div>
                  </div>

                  <button type="button" className="btn btn-outline-dark ms-3 mt-3" data-mdb-ripple-color="dark" data-bs-toggle="modal" data-bs-target="#exampleModal2" style={{ zIndex: "1" }}>
                    Reset Password
                  </button>

                  <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1 className="modal-title fs-5" id="exampleModalLabel">Reset Password</h1>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          <ResetPassword />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body px-3 px-md-5 text-black">
                  <div>
                    <p className="lead fw-normal mb-1">About</p>
                    <div className="p-3">
                      <p className="font-italic mb-1">Phone No : {profileitem?.mobile_no}</p>
                      <p className="font-italic mb-0">Email Id : {profileitem?.email}</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <p className="lead fw-normal mb-0">Recent photos</p>
                    <p className="mb-0"><a href="#!" className="text-muted">Show all</a></p>
                  </div>
                  <div className="row g-2">
                    <div className="col-md-6 mb-2">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                        alt="image 1" className="w-100 rounded-3" />
                    </div>
                    <div className="col-md-6 mb-2">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                        alt="image 1" className="w-100 rounded-3" />
                    </div>
                  </div>
                  <div className="row g-2">
                    <div className="col-md-6">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                        alt="image 1" className="w-100 rounded-3" />
                    </div>
                    <div className="col-md-6">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                        alt="image 1" className="w-100 rounded-3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default YourProfile
