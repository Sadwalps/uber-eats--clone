import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Login() {
  return (
    <>
    <Navbar style={{backgroundColor:"black"}}>
        <Container>
          <Link to={'/'} style={{textDecoration:"none"}}> <h5 style={{ color: "white", paddingTop: "10px" }} className='ps-3'>uber <span style={{ fontWeight: "bold" }}> EATS</span></h5></Link>
        </Container>
      </Navbar>
      <div className="container-fluid mt-lg-5 mt-4">
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4 p-2">
                <h2>What's your phone number or email?</h2>
                <form action="">
                    <input type="text" className='form-control pt-2 pb-2' placeholder='Enter phone number or email' />
                    <div className="col-12 text-center mt-2"><button className='btn w-100  ' id='navsignbut' >Continue</button> </div>
                </form>
                <div className='mt-2 mb-2'>
                    <div className="row">
                        <div className="col-5"><hr /></div>
                        <div className="col-1">or</div>
                        <div className="col-6"><hr /></div>
                    </div>
                </div>
                 <div className="col-12 d-flex justify-content-center align-items-center "> <button className='btn w-100  ' id='continuebtn' ><img src="https://clipartcraft.com/images/transparent-background-google-logo-invisible.png" alt="" style={{height:"25px"}}/> <span>Continue with Google</span> </button></div>
                 <div className="col-12 d-flex justify-content-center align-items-center mt-2 "> <button className='btn w-100  ' id='continuebtn' ><img src="https://static.vecteezy.com/system/resources/previews/002/520/838/original/apple-logo-black-isolated-on-transparent-background-free-vector.jpg" alt="" style={{height:"25px"}}/> <span>Continue with Apple</span> </button></div>
                 <div mt-2 id='logqr'>
                 <div className="row">
                        <div className="col-5"><hr /></div>
                        <div className="col-1">or</div>
                        <div className="col-6"><hr /></div>
                    </div>
                    <div className="col-12 d-flex justify-content-center align-items-center mt-2 "> <button className='btn w-100  ' id='continuebtn' ><img src="https://cdn-icons-png.flaticon.com/512/657/657126.png" alt="" style={{height:"25px"}}/> <span>Log in with QR code</span> </button></div>
                 </div>
                 <p className='mt-3'>
                    By proceeding, you consent to get calls, WhatsApp or SMS/RCS messages, including by automated means, from Uber and its affiliates to the number provided.
                 </p>

            </div>
            <div className="col-md-4"></div>
        </div>
      </div>
    </>
  )
}

export default Login