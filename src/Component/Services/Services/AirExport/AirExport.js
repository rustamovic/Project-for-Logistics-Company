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
 class AirExport extends Component {
  render() {
    return (
      <div>
      <MDBEdgeHeader className='py-3 text-center'  style={{ backgroundImage:`url(${Imagev})`}}/>
      <div>
      <MDBFreeBird id='bln'>
          <MDBCol md='8' lg='7' 
            className=' mx-auto float-none white z-depth-1 py-2 px-2 rounded'>
            <h1><b>
            <MDBIcon icon='bolt' size='1x' className='blue-text' /> Air</b></h1>
            <p>Home / Service<b className='blue-text'>  Air Export</b></p>
            <p><Link to='/'>Home</Link> >><Link to='/services'> Service</Link> >><b> Air Export</b></p> 
          </MDBCol>
      </MDBFreeBird>
      </div>
      <MDBContainer className='my-5' >
      <h1><b>
      <MDBIcon icon='bolt' size='1x' className='blue-text' /> Air Export</b></h1>
        <MDBRow className='text-left'>
        <MDBCol md='6'>
<h6>As one of the leading independent airfreight company, we provide more flexibility,
 choice worldwide by working in partnership with an extensive range of specialist carriers
  who provide customized schedules and solutions.</h6>        
<h6>Our Directors and Managers are hands-on and work closely with our staff 
o provide an integrated highly professional service to our clients.</h6>       
<h6>The company through its extensive worldwide network have established a fast and efficient airfreight product which translates into a cost-efficient and fast movement of cargo to and from worldwide markets.</h6>
<h6>OECL can provide customized sea-air & air-sea options to meet customer’s deadline/timeliness and achieve cost savings.</h6>
<h6>The company handles the airfreight consolidation on many major routes through its efficient worldwide network.</h6>
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
export default AirExport;