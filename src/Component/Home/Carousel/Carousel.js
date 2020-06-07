import React from 'react';
import { MDBCarousel, MDBCarouselCaption,
  MDBCarouselInner, MDBCarouselItem,
  MDBView, MDBMask} from 'mdbreact';
import './Carousel.css';

import Mapp from '../../../Assets/Photos/mpa.jpg';
import terminal from '../../../Assets/Photos/terminal.jpg';
import MSC from '../../../Assets/Photos/MSC.jpg';
import large from '../../../Assets/Photos/large.jpg';

const Carousel = () => {
  return (
        <MDBCarousel
          activeItem={1} length={4} showControls
          showIndicators className='z-depth-1' slide>
          <MDBCarouselInner>
            <MDBCarouselItem itemId='1'>
              <MDBView>
                <img
                  id='home'
                  className='d-block w-100 '
                  src={Mapp}
                  alt='First slide'/>
                <MDBMask overlay='black-light' />
              </MDBView>
              <MDBCarouselCaption>
                <h1 className='h1-responsive'>OECL</h1>
                <p>First text</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='2'>
              <MDBView>
                <img
                id='home'
                  className='d-block w-100'
                  src={terminal}
                  alt='Second slide'
                />
                <MDBMask overlay='black-strong' />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className='h3-responsive'>Strong mask</h3>
                <p>Second text</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='3'>
              <MDBView>
                <img
                id='home'
                  className='d-block w-100'
                  src={MSC}
                  alt='Third slide'
                />
                <MDBMask overlay='black-slight' />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className='h3-responsive'>Slight mask</h3>
                <p>Third text</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='4'>
              <MDBView>
                <img
                id='home'
                  className='d-block w-100'
                  src={large}
                  alt="Mattonit's item"
                />
                <MDBMask overlay='black-light' />
              </MDBView>
              <MDBCarouselCaption>
                <h3 className='h3-responsive'>Sopot Beach</h3>
                <p>Taken june 21th by @mattonit</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
  );
}

export default Carousel;
