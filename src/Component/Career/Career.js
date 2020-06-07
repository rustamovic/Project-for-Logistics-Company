import React, { Component } from 'react';
import { MDBView,
  MDBEdgeHeader,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFreeBird,
  MDBIcon
} from 'mdbreact';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Imagev from '../../Assets/Photos/about.png';
import imge from '../../Assets/Photos/Workers.png';
import './Career.css';
class Career extends Component{
  state={
    name:'',
    email:'',
    phone:'',
    position:'',
    cvURL:'',
    message:'',
  }
  submitHandler = event => {
    event.preventDefault();
    event.target.className += ' was-validated';
  };
  changeHandler = event => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };
  postDataHandler = () =>{
    const data = {
        namee: this.state.name,
        emaill: this.state.email,
        phonee: this.state.phone,
        positionn: this.state.position,
        cvURLL: this.state.cvURL,
        messagee: this.state.message
    }
    axios.post('http://jsonplaceholder.typicode.com/posts', data)
    .then(res=>{
        console.log(res);
    })
    .catch(res=>{
      console.log('error');
    });
}
  render() {
    const { name, email, phone,position, cvURL, message} = this.state
return (
    <div>
    <MDBEdgeHeader className='py-3 text-center'>
    <img alt='' src={Imagev} id='career'/>
    </MDBEdgeHeader>
    <div>
    <MDBFreeBird id='bln'>
        <MDBCol md='8' lg='7' 
          className=' mx-auto float-none white z-depth-1 py-2 px-2 rounded'>
          <h1><b>
          <MDBIcon icon='bolt' size='1x' className='blue-text' /> Carrer</b></h1>
          <p><Link to='/'>Home</Link> >><b> Career</b></p> 
        </MDBCol>
    </MDBFreeBird>
    </div>
    <MDBContainer fluid className='my-5 '>
    <h2><b><MDBIcon icon='bolt' size='1x' className='blue-text' /> PLEASE CHECK LATER FOR OPEN POSITIONS.</b></h2>
    <MDBRow className='py-5'>
    <MDBCol md='4' lg='5'>
    <MDBView>
                <img
                  
                  className='d-block w-100'
                  src={imge}
                  alt='Second slide'/>
              </MDBView>
    </MDBCol>
    <MDBCol md='8' lg='7'>
    <h3><b><MDBIcon icon='bolt' size='1x' className='blue-text my-4' /> SEND TO APPLY</b></h3>
    <form className='needs-validation'
          onSubmit={this.submitHandler}
          noValidate>
    <div className='form-row'>
              <div className='form-group col-md-6'>
                <input value={name} name='name' onChange={this.changeHandler} type='text' className='form-control' placeholder='Name' />
              </div>
              <div className='form-group col-md-6'>
                <input 
                value={email} 
                name='email'
                onChange={this.changeHandler} 
                type='email' 
                className='form-control' 
                id='inputEmail4' 
                placeholder='Email' />
              </div>
            </div>
            <div className='form-row'>
            <div className='form-group col-md-6'>
            <input value={phone} name='phone' onChange={this.changeHandler} type='number' className='form-control' id='inputPassword4' placeholder='Phone Number' />
          </div>
              <div className='form-group col-md-6'>
                <input value={position} name='position' onChange={this.changeHandler} type='text' className='form-control' id='inputPassword4' placeholder='Position apply'/>
              </div>
            </div>
            <div className='form-row'>
              <div className='form-group col-md-6'>
                <input value={cvURL} name='cvURL' onChange={this.changeHandler} type='text' className='form-control' id='inputCity' placeholder='Enter portfolio URL' />
              </div>
              <div className='form-group col-md-6'>
                <input
                  type='file'
                  className='custom-file-input'
                  id='validatedCustomFile'/>
                <label
                  className='custom-file-label'
                  htmlFor='validatedCustomFile'>
                  Upload CV/Portfolio
                </label>
              </div>
            </div>
            <textarea value={message} name='message' onChange={this.changeHandler} rows='5'className='form-control' id='exampleFormControlTextarea1'  placeholder='Type your message'/>
            <button type='submit' className='btn btn-primary btn-md' onClick={this.postDataHandler}>
              APPLY NOW
            </button>
          </form>
    </MDBCol>
    </MDBRow>
    </MDBContainer>
    </div>
  );
    }
}
export default Career;