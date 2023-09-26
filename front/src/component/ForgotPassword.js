import React from 'react'
import EmailOTP from './EmailOTP'
const ForgotPassword = () => {
    return (
        <div>
            <div className='container-fluid' >
                <div className='row'>
                    <div className='mx-auto col-12 d-flex align-items-center' id='shadow' style={{ height: "91vh" }} >
                        <div className='col-md-6 mx-auto p-5' style={{ boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px" }} >
                            <EmailOTP />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword
