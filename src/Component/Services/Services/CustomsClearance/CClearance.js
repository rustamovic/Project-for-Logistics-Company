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
 class CClearance extends Component {
  render() {
    return (
      <div>
      <MDBEdgeHeader className='py-3 text-center'  style={{ backgroundImage:`url(${Imagev})`}}/>
      <div>
      <MDBFreeBird id='bln'>
          <MDBCol md='8' lg='7' 
            className=' mx-auto float-none white z-depth-1 py-2 px-2 rounded'>
            <h1><b>
            <MDBIcon icon='bolt' size='1x' className='blue-text' /> Customs Clearance</b></h1>
            <p><Link to='/'>Home</Link> >><Link to='/services'> Service</Link> >><b> Custom Clearance</b></p>
          </MDBCol>
      </MDBFreeBird>
      </div>
      <MDBContainer className='my-5' >
      <h1><b>
      <MDBIcon icon='bolt' size='1x' className='blue-text' /> Customs Clearance</b></h1>
        <MDBRow className='text-left'>
        <MDBCol md='6'>        
<h6>As one of the leading custom clearing agents, we ensure that all clearance formalities are done in a smooth and easy manner so that all our customers receive their goods on time. Our customs brokers help ease import and export regulations and all paperwork related to trade compliances and procedures to ensure that your consignments via sea, kand and air leave on time.</h6>
<h6>OECL takes pride in being in business for more than a decade and have cleared all types of shipments of any sizes and for a plethora of goods from across the world taking care of each transportation with precision. It is our well-experienced team that makes us the best and leading customs clearing agents as our professionals carry out a complete study of all the local rules and regulations to help our clients overcome the complex matters of trade compliances. It is our ability in identifying demand and changing challenges in business that makes us the best to help you take care of all your paper works thereby ensuring the smooth flow of your business operations. With all the required documents in place, our professionals also ensure end-to-end solutions for both Import and Export Customs Clearance.</h6>
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
export default CClearance;