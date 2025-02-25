import React from 'react'
import Header from './Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faChevronDown, faClock, faLocationArrow, faLocationDot } from '@fortawesome/free-solid-svg-icons'

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { faAndroid, faInstagram, faSquareFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Accordion from 'react-bootstrap/Accordion';
import photo from '../assets/uberprojecti.png'




function Home() {
  return (
    <>

      <div className="container-fluid" id='maindiv'>
        <div style={{ position: "sticky", top: "2px" }}>
          <Header />
        </div>
        <div className="container-fluid ps-lg-3 ps-1" id='homemadiv' >
          <h1 id='hea'>Order delivery near you</h1>
          <div className="row mt-4">
            <div className="col-md-7 ">
              <div className="row">

                <div className="col-md-7 mt-2">

                  <Accordion  >
                    <Accordion.Header >
                      <div style={{ backgroundColor: "white", width: "100%", }} className='d-flex align-items-center '> <FontAwesomeIcon icon={faLocationDot} style={{ color: "#020203", fontSize: "18px" }} />
                        <input type="text" className='w-100 border border-light ms-3' style={{ outline: "none" }} placeholder='Enter delivery address' /></div>

                    </Accordion.Header>
                    <Accordion.Body style={{backgroundColor:"white"}}>
                    
                    <div style={{ backgroundColor: "white", width: "100%", }} className='d-flex align-items-center '> <FontAwesomeIcon icon={faLocationArrow} style={{color: "#000000", fontSize:"18px"}} />
                    <div className='ms-3'>
                      <h6 style={{color:"black", fontSize:"17px"}}>Use current location</h6>
                      <h6 style={{fontSize:"14px"}}>Allow location services</h6>
                    </div>
                    </div>

                    </Accordion.Body>

                  </Accordion>

                </div>
                <div className="col-md-3 mt-2">
                <Accordion  >
                <Accordion.Header >
                
                    <div className='d-flex'>
                      <FontAwesomeIcon icon={faClock} style={{ color: "#020203", fontSize: "18px" }} />
                      <h6 className='ms-2' style={{ color: "black" }}>Deliver now</h6>
                    </div>

                </Accordion.Header>
                <Accordion.Body style={{backgroundColor:"white"}}>
                <div className='d-flex align-items-center mt-3'>
                            <FontAwesomeIcon icon={faClock} style={{ color: "#020203", fontSize: "18px" }} />
                            <h6 className='ms-2' style={{ color: "black" }}>deliver now</h6>
                          </div>
                          <div className='d-flex align-items-center mt-4' style={{height:"40px"}}>
                            <FontAwesomeIcon icon={faCalendarDays} style={{ color: "#000000", fontSize: "18px" }} />
                            <h6 className='ms-2' style={{ color: "black" }}>schedule for later</h6>
                          </div>

                </Accordion.Body>

                </Accordion>

                </div>

                <div className="col-md-2   mt-lg-2 mt-3">
                  <button className='btn w-100 ' id='but3'>Search here</button>
                </div>

              </div>
            </div>
            <div className="col-md-5 mt-2 " ></div>

          </div>
          <div className='d-flex mt-3 ' style={{ color: "black" }}>
            Or <a href="" style={{ color: "black", marginLeft: "5px" }}><h6> Sign In</h6></a>
          </div>
        </div>
      </div>

      <div id='mobdiv' className='mt-4 ms-3'>
        <div className='cobntainer-fluid d-flex gap-3 justify-content-center '>
          <img src="https://www.ubereats.com/_static/31ee382bd0e6ed84.svg" alt="" style={{ height: "57px" }} />
          <h5 style={{ fontSize: "25px", color: "black", paddingRight: "50px", fontWeight: "bold" }}>There's more to love in the Android app.</h5>
        </div>
        <div className='m-2'>
          <button className='btn btn-light w-100' id='mobdivbt'><FontAwesomeIcon icon={faAndroid} style={{ color: "#000000", marginRight: "9px", fontSize: "16px" }} />Get the app</button>
        </div>

      </div>



      {/* Next section */}
      <div className="conatiner-fluid mt-4 pt-2">
        <div className="row p-0 m-0 ">
          <div className="col-md-4 mt-3">
            <Card style={{ width: '100%', border: "0px" }}>
              <Card.Img variant="top" src="https://www.ubereats.com/_static/88d55f7112efe55f.webp" />
              <Card.Body>
                <Card.Title ><h1 className='ctit'>Feed your employee</h1></Card.Title>
                <a href="" className='sub'><Card.Text>
                  create a business account
                </Card.Text></a>

              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 mt-3">
            <Card style={{ width: '100%', border: "0px" }}>
              <Card.Img variant="top" src="https://www.ubereats.com/_static/711d51ca1b458931.webp" />
              <Card.Body>
                <Card.Title ><h1 className='ctit'>Your restaurant, delivered</h1></Card.Title>
                <a href="" className='sub'><Card.Text>
                  Add your restaurant
                </Card.Text></a>

              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4 mt-3">
            <Card style={{ width: '100%', border: "0px" }}>
              <Card.Img variant="top" src="https://www.ubereats.com/_static/16522a701585873b.webp" />
              <Card.Body>
                <Card.Title ><h1 className='ctit'>Deliver with Uber Eats</h1></Card.Title>
                <a href="" className='sub'><Card.Text>
                  Sign up to deliver
                </Card.Text></a>

              </Card.Body>
            </Card>
          </div>
        </div>
      </div>



      <div className="container-fluid mt-5 p-3 mb-5">
        <div className="container-fluid d-flex justify-content-between 
        ">
          <h1 className='hea2'>Cities near me</h1>
          <a href="" className='sub2'>View all 500+ cities</a>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 " style={{position:"relative"}}>
              <Link > <img src={photo} alt="" className='w-100' id='mapimg' />
              
              </Link>
            </div>
            <div className="row">
              <div className="col-md-6 ">
                <div className="row">
                  <div className="col-6 ">
                    <ul className='glist'>
                      <li>Akron</li>
                      <li>Albuquerque</li>
                      <li>Bridgeport</li>
                      <li>Concord</li>
                      <li>Dayton</li>
                      <li>El Paso</li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul className='glist'>
                      <li>Hartford</li>
                      <li>Houston</li>
                      <li>Indianapolis</li>
                      <li>McAllen</li>
                      <li>Mesa</li>
                      <li>Milwaukee</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6" id='seccittydiv'>
                <div className="row">
                  <div className="col-6 ">
                    <ul className='glist'>
                      <li>Nashville</li>
                      <li>New Orleans</li>
                      <li>Oklahoma City</li>
                      <li>Omaha</li>
                      <li>Orlando</li>
                      <li>Palm Bay</li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul className='glist'>
                      <li>Providence</li>
                      <li>Queens</li>
                      <li>San Antonio</li>
                      <li>Stony Brook</li>
                      <li>Tucson</li>
                      <li>West Hollywood</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <a href="" className='sub3'>View all 500+ cities</a>
          </div>
        </div>
        <div className="container-fluid mt-5 pt-3"></div>







        <div className="container-fluid d-flex justify-content-between">
          <h1 className='hea2'>Countries with Uber Eats</h1>
          <a href="" className='sub2'>View all  countries</a>
        </div>
        <div className="row">
          <div className="col-md-6 ">
            <div className="row">
              <div className="col-6 ">
                <ul className='glist'>
                  <li>Australia</li>
                  <li>Belgium</li>
                  <li>Canada</li>
                  <li>Chile</li>
                  <li>Costa Rica</li>
                  <li>Dominican Republic</li>
                  <li>Ecuador</li>
                  <li>El Salvador</li>
                </ul>
              </div>
              <div className="col-6">
                <ul className='glist'>
                  <li>France</li>
                  <li>Germany</li>
                  <li>Guatemala</li>
                  <li>Ireland</li>
                  <li>Italy</li>
                  <li>Japan</li>
                  <li>Kenya</li>
                  <li>Luxembourg</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-6 ">
                <ul className='glist'>
                  <li>Mexico</li>
                  <li>Netherlands</li>
                  <li>New Zealand</li>
                  <li>Panama</li>
                  <li>Poland</li>
                  <li>Portugal</li>
                  <li>South Africa </li>
                  <li>Spain</li>
                </ul>
              </div>
              <div className="col-6">
                <ul className='glist'>
                  <li>SriLanka</li>
                  <li>Sweden</li>
                  <li>Switzerland</li>
                  <li>Taiwan</li>
                  <li>United Kingdom</li>
                  <li>United States</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <a href="" className='sub3'>View all countries</a>
      </div>
      <hr />



      <div className="container-fluid mt-5 mb-4">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-4 mt-2" id='fdiv'>
            <h2 style={{ color: "black", marginLeft: "7px" }}> <span style={{ fontSize: '45px' }}>u</span>ber <span style={{ fontWeight: "700" }}>Eats</span>  </h2>

            <img src="https://help.opportunitynetwork.com/hs-fs/hubfs/apple.png?width=400&name=apple.png" alt="" style={{ height: "65px", cursor: "pointer" }} />
            <img src="https://e7.pngegg.com/pngimages/733/638/png-clipart-google-play-text-google-play-android-app-store-google-play-text-logo.png" alt="" style={{ height: "52px", cursor: "pointer" }} />
          </div>
          <div className="col-md-3 mt-2">
            <ul className='flist'>
              <li>Get Help</li>
              <li>Buy gift cards</li>
              <li>Add your restaurant</li>
              <li>Sign up to deliver</li>
              <li>Create a business account</li>
              <li>Promotions</li>
            </ul>
          </div>
          <div className="col-md-3 mt-2">
            <ul className='flist'>
              <li>Restaurants near me</li>
              <li>View all cities</li>
              <li>View all countries</li>
              <li>Pickup near me</li>
              <li>About Uber Eats</li>
              <li>Shop groceries</li>
              <li>English</li>
            </ul>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
      <hr />

      <div className="container-fluid mt-5 ">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-4 d-flex">
            <ul className='flist2'>
              <li><FontAwesomeIcon icon={faSquareFacebook} style={{ color: "#020203", }} /></li>
              <li><FontAwesomeIcon icon={faTwitter} style={{ color: "#000000", }} /></li>
              <li><FontAwesomeIcon icon={faInstagram} style={{ color: "#000000", }} /></li>
            </ul>


          </div>
          <div className="col-md-6">
            <div className="row" style={{ fontSize: "14px" }}>
              <div className="col-md-3 ps-5 mt-lg-1 mt-3"><span className='fspan'>Privacy Policy</span></div>
              <div className="col-md-2 ps-5 mt-lg-1 mt-3"><span className='fspan'> Terms </span></div>
              <div className="col-md-2 ps-5 mt-lg-1 mt-3"><span className='fspan'> Pricing </span></div>
              <div className="col-md-5 ps-5 mt-lg-1 mt-3"><span className='fspan'> Do not sell or share my personal information </span></div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-md-3"></div>

          <div className="col-md-8" style={{ fontSize: "14px" }}>
            <div className="row">
              <div className="col-md-9 ps-lg-1 ps-5 mt-lg-1 mt-3" id='fdivw'>
                This site is protected by reCAPTCHA and the Google Privacy Policy and <span className='fspan'>Privacy Policy</span> and <span className='fspan'>Terms of Service</span> apply.
              </div>
              <div className="col-md-3 ps-lg-1 ps-5 mt-lg-1 mt-3" id='fdivw2' style={{ fontSize: "14px" }}>
                ©2025 Uber Technologies Inc
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>

    </>
  )
}

export default Home