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
import Imagev from '../../../../Assets/Photos/Setup.jpg';
import imge from '../../../../Assets/Photos/logistic.png';
import {Link} from 'react-router-dom';
 class OceanFreight extends Component {
  render() {
    return (
      <div>
      <MDBEdgeHeader className='py-3 text-center'  style={{ backgroundImage:`url(${Imagev})`}}/>
      <div>
      <MDBFreeBird id='bln'>
          <MDBCol md='8' lg='7' 
            className=' mx-auto float-none white z-depth-1 py-2 px-2 rounded'>
            <h1><b>
            <MDBIcon icon='bolt' size='1x' className='blue-text' /> Ocean Freight</b></h1>
            <p><Link to='/'>Home</Link> >><Link to='/services'> Service</Link> >><b> Ocean Freight</b></p> 
          </MDBCol>
      </MDBFreeBird>
      </div>
      <MDBContainer className='my-5' >
      <h1><b>
      <MDBIcon icon='bolt' size='1x' className='blue-text' /> COMPANY PROFILE</b></h1>
      <h3>A VITAL LINK TO ENHANCE YOUR SUPPLY CHAIN</h3>
        <MDBRow className='text-left'>
        <MDBCol md='6'>
        <h5><b>FCL Services</b></h5>
        <h6>OECL has own fleet of containers including special equipment’s to accommodate special requirements of customers and specializes in many trade lanes. Being sea freight professionals with vast experience in the field helps to match frequent sailing and flexible service options. Multiple carrier options on any trade route with contracted rates helps to secure the space, allocation, timing, pricing and frequency of your shipments. FCL is the most optimized container shipping way regarding cost, volume and weight of the cargo. We take special care at each step of the process which involves fixing contract pricing with carriers, reserving space, make booking, picking up empty container at the container depot, loading at shipper facility, transporting by truck / rail to the port and vessel loading, monitor vessel schedule till final delivery to consignee. For import bookings we engage our overseas partners in the absence of our own network and monitor each steps and keep our customers / consignees informed at all stages.</h6>
        
        <h5><b>LCL Services</b></h5>
<h6>OECL operate own consolidation service on many trade routes. With its vast network of consolidators, the company is able to provide competitive price with multiple options of sailing. With regular consolidation boxes to important trade lanes, the company has the advantage of accommodating cargo which requires timely deliveries.

OECL Provide complete transparency of all the pricing at the origin, destination and ocean freight charges.</h6>        </MDBCol>
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
export default OceanFreight;