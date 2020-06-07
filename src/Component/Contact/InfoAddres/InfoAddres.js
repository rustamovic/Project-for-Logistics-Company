import React from 'react';
import {MDBIcon,MDBCol,MDBRow,
    MDBIframe,MDBCard,MDBCardBody,
    MDBTable,MDBTableHead,MDBTableBody} from 'mdbreact';
    import './InfoAddres.css';
const InfoAddres = () => {
  return (
    <MDBRow className='my-5'>
    <MDBCol md='8'>
    <div className='map-container rounded z-depth-1-half '>
    <MDBIframe style={{width: '100%', height:'100%'}}
     src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-73.96694563267306!3d40.751663750099084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494'>
    </MDBIframe>
    </div>
    </MDBCol>
    <MDBCol md='4'>
            <MDBCard >
              <MDBCardBody >
                <MDBTable scrollY className='text-left'>
                  <MDBTableHead><h5>SCROLL DOWN FOR LOCATIONS</h5></MDBTableHead>
                  <hr/>
                  <MDBTableBody>
                  <h5>SINGAPORE - HEAD QUARTERS</h5>
                  <h6>OECL (Singapore) Pte Ltd</h6>
                  <h6>Blk 511 Kampong Bahru Road</h6>
                  <h6>Singapore 099447</h6>
                  <h6><MDBIcon icon='phone'/> +65 6224 1338</h6>
                  <h6><MDBIcon icon='fax'/> +65 6224 1336</h6>
                  <h6><MDBIcon icon='envelope'/> sumi@oecl.sg</h6>
                  <hr/>
                  <h5>MALAYSIA</h5>
                  <hr/>
                  <h5>PORTKLANG (MALAYSIA)</h5>
                  <h6>OECL (Malaysia) SdnBhd</h6>
                  <h6>MTBBT 2, 3A-5</h6>
                  <h6>Jalan Batu Nilam 16</h6>
                  <h6>The Landmark (Behind AEON Mall)</h6>
                  <h6>Bandar Bukit Tinggi 2</h6>
                  <h6>41200,Klang, Selangor D.E.</h6>
                  <h6><MDBIcon icon='phone'/> +603 - 3319 2778 / 74 / 75</h6>
                  <h6><MDBIcon icon='fax'/> +603 - 3319 2779</h6>
                  <h6><MDBIcon icon='envelope'/> philip@oecl.sg</h6>
                  <hr/>
                  <h5>PASIRGUDANG (MALAYSIA)</h5>
                  <h6>OECL (Malaysia) SdnBhd</h6>
                  <h6>Unit 20-03A, Level 20 Menara Zurich</h6>
                  <h6>15 Jalan Dato Abdullah Tahir</h6>
                  <h6>80300 Johor Bahru</h6>
                  <h6><MDBIcon icon='phone'/> 603-3319 2778 / 74 / 75</h6>
                  <h6><MDBIcon icon='fax'/> 603 – 3319 2779</h6>
                  <h6><MDBIcon icon='envelope'/> vatu@oecl.sg</h6>
                  <hr/>
                  <h5>INDIA</h5>
                  <hr/>
                  <h5>CHENNAI (INDIA)</h5>
                  <h6>OECL Shipping and Logistics Pvt Ltd</h6>
                  <h6>Zafrulla Tower, 2A, 2nd Floor</h6>
                  <h6>Old # 126, New # 257</h6>
                  <h6>Angappa Naicken Street</h6>
                  <h6>Parry’s Corner, Chennai – 600001</h6>
                  <h6><MDBIcon icon='phone'/> +91 44 4500 4065</h6>
                  <h6><MDBIcon icon='fax'/> +91 44 45004066</h6>
                  <h6><MDBIcon icon='envelope'/> Kk@oecl.sg</h6>
                  <hr/>
                  <h5>MUMBAI (INDIA) </h5>
                  <h6>OECL Shipping and Logistics Pvt Ltd</h6>
                  <h6>503, Midas, Sahar Plaza Complex</h6>
                  <h6>Sir M.V Road</h6>
                  <h6>Andheri East, Mumbai 400059</h6>
                  <h6><MDBIcon icon='phone'/> +91 22 40696606</h6>
                  <hr/>
                  <h5 >DELHI (INDIA)</h5>
                  <h6>OECL Shipping and Logistics Pvt Ltd</h6>
                  <h6>804 Madhuban Building</h6>
                  <h6>55 Nehru Palace</h6>
                  <h6>New Delhi - 110019</h6>
                  <h6><MDBIcon icon='phone'/> +91 11 493224477 / 48 /49</h6>
                  <h6><MDBIcon icon='envelope'/>sumanta@oecl.sg</h6>
                  hr/>
                  <h5 className='blue-text'>KOLKATA (INDIA)</h5>
                  <h6>OECL Shipping and Logistics Pvt Ltd</h6>
                  <h6>Globsyn Crystals XI – 11& 12</h6>
                  <h6>1st Floor Block – EP</h6>
                  <h6>Sector V</h6>
                  <h6>Salt Lake Electronics Complex</h6>
                  <h6>Salt Lake City</h6>
                  <h6>Kolkata – 700091</h6>
                  <h6><MDBIcon icon='phone'/> +91 33 46025458 / 59 / 60</h6>
                  <hr/>
                  <h5>INDANESIA</h5>
                  <hr/>
                  <h6>PT.OECL INDONESIA LOGISTIK (Indonesia)</h6>
                  <h6>408, Lina Building</h6>
                  <h6>JL.HR Rasuna Said kav B7</h6>
                  <h6>Jakarta</h6>
                  <h6><MDBIcon icon='phone'/> +62 21 529 20292, 522 4887</h6>
                  <h6><MDBIcon icon='fax'/> +62 21 522 4884</h6>
                  <h6><MDBIcon icon='envelope'/> logistics.jkt@oecl.sg</h6>
                  <hr/>
                  <h4>THAILAND</h4>
                  <hr/>
                  <h5>OECL (THAILAND) CO., LTD.</h5>
                  <h6>109 CCT Building, 3rd Floor</h6>
                  <h6>Rm.3,Surawong Road, Suriyawongse</h6>
                  <h6>Bangrak, Bangkok 10500 109 CCT Building</h6>
                  <h6><MDBIcon icon='phone'/> +662-634-3240</h6>
                  <h6><MDBIcon icon='fax'/> +662-634-3942</h6>
                  <h6><MDBIcon icon='envelope'/> siriwan@oecl.sg</h6>
                  <hr/>
                  <h5>OECL PORT SERVICES</h5>
                  <hr/>
                  <h5>OECL REEFER & LOGISTICS SDNBHD</h5>
                  <h6>MTBBT 2, 3A-5, Jalan Batu Nilam 16</h6>
                  <h6>The Landmark (Behind AEON Mall)</h6>
                  <h6>Bandar Bukit Tinggi 2</h6>
                  <h6>41200,Klang, Selangor D.E.</h6>
                  <h6><MDBIcon icon='phone'/> +603-3080 8896</h6>
                  <h6><MDBIcon icon='fax'/> +60197295040</h6>
                  <h6><MDBIcon icon='envelope'/> anilkumar@oecl.sg</h6>
                  </MDBTableBody>
                </MDBTable>
              </MDBCardBody>
            </MDBCard>
        </MDBCol>
    </MDBRow>
  );
}

export default InfoAddres;
