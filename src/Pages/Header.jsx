import { faAndroid, faApple } from '@fortawesome/free-brands-svg-icons';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'



import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';


function Header() {
  return (
    <>
      {[false,].map((expand) => (
        <Navbar key={expand} expand={expand} >
          <Container fluid className='d-flex ' >
            <div className='d-flex'>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='' id='navbt' />
              <h5 style={{ color: "black", paddingTop: "10px" }} className='ps-3'>uber <span style={{ fontWeight: "bold" }}> EATS</span></h5></div>
            <div className='p-4 d-flex'>
              <button className='btn rounded-circle mt-2' id='but0'><FontAwesomeIcon icon={faUser} style={{ color: "#000000", }} /></button>
              <button className='btn  mt-2' id='but1' >Log in</button>
              <button className='btn mt-2 ms-3' id='but2' >Sign up</button>
            </div>
            <Navbar.Offcanvas
              id="sli"
              // id={`offcanvasNavbar-expand-${expand}`}
              // aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"

            >

              <Offcanvas.Header >



              </Offcanvas.Header>
              <div className='container-fluid d-flex flex-column  justify-content-between' id='navsdiv'>
                <div>
                  <div className="row">
                    <div className="col-12 text-center"> <button className='btn w-75  ' id='navsignbut' >Sign up</button></div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-12 text-center"> <button className='btn w-75  ' id='navlogbut' >Log in</button></div>
                  </div>

                  <ul className='nlist'>
                    <li className='ms-3'>Create a business account</li>
                    <li className='ms-3'>Add your restaurant</li>
                    <li className='ms-3'>Sign up to deliver</li>

                  </ul>


                  <div className="conatiner-fluid ">


                  </div>
                </div>
                <div className='container-fluid ' id='navsdiv2' >
                  <div className="row ms-3">
                    <div className="col-3"><img src="https://www.ubereats.com/_static/31ee382bd0e6ed84.svg" alt="" style={{ height: "57px" }} /></div>
                    <div className="col-9 "><h5 style={{ fontSize: "18px", color: "rgb(34, 32, 32)", paddingTop: "7px" }}>There's more to love in the app.</h5></div>
                  </div>
                  <div className='mt-4 d-flex gap-2 ms-4'>
                    <button className='btn btn-light ' id='navbt3'><FontAwesomeIcon icon={faApple} style={{ color: "#000000", marginRight: "5px", fontSize: "16px" }} />  iphone</button>
                    <button className='btn btn-light' id='navbt4'><FontAwesomeIcon icon={faAndroid} style={{ color: "#000000", marginRight: "5px", fontSize: "16px" }} />Andriod</button>
                    <button className='btn btn-light' id='navbt5'><FontAwesomeIcon icon={faAndroid} style={{ color: "#000000", marginRight: "5px", fontSize: "16px" }} />Get the app</button>
                  </div>


                </div>
              </div>

            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

    </>
  )
}

export default Header