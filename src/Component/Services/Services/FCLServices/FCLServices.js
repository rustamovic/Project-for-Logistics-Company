import React, { Component } from 'react';
import {
  MDBIcon,
  MDBEdgeHeader,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFreeBird,
  MDBView
} from 'mdbreact';
import {Link} from 'react-router-dom';
import Imagev from '../../../../Assets/Photos/Setup.jpg';
import imge from '../../../../Assets/Photos/logistic.png';
 class FCLServices extends Component {
  render() {
    return (
      <div>
      <MDBEdgeHeader className='py-3 text-center'  style={{ backgroundImage:`url(${Imagev})`}}/>
      <div>
      <MDBFreeBird id='bln'>
          <MDBCol md='8' lg='7' 
            className=' mx-auto float-none white z-depth-1 py-2 px-2 rounded'>
            <h1><b>
            <MDBIcon icon='bolt' size='1x' className='blue-text' /> Logistics</b></h1>
            <p><Link to='/'>Home</Link> >><Link to='/services'> Service</Link> >><b> FCL Services</b></p>
          </MDBCol>
      </MDBFreeBird>
      </div>
      <MDBContainer className='my-5' >
      <h1><b>
      <MDBIcon icon='bolt' size='1x' className='blue-text' /> FCL Services</b></h1>
        <MDBRow className='text-left'>
        <MDBCol md='6'>
        <h6>OECL has own fleet of containers including special equipment’s to accommodate special requirements of customers and specializes in many trade lanes. Being sea freight professionals with vast experience in the field helps to match frequent sailing and flexible service options. Multiple carrier options on any trade route with contracted rates helps to secure the space, allocation, timing, pricing and frequency of your shipments. FCL is the most optimized container shipping way regarding cost, volume and weight of the cargo. We take special care at each step of the process which involves fixing contract pricing with carriers, reserving space, make booking, picking up empty container at the container depot, loading at shipper facility, transporting by truck / rail to the port and vessel loading, monitor vessel schedule till final delivery to consignee. For import bookings we engage our overseas partners in the absence of our own network and monitor each steps and keep our customers / consignees informed at all stages.</h6>
 </MDBCol>
<MDBCol md='6'>
        <MDBView>
                <img
                  className='d-block w-100'
                  src={imge}
                  alt='Second slide'/>
              </MDBView>
        </MDBCol>
        </MDBRow>
      </MDBContainer>
      </div>
    );
  }
}
export default FCLServices;