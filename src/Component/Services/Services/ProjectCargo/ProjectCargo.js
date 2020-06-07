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
            <MDBIcon icon='bolt' size='1x' className='blue-text' /> Project Cargo</b></h1>
            <p><Link to='/'>Home</Link> >><Link to='/services'> Service</Link> >><b> Project Cargo</b></p> 
          </MDBCol>
      </MDBFreeBird>
      </div>
      <MDBContainer className='my-5' >
      <h1><b>
      <MDBIcon icon='bolt' size='1x' className='blue-text' /> Project Cargo</b></h1>
        <MDBRow className='text-left'>
        <MDBCol md='6'>
<h6>With Dedicated project division having experts in the field inherited from major project handlers.</h6>        
<h6>OECL is well equipped to handle all kinds of special and complex project cargoes including the one which needs to be handled using floating cranes.</h6>        
<h6>The expert team is well familiar handling the special and complex over-width and over-height cargo right from the ex-works until the door delivery smoothly and safely.
</h6>
<h6>Breakbulk handling experts have the right kind of strategy and contacts from the load point to the destination point and arrange for the right kind of resource as it requires more manpower and handling equipment.

</h6>
<h6>The project are well studied and all costs are done in a very transparent manner wherein the customers know the exact costing which is important for their projects.</h6>
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