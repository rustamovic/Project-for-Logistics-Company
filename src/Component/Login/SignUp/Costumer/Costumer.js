import React, { Component } from 'react';
import {MDBContainer, MDBCol} from 'mdbreact';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './Costumer.css';
class CostumerSignUp extends Component {
    state={
      name:'',
      email:'',
      password:''
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
      const {name, email, password} = this.state
    return (
      <MDBContainer id='rty'>
      <MDBCol md='6 offset-3' sm='6 offset-3' lg='6 offset-3' className='my-5 border shadow'>
      <h4>Costumer Sign Up</h4>
      <hr/>
      <form className='needs-validation'
            onSubmit={this.submitHandler}
            noValidate>
      <p className='h5 text-center mb-4'>Sign up</p>
      <label
        htmlFor='defaultFormRegisterNameEx'
        className='grey-text'>
        Your name
      </label>
      <input
        value={name} 
        name='name'
        type='text'
        id='defaultFormRegisterNameEx'
        className='form-control'
        onChange={this.changeHandler}
        required/>
      <br />
      <label
        htmlFor='defaultFormRegisterEmailEx'
        className='grey-text'>
        Your email
      </label>
      <input
        value={email} 
        name='email'
        type='email'
        id='defaultFormRegisterEmailEx'
        className='form-control'
        onChange={this.changeHandler}
        required/>
      <br />
      <label
        htmlFor='defaultFormRegisterPasswordEx'
        className='grey-text'>
        Your password
      </label>
      <input
        value={password} 
        name='password'
        type='password'
        id='defaultFormRegisterPasswordEx'
        className='form-control'
        onChange={this.changeHandler}
        required/>
      <div className='text-center mt-4'>
        <button className='btn btn-blue' type='submit'>
          Register
        </button>
      </div>
    </form>
    <p>Already have an account!</p><Link to='/costumer'> Login</Link>
      </MDBCol>
      </MDBContainer>
    );
  }
} 
export default CostumerSignUp;