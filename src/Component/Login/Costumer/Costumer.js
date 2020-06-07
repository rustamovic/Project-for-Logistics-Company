import React, { Component } from 'react';
import {MDBContainer, MDBCol} from 'mdbreact';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './Costumer.css';
class Costumer extends Component {
    state={
      email:'',
      password:'',
      loading: ''
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
          emaill: this.state.email,
          passwordd: this.state.password
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
      const {email, password} = this.state
    return (
      <MDBContainer id='rty'>
      <MDBCol md='6 offset-3' sm='6 offset-3' lg='6 offset-3' className='my-5 border shadow'>
      <p>WELCOME TO OECL (SINGAPORE) PTE LTD ONLINE COSTUMER LOGIN.</p>
      <hr/>
        <form className='needs-validation'
              onSubmit={this.submitHandler}
              noValidate>
          <p  className='h5 text-center mb-4'>Login</p>
          <label
            htmlFor='defaultFormLoginEmailEx'
            className='grey-text' >
            Your email
          </label>
          <input
            value={email} 
            name='email'
            type='email'
            id='defaultFormLoginEmailEx'
            className='form-control'
            onChange={this.changeHandler}/>
          <br/>
          <label
            htmlFor='defaultFormLoginPasswordEx'
            className='grey-text'>
            Your password
          </label>
          <input
            value={password} 
            name='password'
            type='password'
            id='defaultFormLoginPasswordEx'
            className='form-control'
            onChange={this.changeHandler}/>
          <div className='text-center mt-4'>
            <button className='btn btn-indigo' 
            onClick={this.postDataHandler}
             type='submit'>
            Login
            </button>
          </div>
        </form>
        <p>Not have an account!</p><Link to='/costumersignup'>register</Link>
      </MDBCol>
      </MDBContainer>
    );
  }
} 
export default Costumer;