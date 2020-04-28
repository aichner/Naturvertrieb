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
  MDBFormInline,
  MDBSmoothScroll,
} from "mdbreact";

//> CSS
import "./featured.scss";

class Featured extends React.Component {
  render() {
    return (
      <section id="featured">
        <MDBContainer className="text-center">
          <h2>Beliebte Produkte</h2>
          <MDBRow className="flex-center mt-4">
            {[1, 1, 1, 1].map((product, i) => {
              return (
                <MDBCol md="3" className="text-center">
                  <p className="lead">Product {i + 1}</p>
                </MDBCol>
              );
            })}
          </MDBRow>
        </MDBContainer>
      </section>
    );
  }
}

export default Featured;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
