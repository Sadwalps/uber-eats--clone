import { faBars } from '@fortawesome/free-solid-svg-icons'
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
     {[false,  ].map((expand) => (
        <Navbar key={expand} expand={expand} >
          <Container fluid className='d-flex ' >
            <div className='d-flex'> 
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='' id='navbt' />
            <h5 style={{color:"black",paddingTop:"10px"}} className='ps-3'>uber <span style={{fontWeight:"bold"}}> EATS</span></h5></div>
            <div className='p-4'>
     <button className='btn me-3 mt-2' id='but1' >Log in</button>
     <button className='btn mt-2 'id='but2' >Sign up</button>
     </div>
            <Navbar.Offcanvas
              id="sli"
              // id={`offcanvasNavbar-expand-${expand}`}
              // aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
              
            >
              
              <Offcanvas.Header >
                
                
             
              </Offcanvas.Header>
              <div>
              <div className="row">
                  <div className="col-12 text-center"> <button className='btn w-75  'id='navsignbut' >Sign up</button></div>
                </div>
                <div className="row mt-2">
                  <div className="col-12 text-center"> <button className='btn w-75  'id='navlogbut' >Log in</button></div>
                </div>

                <ul className='glist'>
                      <li className='ms-3'>Create a business account</li>
                      <li className='ms-3'>Add your restaurant</li>
                      <li className='ms-3'>Sign up to deliver</li>
                      
                    </ul>


                    <div className="conatiner-fluid ">


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