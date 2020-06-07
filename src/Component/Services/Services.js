import React, { Component } from 'react';
import { MDBIcon, MDBCard,MDBCardBody,
  MDBCardImage,MDBCardText,MDBCardTitle,
  MDBEdgeHeader,MDBCol,MDBContainer,
  MDBRow,MDBFreeBird,MDBAnimation,
  MDBNavLink } from 'mdbreact';
import Imagev from '../../Assets/Photos/backwall.jpg';
import oceanF from '../../Assets/Photos/oceanF.jpg';
import air from '../../Assets/Photos/air.jpg';
import ware from '../../Assets/Photos/unnamed.jpg';
import liquid from '../../Assets/Photos/liquid.jpg';
import custom from '../../Assets/Photos/custom.jpg';
import liner from '../../Assets/Photos/liner.jpg';
import conRe from '../../Assets/Photos/conRe.png';
import leas from '../../Assets/Photos/leas.jpg';
import cargo from '../../Assets/Photos/cargo.jpg';
import manFre from '../../Assets/Photos/manaFre.jpg';
import fcl from '../../Assets/Photos/fcl.jpg';
import lcl from '../../Assets/Photos/lcl.jpg';
import './Service.css';
import {Link} from 'react-router-dom';
class Career extends Component {
  scrollToTop = () => window.scrollTo(0, 0);
  render(){
    return (
      <div>
      <MDBEdgeHeader className='py-3 text-center'  style={{ backgroundImage:`url(${Imagev})`}}>
      <img src={Imagev} alt='' id='imgb'/>
      </MDBEdgeHeader>
    <MDBFreeBird id='bln'>
        <MDBCol md='8' lg='7' 
          className=' mx-auto float-none white z-depth-1 py-2 px-2 rounded'>
          <h1><b>
          <MDBIcon icon='bolt' size='1x' className='blue-text' /> Service</b></h1>
          <p><Link to='/'>Home</Link> >><b> Service</b></p> 
        </MDBCol>
    </MDBFreeBird>
    <MDBContainer className='my-5'>
    <h1><b><MDBIcon icon='bolt' size='1x' className='blue-text' /> SERVICE PROVIDED</b></h1>
    <MDBContainer>
            <MDBRow>
              <MDBCol md='12' className='mt-4'>
                <MDBRow id='categories'>
                  <MDBCol md='4'>
                    <MDBAnimation reveal type='fadeInLeft'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                          id='MDBC'
                          cascade
                          className='img-fluid'
                          src={oceanF}
                          top hover/>
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <MDBIcon
                              icon='css3'
                              brand
                              className='pink-text pr-2'
                            />
                            <strong>OCEAN FREIGHT</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                          We have a long history of providing integrated logistics solutions that include distribution.
                          </MDBCardText>
                          <MDBNavLink
                            tag='button'
                            to='/services/ocean-freight'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md='4'>
                    <MDBAnimation reveal type='fadeInDown'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                        id='MDBC'
                          cascade
                          className='img-fluid'
                          src={air}
                          top hover/>
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <MDBIcon icon='cubes' className='blue-text pr-2' />
                            <strong>AIR FREIGHT</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                          Customized & effective options to meet customer’s deadline/timeliness and achieve cost savings.
                          </MDBCardText>
                          <MDBNavLink
                            tag='button'
                            to='/services/air-freight'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md='4'>
                    <MDBAnimation reveal type='fadeInRight'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                        id='MDBC'
                          cascade
                          className='img-fluid'
                          src={ware}
                          top hover/>
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <MDBIcon icon='code' className='green-text pr-2' />
                            <strong>WAREHOUSING</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                          With its network in the domestic and global market, OECL can identify the right kind of warehouse.
                          </MDBCardText>

                          <MDBNavLink
                            tag='button'
                            to='/services/warehousing'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                </MDBRow>
                <MDBRow id='categories'>
                  <MDBCol md='4'>
                    <MDBAnimation reveal type='fadeInLeft'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                        id='MDBC'
                          cascade
                          className='img-fluid'
                          src={liquid}
                          top hover/>
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <MDBIcon icon='bars' className='pink-text pr-2' />
                            <strong>LIQUID CARGO TRANSPORTATION</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                          Expertise and services for the carriage of liquid cargoes in ISO Tanks, Flexi Tanks& IBCs.
                          </MDBCardText>

                          <MDBNavLink
                            tag='button'
                            to='/services/liquid-cargo-transportation'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md='4'>
                    <MDBAnimation reveal type='fadeIn'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                        id='MDBC'
                          cascade
                          className='img-fluid'
                          src={custom}
                          top hover/>
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <MDBIcon icon='edit' className='blue-text pr-2' />
                            <strong>CUSTOMS CREARANCE</strong>
                          </MDBCardTitle>
                          <MDBCardText className='mb-4 pb-3'>
                          As one of the leading custom clearing agents, we ensure smooth and easy clearance
                          </MDBCardText>

                          <MDBNavLink
                            tag='button'
                            to='/services/customs-clearance'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md='4'>
                    <MDBAnimation reveal type='fadeInRight'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                        id='MDBC'
                          cascade
                          className='img-fluid'
                          src={liner}
                          top hover/>
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <MDBIcon icon='table' className='green-text pr-2' />
                            <strong>LINER AGENCY</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                          First class liner & port agency services, with an extensive range of related services to liners.
                          </MDBCardText>

                          <MDBNavLink
                            tag='button'
                            to='/services/liner-agency'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                </MDBRow>
                <MDBRow id='categories'>
                  <MDBCol md='4'>
                    <MDBAnimation reveal type='fadeInLeft'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                        id='MDBC'
                          cascade
                          className='img-fluid'
                          src={conRe}
                          top hover/>
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <MDBIcon icon='bars' className='pink-text pr-2' />
                            <strong>CONTAINER RE-POSITIONING</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                          OECL with its expertise in the market and many trade lanes provide Container Re-Positioning.
                          </MDBCardText>

                          <MDBNavLink
                            tag='button'
                            to='/services/container-repositioning'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md='4'>
                    <MDBAnimation reveal type='fadeIn'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                        id='MDBC'
                          cascade
                          className='img-fluid'
                          src={leas}
                          top hover/>
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <MDBIcon icon='edit' className='blue-text pr-2' />
                            <strong>CONTAINER LEASING</strong>
                          </MDBCardTitle>
                          <MDBCardText className='mb-4 pb-3'>
                          OECL is involved in domestics & international container leasing with a wide network handled by experts.
                          </MDBCardText>

                          <MDBNavLink
                            tag='button'
                            to='/services/container-leasing'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md='4'>
                    <MDBAnimation reveal type='fadeInRight'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                        id='MDBC'
                          cascade
                          className='img-fluid'
                          src={cargo}
                          top hover/>
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <MDBIcon icon='table' className='green-text pr-2' />
                            <strong>PROJECT CARGO</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                          OECL is equipped to handle all kinds of special and complex project cargoes with an expert team.
                          </MDBCardText>

                          <MDBNavLink
                            tag='button'
                            to='/services/project-cargo'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                </MDBRow>
                <MDBRow id='categories'>
                  <MDBCol md='4'>
                    <MDBAnimation reveal type='fadeInLeft'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                        id='MDBC'
                          cascade
                          className='img-fluid'
                          src={manFre}
                          top hover/>
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <MDBIcon
                              icon='window-restore'
                              far
                              className='pink-text pr-2'
                            />
                            <strong>FREIGHT MANAGEMENT</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                          Do eiusmod tempor incididunt ut labore et dolore magna
                          </MDBCardText>

                          <MDBNavLink
                            tag='button'
                            to='/services/freight-management'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md='4'>
                    <MDBAnimation reveal type='fadeInUp'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                        id='MDBC'
                          cascade
                          className='img-fluid'
                          src={fcl}
                          top hover/>
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <MDBIcon
                              icon='arrows-alt'
                              className='blue-text pr-2'
                            />
                            <strong>FCL SERVICES</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                          Do eiusmod tempor incididunt ut labore et dolore magna
                          </MDBCardText>

                          <MDBNavLink
                            tag='button'
                            to='/services/fcl-services'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md='4'>
                  <MDBAnimation reveal type='fadeInRight'>
                    <MDBCard cascade className='my-3 grey lighten-4'>
                      <MDBCardImage
                      id='MDBC'
                        cascade
                        className='img-fluid'
                        src={lcl}
                        top hover/>
                      <MDBCardBody cascade className='text-center'>
                        <MDBCardTitle>
                          <MDBIcon icon='table' className='green-text pr-2' />
                          <strong>LCL SERVICES</strong>
                        </MDBCardTitle>
                        <MDBCardText>
                        Do eiusmod tempor incididunt ut labore et dolore magna
                        </MDBCardText>

                        <MDBNavLink
                          tag='button'
                          to='/services/lcl-services'
                          color='mdb-color'
                          className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                          onClick={this.scrollToTop}
                        >
                          More
                        </MDBNavLink>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
    </MDBContainer>
    <MDBCol  className='p-5 text-white'  style={{backgroundColor:'rgb(28, 41, 53)'}}>
      <h1><strong>Would You Like To Discuss Your Requirements?</strong></h1>
      <h3>Feel free to call us and our logistics professional will be happy
       to understand your requirement and provide you with the best solution possible.</h3>
      <button className='btn btn-outline-purple'>GET A QUOTE</button>
    </MDBCol>
      </div>
  );
  }}
export default Career;