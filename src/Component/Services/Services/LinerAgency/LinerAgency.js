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
 class LinerAgency extends Component {
  render() {
    return (
      <div>
      <MDBEdgeHeader className='py-3 text-center'  style={{ backgroundImage:`url(${Imagev})`}}/>
      <div>
      <MDBFreeBird id='bln'>
          <MDBCol md='8' lg='7' 
            className=' mx-auto float-none white z-depth-1 py-2 px-2 rounded'>
            <h1><b>
            <MDBIcon icon='bolt' size='1x' className='blue-text' /> Liner Agency</b></h1>
            <p><Link to='/'>Home</Link> >><Link to='/services'> Service</Link> >><b> Liner Agency</b></p> 
          </MDBCol>
      </MDBFreeBird>
      </div>
      <MDBContainer className='my-5' >
      <h1><b>
      <MDBIcon icon='bolt' size='1x' className='blue-text' /> Air Export</b></h1>
        <MDBRow className='text-left'>
        <MDBCol md='6'>
        <h6>OECL has liner division which is representing many medium to small carriers who use our local knowledge and expertise to handle and market their products.

        We provide first class liner and port agency services, together with an extensive range of related services to liners who trust our company knowing the potential and people in the management and their experience.
        
        Highly dedicated, enthusiastic and professional employees, providing top quality service, have swiftly turned Overseas Express Container Lines into a well-established agency, with a remarkable reputation in all aspects.
        
        With dedicated trained personnel for each principals OECL ensures equal attention and care in order to protect every principal’s interest.
        
        With shipping industry going through many changes, OECL helps shipping carriers to optimize their resources by providing local support to ensure a win-win formula. We provide full range of general agency to various elements of shipping support and our services are tailored to meet the exact needs of principals in this fast changing global liner shipping environment.</h6>
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
export default LinerAgency;