//> React
// Contains all the functionality necessary to define React components
import React from "react";
// Router DOM bindings
import { Link } from "react-router-dom";

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

//> Config
const box = false;

class CallToAction extends React.Component {
  render() {
    return (
      <section id="calltoaction">
        {box ? (
          <MDBContainer className="text-center">
            <h2>Box online zusammenstellen</h2>
            <p className="lead">
              Heute zusammenstellen und in den nächsten Tagen direkt vor Deine
              Haustüre geliefert erhalten.
            </p>
            <MDBBtn color="green" size="lg">
              <MDBIcon icon="box" />
              Box zusammenstellen
            </MDBBtn>
          </MDBContainer>
        ) : (
          <MDBContainer className="text-center">
            <h2>Lokale Produkte erkunden</h2>
            <p className="lead">
              Heute auswählen und in den nächsten Tagen direkt vor Deine
              Haustüre geliefert erhalten.
            </p>
            <Link to="/products">
              <MDBBtn color="green" size="lg">
                <MDBIcon icon="list-alt" />
                Zum Sortiment
              </MDBBtn>
            </Link>
          </MDBContainer>
        )}
      </section>
    );
  }
}

export default CallToAction;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
