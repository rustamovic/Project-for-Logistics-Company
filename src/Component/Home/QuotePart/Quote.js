import React, { Component } from 'react';
import {MDBContainer, MDBRow,} from 'mdbreact';
import axios from 'axios';
 class Quote extends Component {
    state = {
        fname: '',
        lname: '',
        departure: '',
        arrival: '',
        cargo_description: '',
        transportation_method: ''
      };
      submitHandler = event => {
        event.preventDefault();
        event.target.className += ' was-validated';
      };
      changeHandler = event => {
        this.setState({ ...this.state, [event.target.name]: event.target.value });
      };
      postDataHandler = () =>{
        const data = {
            fnamee: this.state.fname,
            lnamee: this.state.lname,
            departuree: this.state.departure,
            arrivall: this.state.arrival,
            cargo: this.state.cargo_description,
            transport: this.state.transportation_method
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
    const { fname, lname, departure, arrival, cargo_description, transportation_method } = this.state
    return (
      <div>
      <div className='py-5' style={{backgroundColor:'rgb(39, 68, 89)'}}>
      <MDBContainer>
      <form
              className='needs-validation'
              onSubmit={this.submitHandler}
              noValidate
            >
              <MDBRow>
                <div className='col-md-4 mb-3'>
                  <label
                    htmlFor='defaultFormRegisterNameEx'
                    className='grey-text'
                  >
                    First name
                  </label>
                  <input
                    value={fname}
                    name='fname'
                    onChange={this.changeHandler}
                    type='text'
                    id='defaultFormRegisterNameEx'
                    className='form-control'
                    placeholder='First name'
                    required
                  />
                  <div style={{ top: 'auto' }} className='valid-tooltip'>
                    Looks good!
                  </div>
                </div>
                <div className='col-md-4 mb-3'>
                  <label
                    htmlFor='defaultFormRegisterEmailEx2'
                    className='grey-text'
                  >
                    Last name
                  </label>
                  <input
                    value={lname}
                    name='lname'
                    onChange={this.changeHandler}
                    type='text'
                    id='defaultFormRegisterEmailEx2'
                    className='form-control'
                    placeholder='Last name'
                    required />
                  <div style={{ top: 'auto' }} className='valid-tooltip'>
                    Looks good!
                  </div>
                </div>
                <div className='col-md-4 mb-3'>
                  <label
                    htmlFor='defaultFormRegisterConfirmEx3'
                    className='grey-text'>
                    Departure
                  </label>
                  <input
                    value={departure}
                    onChange={this.changeHandler}
                    type='text'
                    id='defaultFormRegisterConfirmEx3'
                    className='form-control'
                    name='departure'
                    placeholder='Departure'
                    required/>
                </div>
              </MDBRow>
              <MDBRow>
                <div className='col-md-4 mb-3'>
                  <label
                    htmlFor='defaultFormRegisterPasswordEx4'
                    className='grey-text'>
                    Arrival
                  </label>
                  <input
                    value={arrival}
                    onChange={this.changeHandler}
                    type='text'
                    id='defaultFormRegisterPasswordEx4'
                    className='form-control'
                    name='arrival'
                    placeholder='Arrival'
                    required/>
                </div>
                <div className='col-md-4 mb-3'>
                  <label
                    htmlFor='defaultFormRegisterPasswordEx4'
                    className='grey-text'>
                    Cargo description
                  </label>
                  <input
                    value={cargo_description}
                    onChange={this.changeHandler}
                    type='text'
                    id='defaultFormRegisterPasswordEx4'
                    className='form-control'
                    name='cargo_description'
                    placeholder='Cargo description'
                    required/>
                </div>
                <div className='col-md-4 mb-3'>
                  <label
                    htmlFor='defaultFormRegisterPasswordEx4'
                    className='grey-text'>
                    Transportation method
                  </label>
                  <input
                    value={transportation_method}
                    onChange={this.changeHandler}
                    type='text'
                    id='defaultFormRegisterPasswordEx4'
                    className='form-control'
                    name='transportation_method'
                    placeholder='Transportation method'
                    required/>
                </div>
              </MDBRow>
              <button className='btn btn-outline-purple' type='submit' onClick={this.postDataHandler}>
              GET A QUOTE</button>
            </form>
      </MDBContainer>
      </div>
      </div>
    );
  }
}
export default Quote;