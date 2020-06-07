import React, { Component } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from 'mdbreact';
import {Link} from 'react-router-dom';
import { FaUser, FaUserPlus, FaMapMarker, FaShip } from 'react-icons/fa';
import './Header.css'    
class Header extends Component{
    state = {
      collapseID: ''
    };
  
    toggleCollapse = collapseID => () =>
      this.setState(prevState => ({
        collapseID: prevState.collapseID !== collapseID ? collapseID : ''
      }));
  
    render() {
      const { isOpen, collapseID } = this.state;
return (
          <MDBNavbar
          style={{backgroundColor:'#071621 '}}
            dark
            expand='md'
            className='fixed-top'>
            <MDBNavbarBrand>
              <Link to='/'><strong className='white-text'>OECL</strong></Link>
            </MDBNavbarBrand>
            <MDBNavbarToggler
              onClick={this.toggleCollapse('navbarCollapse3')}/>
            <MDBCollapse id='navbarCollapse3' isOpen={collapseID} navbar>
              <MDBNavbarNav left>
                <MDBNavItem>
                  <MDBLink class='btn' to='/'>Home
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  </MDBLink>
                 </MDBNavItem>
                <MDBNavItem>
                  <MDBLink to='/about' class='btn'>About
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  </MDBLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBLink to='/services' class='btn'>Services
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  </MDBLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBLink to='/career' class='btn'>Career
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  </MDBLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBLink to='/blog' class='btn'>Blog
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  </MDBLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBLink to='#!' class='btn'>Downloads
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  </MDBLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBLink to='/contact' class='btn'>Contact
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  </MDBLink>
                </MDBNavItem>
              
              </MDBNavbarNav>
              <MDBNavbarNav right>
              <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <div className='d-none d-md-inline'>Login</div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu right className='light'>
                      <MDBDropdownItem className='waves-effect waves-light'>
                      <Link to='/costumer'><FaUser/> Costumer Login</Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem >
                      <Link to='/agent'><FaUserPlus/> Agent Login</Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                      <Link to='#'><FaMapMarker/> Tracking</Link>
                      </MDBDropdownItem>
                      <MDBDropdownItem>
                      <Link to='#'><FaShip/> Sailing Schedule</Link>
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
  );
}}
// const mapStateToProps = state =>{
//     return {
//       opn: state.isOpen,
//       opn2: state.isOpen2

//     }
//   };
//   const mapDispatchToProps = dispatch =>{
//     return {
//       toggle: ()=>dispatch({type: actionTypes.TOGGLE}),
//       toggle2: ()=>dispatch({type: actionTypes.TOGGLE2})

//     }
//   }
export default (Header);
