import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center footer-color' color='white' bgColor='black'>
      <MDBContainer className='p-4'>

       

        <section>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase' style={{textAlign:"left" ,color:"grey"}}>Shaukeens</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    About
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Contact
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Career
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                   Help and FAQS
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                   Terms and Conditions
                  </a>
                </li>
                
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase' style={{textAlign:"left" ,color:"grey"}}>Categories</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Yatchs
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Real Estates
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Helicopters
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Jets
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Bikes
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Cars
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase' style={{textAlign:"left" ,color:"grey"}}>Catalogs</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    All Brands
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    All Business
                  </a>
                </li>
                
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'  style={{textAlign:"left" ,color:"grey"}}>Business</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    List With us
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Partners
                  </a>
                </li>
                
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>
        <hr />
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-white' href=''>
        KIR.AI
        </a>
      </div>
    </MDBFooter>
  );
}