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

class AboutUs extends React.Component {
  render() {
    return (
      <section id="about">
        <MDBContainer className="text-left py-5">
          <h2>
            <strong>naturvertrieb.at</strong> - Ihr Marktplatz für lokale
            Produkte
          </h2>
          <MDBRow className="mt-4">
            <MDBCol lg="4">Bild</MDBCol>
            <MDBCol lg="8">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    );
  }
}

export default AboutUs;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
