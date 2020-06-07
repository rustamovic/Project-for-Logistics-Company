import React, { Component } from 'react';
import {
  MDBIcon,
  MDBEdgeHeader,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFreeBird,
  MDBView,
  MDBBtn,
  MDBCollapse,
} from 'mdbreact';
import Imagev from '../../../../Assets/Photos/Setup.jpg';
import imge from '../../../../Assets/Photos/logistic.png';
import {Link} from 'react-router-dom';
 class AirExport extends Component {
  state = {
    collapseID: ''
  };

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));
  };

  render() {
    const { collapseID } = this.state;
    return (
      <div>
      <MDBEdgeHeader className='py-3 text-center'  style={{ backgroundImage:`url(${Imagev})`}}/>
      <div>
      <MDBFreeBird id='bln'>
          <MDBCol md='8' lg='7' 
            className=' mx-auto float-none white z-depth-1 py-2 px-2 rounded'>
            <h1><b>
            <MDBIcon icon='bolt' size='1x' className='blue-text' /> Logistics</b></h1>
            <p><Link to='/'>Home</Link> >><Link to='/services'> Service</Link> >><b> Freight Management</b></p> 
          </MDBCol>
      </MDBFreeBird>
      </div>
      <MDBContainer className='my-5' >
      <h1><b>
      <MDBIcon icon='bolt' size='1x' className='blue-text mb-3' /> Freight management</b></h1>
        <MDBRow className='text-left'>
        <MDBCol md='6'>
        <h5>Transport is the largest third-party logistics company in the United States. We provide integrated logistics solutions that include distribution. We have a long history with a number of industries with specialized needs. Whether you are a retailer and need demo kitting services or a healthcare.

        Transport is the largest third-party logistics company in the United States we provide integrated. We provide integrated lstics solutions that include distribution and. Transport is the largest third-party logistics company in the United States. We provide integrated logistics solutions that include distribution. We have a long history with a number of industries with spcialized needs. Whether you are a retailer and need demo kitting services or a healthcare. Transport is the largest third-party logitics company in the United States. We provide integrated logistics solutions that include distribution. We have a long history with a number of industries with specialized needs.</h5>
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
        <h1><b>
      <MDBIcon icon='bolt' size='1x' className='blue-text my-5' /> GREAT PLAN</b></h1>
        <MDBRow>
        
        <MDBCol md='6' className='text-left'>
<h5>Aliquam pulvinar pellentesque purus, nec condimentum nibh. Aenean dapibus iaculis odio id vestibulum. Nam at justo ante. Aliquam pulvinar pellentesque purus, nec condi nibh enean dapibus dapibus iaculis.</h5>
 <h5># Aenean viverra pellentesque luctus.</h5> 
 <h5># Warehouse Management Systems (WMS).</h5>
 <h5># Compatible with Ubermenu</h5>      
</MDBCol>
        <MDBCol md='6'>
        
        </MDBCol>
        </MDBRow>

        <h1><b>
      <MDBIcon icon='bolt' size='1x' className='blue-text my-5' /> STORAGE SERVICE OVERVIEW</b></h1>
        <MDBRow>
        
        <MDBCol md='6' className='text-left border' >
        <div>
        <div>
          <MDBBtn
            color='primary'
            onClick={this.toggleCollapse('accordion1')}
            style={{ marginBottom: '1rem' }}
          >
          Lorem ipsum dolor sit amet, consectetur #1 
          </MDBBtn>
        </div>
        <MDBCollapse id='accordion1' isOpen={collapseID}>
        Vera sought out counseling with me because her doctor advised her to discover the emotional causes.
        </MDBCollapse>

        <div>
          <MDBBtn
            color='primary'
            onClick={this.toggleCollapse('accordion2')}
            style={{ marginBottom: '1rem' }}
          >
          Lorem ipsum dolor sit amet, consectetur #2
          </MDBBtn>
        </div>
        <MDBCollapse id='accordion2' isOpen={collapseID}>
        Vera sought out counseling with me because her doctor advised her to discover the emotional causes.
        </MDBCollapse>

        <div>
          <MDBBtn
            color='primary'
            onClick={this.toggleCollapse('accordion3')}
            style={{ marginBottom: '1rem' }}>
          Lorem ipsum dolor sit amet, consectetur #2
          </MDBBtn>
        </div>
        <MDBCollapse id='accordion3' isOpen={collapseID}>
        Vera sought out counseling with me because her doctor advised her to discover the emotional causes.
        </MDBCollapse>
      </div>
        </MDBCol>
        <MDBCol md='6' className='text-left'>
        <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
Vera sought out counseling with me because her doctor advised her to discover the emotional causes of her chronic fatigue vera sought out counseling. Vera sought out counseling with me because her doctor advised. Vera sought out counseling with me because her doctor advised her to discover the emotional causes of her chronic fatigue vera sought out counseling.</h5>  
        </MDBCol>
        </MDBRow>
      </MDBContainer>
      </div>
    );
  }
}
export default AirExport;