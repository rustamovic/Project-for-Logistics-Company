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
 class Cargo extends Component {
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
            <p><Link to='/'>Home</Link> >><Link to='/services'> Service</Link> >><b> Liquid Cargo Transportation</b></p>
          </MDBCol>
      </MDBFreeBird>
      </div>
      <MDBContainer className='my-5' >
      <h1><b>
      <MDBIcon icon='bolt' size='1x' className='blue-text' /> Liquid Cargo Transportation</b></h1>
        <MDBRow className='text-left'>
        <MDBCol md='6'>
<h6>OECL provides expertise and services for carriage of liquid cargoes in ISO Tanks, Flexi Tanks and IBCs (Inter Bulk Containers).

OECL provide professional, cost effective and safe transportation of liquid cargo … A well experienced dedicated team provides complete logistics management for door to door movements with complete visibility.</h6></MDBCol>
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
export default Cargo;