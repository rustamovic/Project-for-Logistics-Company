import React, { Component } from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBView
  } from 'mdbreact';
  import img from '../../../Assets/Photos/about.png'
 class About extends Component {
  render() {
    return (
        <div>
            <MDBContainer className='my-5'>
      <h1><strong>ABOUT US</strong></h1>
        <MDBRow>
        <MDBCol md='6'>
        <h6>Established in the year 2008 by a team of well-experienced professionals OECL, 
        headquartered in Singapore is one of the premier global logistics and supply chain
         partners in the region. We have been providing world-class logistics services and
        solutions for over 30 years delivering with passion and commitment across various
        industries. OECL’s performance since its creation has been outstanding in terms
        of handling multiple products to be utmost efficiency. It is our dedicated team
        of empowered people, simplified processes and the use of latest technology that
        has helped the company expand its own office network globally. Within a short
        span of time the company has established firm plans to expand its network 
        furthermore to other south-east Asian countries and is in a credible position
        to offer what the international market requires.</h6>
        </MDBCol>
        <MDBCol md='6'>
        <MDBView>
                <img
                  className='d-block w-100'
                  src={img}
                  alt='img'/>
              </MDBView>
        </MDBCol>
        </MDBRow>
        
      </MDBContainer>  
      <MDBRow className='text-center text-white m-0'>
      <MDBCol md='6' className='p-5'  style={{backgroundColor:'rgb(29, 57, 85)'}}>
      <h1><strong>Our Vision</strong></h1>
      <h3>OECL, will constantly provide customized logistics solutions
       to our clients in order to enhance their supply chain.</h3>
      </MDBCol>
      <MDBCol md='6' className='p-5' style={{backgroundColor:'#dd1b3c'}}>
      <h1><strong>Our Mission</strong></h1>
      <h4>To be customers first choice for
      NVOCC -FCL/LCL for own box Inventory
      and Consolidation services, Airfreight
      services, e2e supply chain services, Project Cargo
      Break bulk and Liner Agency services.</h4>
      </MDBCol>
      </MDBRow>
        </div>
    
    );
  }
}
export default About;