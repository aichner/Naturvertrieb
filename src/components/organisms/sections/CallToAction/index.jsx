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
import "./calltoaction.scss";

class CallToAction extends React.Component {
  render() {
    return (
      <section id="calltoaction">
        <MDBContainer className="text-center">
          <h2>Box online zusammenstellen</h2>
          <p className="lead">
            Heute zusammenstellen und in den nächsten Tagen direkt an Ihre
            Haustüre geliefert erhalten.
          </p>
          <MDBBtn color="green" size="lg">
            <MDBIcon icon="box" />
            Box zusammenstellen
          </MDBBtn>
        </MDBContainer>
      </section>
    );
  }
}

export default CallToAction;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
