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
 class Warehousing extends Component {
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
            <p><Link to='/'>Home</Link> >><Link to='/services'> Service</Link> >><b> Warehousing</b></p> 
          </MDBCol>
      </MDBFreeBird>
      </div>
      <MDBContainer className='my-5' >
      <h1><b>
      <MDBIcon icon='bolt' size='1x' className='blue-text' />Warehousing</b></h1>
        <MDBRow className='text-left'>
        <MDBCol md='6'>
        <h6>OECL is well equipped to handle the warehousing of various commodities including cold storage.

        Warehouse management is a key part of the supply chain and primarily aims to control the movement and storage of materials within a warehouse and process the associated transactions including shipping, receiving, put away and picking. With visibility in to processes that proceed and follow the supply chain link, your warehouse will become an accelerator and not a road block to drive greater profitability and customer satisfaction.
        
        The objective of WM is to handle the receipts of stock and manage supplies. WM today is part of supply chain management and also demand management. It also covers the container storage, loading and unloading.
        
        An efficient WM gives a cutting edge to retail chain distribution.
        
        The company identifies the customer needs and assist to handle in the best possible manner.
        
        The company has expertise in handling vanning and devanning of consolidation cargo and arranges to distribute/deliver to respective parties from the warehouse which delivers full satisfaction to its customers.
        
        With its network in domestic and global market, OECL can identify the right kind of warehouse depending on customer’s requirement based on cost effective, storage specific, commodity specific and proximity specific needs.</h6>
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
export default Warehousing;