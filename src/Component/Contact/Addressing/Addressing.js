import React, { Component } from 'react';
import {MDBIcon,MDBView, MDBCol,MDBRow, } from 'mdbreact';
import axios from 'axios';
import Operator from '../../../Assets/Photos/call.png';
 class Addressing extends Component {
    state={
        name:'',
        email:'',
        subject:'',
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
            subjectt: this.state.subject,
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
        const { name, email, subject, message} = this.state
    return (
        <MDBRow>
        <MDBCol md='5'>
        <MDBView>
          <img className='d-block w-100'
               src={Operator} alt='Operator'/>
        </MDBView>
        </MDBCol>
        <MDBCol md='7'>
        <form className='needs-validation'
        onSubmit={this.submitHandler}
        noValidate>
                    <p className='h5 text-center mb-4'>Write to us</p>
                    <label htmlFor='defaultFormContactNameEx' className='grey-text'>
                      Your name
                    </label>
                    <input
                      value={name}
                      name='name'
                      type='text'
                      id='defaultFormContactNameEx'
                      className='form-control'                  
                      onChange={this.changeHandler}
                      required/>
                    <br />
                    <label
                      htmlFor='defaultFormContactEmailEx'
                      className='grey-text'>
                      Your email
                    </label>
                    <input
                      value={email} 
                      name='email'
                      type='email'
                      id='defaultFormContactEmailEx'
                      className='form-control'                 
                      onChange={this.changeHandler}
                      required/>
                    <br />
                    <label
                      htmlFor='defaultFormContactSubjectEx'
                      className='grey-text'>
                      Subject
                    </label>
                    <input
                      value={subject}
                      name='subject'
                      type='text'
                      id='defaultFormContactSubjectEx'
                      className='form-control'
                      onChange={this.changeHandler}
                      required/>
                    <br />
                    <label
                      htmlFor='defaultFormContactMessageEx'
                      className='grey-text'>
                      Your message
                    </label>
                    <textarea
                      value={message} 
                      name='message'
                      type='text'
                      id='defaultFormContactMessageEx'
                      className='form-control'
                      rows='3'                 
                      onChange={this.changeHandler}/>
                    <div className='text-center mt-4'>
                      <button className='btn btn-outline-purple'
                              onClick={this.postDataHandler}>
                        Send
                        <MDBIcon icon='paper-plane' className='ml-2' />
                      </button>
                    </div>
                  </form>
        </MDBCol>
        </MDBRow>
    );
  }
}
export default Addressing;