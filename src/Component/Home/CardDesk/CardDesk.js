import React from 'react';
import {MDBCard, MDBCardBody,MDBCardGroup,
  MDBCardImage, MDBCardText, MDBCardTitle,
  MDBContainer, MDBIcon, MDBNavLink} from 'mdbreact';
import oceanF from '../../../Assets/Photos/oceanF.jpg';
import air from '../../../Assets/Photos/air.jpg';
import cargo from '../../../Assets/Photos/cargo.jpg';
import './CardDesk.css'
const CardDesk = () => {
  return (
      <MDBContainer className='mt-5'>
      <h1><MDBIcon icon='bolt' size='1x' className='blue-text'/> <strong>CORE SERVICES</strong></h1>
      <h3>A VITAL LINK TO ENHANCE YOUR SUPPLY CHAIN</h3>
      <MDBCardGroup deck className='my-4'>
          <MDBCard>
            <MDBCardImage
            id='imgc'
              src={air}
              alt='MDBCard image cap'
              top
              hover
              overlay='white-slight'
            />
            <MDBCardBody>
              <MDBCardTitle tag='h5'>AIR FREIGHT</MDBCardTitle>
              <MDBCardText>
              Customized & effective options to meet customer’s deadline/timeliness and achieve cost savings.
              </MDBCardText>
              <MDBNavLink
                            tag='button'
                            to='/services/air-freight'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                          >
                           More
                          </MDBNavLink>
            </MDBCardBody>
          </MDBCard>
          <MDBCard>
            <MDBCardImage
            id='imgc'
              src={oceanF}
              alt='MDBCard image cap'
              top
              hover
              overlay='white-slight'
            />
            <MDBCardBody>
              <MDBCardTitle tag='h5'>OCEAN FREIGHT</MDBCardTitle>
              <MDBCardText>
              We have a long history of providing integrated logistics solutions that include distribution.
              </MDBCardText>
              <MDBNavLink
                            tag='button'
                            to='/services/ocean-freight'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                          >
                           More
                          </MDBNavLink>
            </MDBCardBody>
          </MDBCard>
          <MDBCard>
            <MDBCardImage
            id='imgc'
              src={cargo}
              alt='MDBCard image cap'
              top hover
              overlay='white-slight'/>
            <MDBCardBody>
              <MDBCardTitle tag='h5'>PROJECT CARGO</MDBCardTitle>
              <MDBCardText>
              OECL is equipped to handle all kinds of special and complex project cargoes with an expert team.
              </MDBCardText>
              <MDBNavLink
                            tag='button'
                            to='/services/project-cargo'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline' >
                           More
                          </MDBNavLink>
            </MDBCardBody>
          </MDBCard>
        </MDBCardGroup>
      </MDBContainer>
    
  );
}

export default CardDesk;
