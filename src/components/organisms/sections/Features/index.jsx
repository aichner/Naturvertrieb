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
import "./features.scss";

//> Data
const features = [
  {
    header: "Lokal",
    subHeader:
      "Sorgfältig ausgewählte Österreichische Händler aus Ihrer Region.",
    icon: "map-marker-alt",
  },
  {
    header: "Einfach",
    subHeader: "Online auswählen, per Post erhalten. Einfacher geht's nicht!",
    icon: "box-open",
  },
  {
    header: "Kein Aufpreis",
    subHeader:
      "Die Top Produkte werden von unseren sorgfältig ausgewählten Händlern zusammengestellt – ohne Aufpreis.",
    icon: "hand-holding-usd",
  },
];

class Features extends React.Component {
  render() {
    return (
      <section id="features">
        <MDBContainer className="text-center">
          <MDBRow>
            {features.map((feature, i) => {
              return (
                <MDBCol md="4" key={i}>
                  <MDBIcon icon={feature.icon} size="3x" />
                  <p className="lead font-weight-bold mb-2">{feature.header}</p>
                  <p className="text-muted mb-0">{feature.subHeader}</p>
                </MDBCol>
              );
            })}
          </MDBRow>
        </MDBContainer>
      </section>
    );
  }
}

export default Features;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
