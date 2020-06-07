import React, { Component } from 'react';
import {
    MDBIcon,
    MDBView,
    MDBEdgeHeader,
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBFreeBird,
    MDBLink
  } from 'mdbreact';
import Imagev from '../../Assets/Photos/Setup.jpg';
import Blog1 from './Container/Blog';
 class Blog extends Component {
  render() {
    return (
      <div>
      <MDBEdgeHeader className='py-3 text-center'>
      <img src={Imagev} alt='' id='imgv'/>
      </MDBEdgeHeader>
      <div>
      <MDBFreeBird id='bln'>
          <MDBCol md='8' lg='7' 
            className=' mx-auto float-none white z-depth-1 py-2 px-2 rounded'>
            <h1><b>
            <MDBIcon icon='bolt' size='1x' className='blue-text' /> News</b></h1>
            <p>Home / <b className='blue-text'>News</b></p> 
          </MDBCol>
      </MDBFreeBird>
      </div>
      <div className='my-2'>
      <h1><MDBIcon icon='bolt' size='1x' className='blue-text my-4' /><strong> RECENT NEWS</strong></h1>
     <Blog1/>
      </div>
      </div>
    );
  }
}
export default Blog;