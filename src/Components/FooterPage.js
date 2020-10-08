import React from "react";
import { Link } from "react-router-dom";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './src/style.css'

const FooterPage = () => {
  return (
    <MDBFooter className="foot font-small pt-2 pb-2 mt-3">
      
      <div className="text-center text-md-left">
        <MDBContainer fluid>
          <MDBRow>
          <MDBCol className="text-white" md="6">
         <p>2020 Zwallet. All right reserved.</p>
         </MDBCol>

         <MDBRow>

            <MDBCol className="text-white" md="6">

            <p>+62 5637 8882 9901</p>
            
            </MDBCol>
            <MDBCol className="text-white" md="3">
            <p>contact@zwallet.com</p>
            </MDBCol>
        </MDBRow>

         </MDBRow>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;