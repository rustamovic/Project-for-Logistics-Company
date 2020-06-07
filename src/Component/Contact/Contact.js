import React, { Component } from 'react';
import {MDBIcon ,MDBEdgeHeader, MDBCol,
  MDBContainer, MDBFreeBird} from 'mdbreact';
import {Link} from 'react-router-dom';
import Imagev from '../../Assets/Photos/call_back.jpg';
import InfoAddres from './InfoAddres/InfoAddres';
import Addressing from './Addressing/Addressing';
import './Contact.css';
 class Contact extends Component {
  render() {
    return (
      <div>
      <MDBEdgeHeader className='py-3 text-center d-block w-100'>
      <img src={Imagev} alt='' id='imgv'/>
      </MDBEdgeHeader>
    <MDBFreeBird>
        <MDBCol md='8' lg='7' 
          className=' mx-auto float-none white z-depth-1 py-2 px-2 rounded'>
          <h1><b>
          <MDBIcon icon='bolt' size='1x' className='blue-text' /> Contact</b></h1>
          <p><Link to='/'>Home</Link> >><b> Contact</b></p> 
        </MDBCol>
    </MDBFreeBird>
    <MDBContainer className='my-5'>
    <Addressing/>
    <InfoAddres/>
    </MDBContainer>
    </div>
    );
  }
}
export default Contact;