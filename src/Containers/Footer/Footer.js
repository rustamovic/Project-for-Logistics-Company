import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow, MDBFooter,MDBIcon} from 'mdbreact';
import {FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Footer.css'
 class Footer extends Component {
  render() {
    return (
      <MDBFooter>
      <div className='py-5' style={{backgroundColor:'#091b27'}}>
      <MDBContainer className='text-center text-md-left pt-5'>
            <MDBRow>
              <MDBCol md='4' sm='8'>
                <h2 className='title blue-text'>LOGO</h2>
                <p>
                ’OECL’ was established in the year 2008 by a well experience
                team who have been providing world class logistics services
                for over 30 years in the various field of supply chain solutions.
                </p>
                <h5>Working hours</h5>
                <h6>Monday-Friday: ........... 8AM - 6PM</h6>
                <h6>Saturday-Sunday:......... 8AM - 12PM</h6>
              </MDBCol>
              <MDBCol md='4' sm='8'>
                <h3 className='title blue-text'><b>SUBSCRIBE</b></h3>
                <h5 className='grey-text'>Fill in your details</h5>
                <form>
                  <input
                  placeholder='Your name'
                    type='text'
                    id='defaultFormCardNameEx'
                    className='form-control'/>
                  <br />
                  <input
                    placeholder='*Your email'
                    type='email'
                    id='defaultFormCardEmailEx'
                    className='form-control' required/>
                  <div className='text-center py-4 mt-3'>
                    <button className='btn btn-outline-purple'>
                      Subscribe</button>
                  </div>
                </form>
              </MDBCol>
              <MDBCol md='4' sm='8'>
                <h3 className='title blue-text'><b>HEADQUARTERS</b></h3>
                <h6> <MDBIcon icon='map-marker' className='ml-2' />  Blk 511 Kampong Bahru Road
                #04-02 Keppel Distripark
                Singapore 099447</h6>
                <h6> <MDBIcon icon='phone' className='ml-2'/>  +65 6224 1338</h6>
                <h6> <MDBIcon icon='envelope' className='ml-2'/>	info[at]oecl.sg</h6>
                <h6> <MDBIcon icon='globe' className='ml-2'/>  www.web.com</h6>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
      </div>
      
      <div className="text-center p-4" style={{backgroundColor:'#071621'}}>
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <p>Copyright &copy;
               {(new Date().getFullYear())} OECL Company</p>
                <p>Site Powered by<a href='#'>  QWERTYU</a></p>
                <div>
               <span><a href='#'><FaFacebook size={26}/></a></span> 
               <span><a href='#'><FaTwitter size={26}/></a></span>
               <span><a href='#'><FaLinkedin size={26}/></a></span>
                <a href='#'><FaInstagram size={26}/></a>
                </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      </MDBFooter>
        
    );
  }
}
export default Footer;