import React from 'react';
import {MDBView,MDBCol,MDBRow} from 'mdbreact';
import './Post.css';
const post = (props) => (
    // <article className="Post" onClick={props.clicked}>
    //     <h6>{props.title}</h6>
    //     <div className="Info">
    //         <div className="Author">{props.author}</div>
    //     </div>
    // </article>
    <MDBRow className='Post text-left' onClick={props.clicked}>
       <MDBCol md='4' sm='4' id='sizing'>
       <MDBView id='img' className='z-depth-1-half overlay rounded'>
       <img  className="img-fluid" src={props.photo} alt=""/>
       </MDBView>
       </MDBCol>
       <MDBCol md='8' sm='8'>
       <p className="font-weight-bold dark-grey-text">19/08/2018</p>
       <div classname= "justify-content-between ">
       <h6>{props.title}</h6>
       </div>
       </MDBCol>
    </MDBRow>
);
export default post;