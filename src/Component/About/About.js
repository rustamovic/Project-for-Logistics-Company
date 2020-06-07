import React from 'react';
import {
  MDBFreeBird,
  MDBCol,
  MDBRow,
  MDBEdgeHeader,
  MDBContainer,
  MDBView,
  MDBIcon
} from 'mdbreact';
import {Link} from 'react-router-dom';
import './About.css';
import imge from '../../Assets/Photos/logistic.png';
import Imagev from '../../Assets/Photos/Setup.jpg';
import PNGE from '../../Assets/Photos/pnge.png';
const About = () => {
  return (
    <div>
        <MDBEdgeHeader className='py-3 text-center  d-block w-100'>
        <img alt='' src={Imagev} id='about'/>
        </MDBEdgeHeader>
        <div>
        <MDBFreeBird id='bln'>
            <MDBCol md='8' lg='7' 
              className=' mx-auto float-none white z-depth-1 py-2 px-2 rounded'>
              <h1><b>
          <MDBIcon icon='bolt' size='1x' className='blue-text' /> About Us</b></h1>
          <p><Link to='/'>Home</Link> >><b> About</b></p> 
            </MDBCol>
        </MDBFreeBird>
        </div>
        
        <MDBContainer className='my-5' >
      <h1><b>
      <MDBIcon icon='bolt' size='1x' className='blue-text' /> COMPANY PROFILE</b></h1>
      <h3>A VITAL LINK TO ENHANCE YOUR SUPPLY CHAIN</h3>
        <MDBRow className='text-left my-4'>
        <MDBCol md='6'>
        <h3><b>OUR GLORY MISSION</b></h3>
        <h6>Established in the year 2008 by a team of well-experienced professionals OECL, headquartered in Singapore is one of the premier global logistics and supply chain partners in the region. We have been providing world-class logistics services and solutions for over 30 years delivering with passion and commitment across various industries. OECL’s performance since its creation has been outstanding in terms of handling multiple products to be utmost efficiency. It is our dedicated team of empowered people, simplified processes and the use of latest technology that has helped the company expand its own office network globally. Within a short span of time the company has established firm plans to expand its network furthermore to other south-east Asian countries and is in a credible position to offer what the international market requires.</h6>
       <h6>OECL being a global leader understands that a successful supply chain management will 
        require thorough planning and implementations which involves complex tasks which are
         carried out by people from diverse cultures spread across the globe. We try to integrate 
         all the multinational capabilities with our expertise & passion thereby acting as a catalyst 
         for our customers business by aligning strategies and operations to facilitate growth. Hence OECL 
         would like to be a Vital Link to enhance customers Supply Chain solutions.</h6> 
        </MDBCol>
        <MDBCol md='6'>
        <MDBView>
                <img
                  className='d-block w-100'
                  src={imge}
                  alt='Second slide'/>
              </MDBView>
        </MDBCol>
        <MDBCol md='12'>
        <h6>A perfect management of people, place and time are the key elements which we concentrate upon to attain supply chain optimization and a proper synchronization is maintained via our pool of vast experience and skilled experts who relentlessly work towards integrating functions of customers, suppliers and end users. Consolidation of cargo on important trade lanes is one of the strengths of the OECL and fixed day sailings on weekly basis give the edge for customers to prefer using our service and online tracking of shipments and e-updates for customers make them feel comfortable and updated. We have incorporated shipping and logistics for various industry verticals and our portfolio reflects our commitment, skill, passion and excellent service deliverance.</h6>
        </MDBCol>
        </MDBRow>
        
      </MDBContainer>
      <div className='text-left text-white py-5' style={{backgroundColor:'rgb(24, 54, 74)'}}>
      <MDBContainer >
      <MDBRow >
        <MDBCol md='5' lg='5'> 
        <MDBView>
                <img
                  className='d-block w-100'
                  src={PNGE}
                  alt='Second slide'/>
              </MDBView>
        </MDBCol>
        <MDBCol md='7' lg='7' >
        <MDBRow className='m-1 p-1 rounded' id='row'>
        <MDBCol md='1' lg='1'><MDBIcon id='ci' icon='home' size='2x'/></MDBCol>
        <MDBCol md='10' lg='10'>
        <h4><b>Speed Of Response</b></h4>
        <p>All our services are time & performance monitored against our deliverables every single aspect of the transportation.</p>
        </MDBCol>
        </MDBRow>
        <MDBRow className='m-1 p-1 rounded' id='row'>
        <MDBCol md='1' lg='1'><MDBIcon id='ci' icon='clock' size='2x'/></MDBCol>
        <MDBCol md='10' lg='10'>
        <h4><b>Quality Of/Supply Chain</b></h4>
        <p>We follow a global supply chain process that are framework allocated and has a constant performance measuring done.</p>
        </MDBCol>
         </MDBRow>
        <MDBRow className='m-1 p-1 rounded' id='row'>
        <MDBCol md='1' lg='1'><MDBIcon id='ci' icon='globe' size='2x'  /></MDBCol>
        <MDBCol md='10' lg='10'>
        <h4><b>Global Transportation</b></h4>
        <p>OECL has a wide global network of preferred suppliers and quality carriers to assure flexibility and time definite deliveries.</p>
        </MDBCol>       
        </MDBRow>
        <MDBRow className='m-1 p-1 rounded' id='row'>
        <MDBCol md='1' lg='1'><MDBIcon id='ci' icon='bolt' size='2x'/></MDBCol>
        <MDBCol md='10' lg='10'>
        <h4><b>Value For Service</b></h4>
        <p>Optimized & transparent pricing structures from effective loading schedules which enables us to offer volume based discounts</p>
        </MDBCol>
        </MDBRow>
        </MDBCol>
        </MDBRow>
      </MDBContainer>
      </div>
      
    </div>
  );
}

export default About;
