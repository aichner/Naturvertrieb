//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBCard } from "mdbreact";

class Product extends React.Component {
  state = {};

  render() {
    return (
      <MDBCard>
        <p>Product</p>
      </MDBCard>
    );
  }
}

export default Product;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Christian Aichner
 */
