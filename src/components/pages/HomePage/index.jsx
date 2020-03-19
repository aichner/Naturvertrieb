//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBEdgeHeader,
  MDBFreeBird,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBIcon,
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
  MDBView,
  MDBMask,
  MDBInput,
  MDBBtn,
} from "mdbreact";

//> Images
import shopIMG from "../../../assets/content/shops.jpg";

class HomePage extends React.Component {
  render() {
    return (
      <div id="hero">
      <MDBView>
          <MDBMask overlay="black-light" />
          <MDBContainer
            style={{ height: "100%", width: "100%", paddingTop: "10rem" }}
            className=""
          >
            <MDBRow className="d-flex justify-content-center">
              <MDBCol md="6" className="white-text text-center text-md-left mb-5">
                <h1 className="display-4 font-weight-bold text-uppercase">Natur Vertrieb</h1>
                <hr className="hr-light" />
                <h6 className="mb-4">
                  Unmöglich kann ein naturhaftes Begehren vergeblich sein.
                </h6>
                <MDBBtn color="white" size="lg">
                  <MDBIcon icon="users" />
                  Partner werden
                </MDBBtn>
                <MDBBtn color="secondary" size="lg">
                  <MDBIcon icon="shopping-cart" />
                  Jetzt shoppen
                </MDBBtn>
              </MDBCol>
              <MDBCol md="6" className="mb-4">
                <MDBCard className="dark-grey-text">
                  <MDBCardBody>
                    
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
        <MDBContainer>
          <MDBRow className="py-5">
            <MDBCol md="5" className="text-center">
              <img src={shopIMG} alt="" className="img-fluid"/>
            </MDBCol>
            <MDBCol md="7">
              <p>
                Sie betreieben keinen <strong>eigenen Onlineshop</strong> mit Ihren <strong>Naturprodukten</strong>, 
                möchten aber den Verkauf Ihrer Produkte steigern?</p> 
              <p>
                Werden Sie <strong>JETZT</strong> Partner und stellen Sie Ihre Produkte in unseren Onlineshop und 
                steigern Sie somit Ihren Umastz.
              </p>
              <p>
                <MDBBtn
                color="secondary"
                >
                  Jetzt Online-Shop eröffnen
                </MDBBtn>
              </p>
            </MDBCol>
            <MDBCol md="8" className="text-center">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </MDBCol>
            <MDBCol md="4" className="text-center">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default HomePage;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
