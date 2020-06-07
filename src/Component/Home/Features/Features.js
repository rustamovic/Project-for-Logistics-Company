import React from 'react';
import {
  MDBCol,
  MDBRow,
  MDBContainer,
  MDBView,
  MDBIcon
} from 'mdbreact';
import './Features.css'
import PNGE from '../../../Assets/Photos/featurs.jpg';
const Features = () => {
  return (
    <div className='my-5'>
    <MDBContainer >
    <MDBRow >
     <MDBCol md='4' lg='4' >
      <MDBRow className='m-1 p-1 rounded' id='row'>
      <MDBCol md='1' lg='1'><MDBIcon className='indigo-text' icon='globe' size='2x'/></MDBCol>
      <MDBCol md='10' lg='10'>
      <h4><b>Service Driven</b></h4>
      <p>We provide the highest quality of service and is widely recognized as the most customer-driven logistics company.</p>
      </MDBCol>
      </MDBRow>
      <MDBRow className='m-1 p-1 rounded' id='row'>
      <MDBCol md='1' lg='1'><MDBIcon className='indigo-text' icon='clock' size='2x'/></MDBCol>
      <MDBCol md='10' lg='10'>
      <h4><b>Overseas Network</b></h4>
      <p>Through our extensive network of international representatives, 
      we are able to offer you a comprehensive range of high-quality logistical freight services.</p>
      </MDBCol>
       </MDBRow>
     </MDBCol>
     <MDBCol md='4' lg='4'> 
      <MDBView>
              <img
              id='imge'
                className='d-block w-100'
                src={PNGE}
                alt='Second slide'/>
            </MDBView>
      </MDBCol>
     <MDBCol md='4' lg='4' >
     <MDBRow className='m-1 p-1 rounded' id='row2'>
      <MDBCol md='1' lg='1'><MDBIcon className='indigo-text' icon='home' size='2x'/></MDBCol>
      <MDBCol md='10' lg='10'>
      <h4><b>Bespoke Logistics Solutions</b></h4>
      <p>Efficient, cost-effective and innovative bespoke global logistics 
      solutions with a wide range of services comprising of end-to-end logistics packages.</p>
      </MDBCol>
      </MDBRow>
     <MDBRow className='m-1 p-1 rounded' id='row2'>
      <MDBCol md='1' lg='1'><MDBIcon className='indigo-text' icon='bolt' size='2x'/></MDBCol>
      <MDBCol md='10' lg='10'>
      <h4><b>Built To Deliver</b></h4>
      <p>We provide the most reliable & cost effective logistics solutions thereby creating a long-term partnership with our clients.</p>
      </MDBCol>
      </MDBRow>
     </MDBCol>
    </MDBRow>
    </MDBContainer> 
    </div>
  );
}

export default Features;
