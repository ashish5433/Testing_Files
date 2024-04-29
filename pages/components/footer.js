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
        {/* <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section> */}

        {/* <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section> */}

       

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
        Shaukeens.com
        </a>
      </div>
    </MDBFooter>
  );
}