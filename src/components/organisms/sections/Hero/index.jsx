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
import "./hero.scss";

//> Images
import logoIMG from "../../../../assets/content/h120.png";
import shopIMG from "../../../../assets/content/shops.jpg";
import partnerIMG from "../../../../assets/content/vertriebspartner.jpg";

class Hero extends React.Component {
  render() {
    return (
      <section id="hero">
        <MDBView>
          <MDBMask overlay="white-slight" />
          <MDBContainer
            style={{ height: "100%", width: "100%", paddingTop: "8rem" }}
            className="mb-5 text-center"
          >
            <div>
              <img
                src={logoIMG}
                alt="Naturvertrieb logo"
                className="img-fluid m-auto"
              />
              <h2 className="h1 font-weight-bold mt-5">
                Ihr Marktplatz für lokale Produkte
              </h2>
              <p className="lead font-weight-bold">
                Frische, lokale und hochwertige Produkte bis zu Deiner Haustüre
                geliefert.
              </p>
            </div>
          </MDBContainer>
        </MDBView>
      </section>
    );
  }
}

export default Hero;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
