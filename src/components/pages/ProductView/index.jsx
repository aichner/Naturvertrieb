//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBContainer } from "mdbreact";

class ProductView extends React.Component {
  state = {};

  render() {
    return (
      <MDBContainer>
        <p>Product view</p>
      </MDBContainer>
    );
  }
}

export default ProductView;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Christian Aichner
 */
