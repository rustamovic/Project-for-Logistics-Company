import React, { Component } from 'react';
import axios from 'axios';
import { MDBNavLink,
    MDBCard,
    MDBCardBody,
    MDBCardGroup,
    MDBCardImage,
    MDBCardTitle,
    MDBContainer,
    MDBIcon,
  } from 'mdbreact';
  import './NewsPart.css'
 class NewsPart extends Component {
  state = {
    posts: [],
    error: false
}
componentDidMount(){
    
    axios.get('http://jsonplaceholder.typicode.com/photos')
    .then(res => {
        const postes = res.data.slice(0, 2);
        const updatedPost = postes.map(post =>{
        return {
            ...post,
        }
    });
        this.setState({posts: updatedPost});
    })
    .catch( error => {
        this.setState({error: true});
    });
}
  render() {
    let posts = <h1 style={{textAlign :'center'}}>Oops, Something went wrong!!!</h1>
        if(!this.state.error){
            posts = this.state.posts.map(post => {
            return <MDBCard>
            <MDBCardImage
            id='imgcn'
              src={post.url}
              alt='MDBCard image cap'
              top
              hover
              overlay='white-slight'/>
            <MDBCardBody>
            <h6 className='text-right'>12.02.2020</h6>
              <MDBCardTitle tag='h5' className='text-left'>{post.title}</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        });
    }
    return (
      <MDBContainer className='mb-4'>
      <h1><MDBIcon icon='bolt' size='1x' className='blue-text my-4'/>
       <strong> OUR NEWS</strong></h1>
      <h3>LATEST LOGISTIC & TRANSPORT NEWS</h3>
      <MDBCardGroup deck className='my-4'>
          {posts}    
      </MDBCardGroup>
      <MDBNavLink
      tag='button'
      to='/blog'
      color='mdb-color'
      className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline' >
     More
    </MDBNavLink>
      </MDBContainer>
    );
  }
}
export default NewsPart;