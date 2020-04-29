//> React
// Contains all the functionality necessary to define React components
import React from "react";
// Router DOM bindings
import { withRouter } from "react-router-dom";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import { MDBContainer } from "mdbreact";

class ShopPage extends React.Component {
  state = {};

  componentDidMount = () => {
    if (
      this.props.match &&
      this.props.match &&
      this.props.match.params &&
      this.props.match.params.shop
    ) {
      // Get shop name for query
      const shop = this.props.match.params.shop;

      // Do query to get shop data
    } else {
      // Shop not found
    }
  };

  render() {
    return (
      <MDBContainer fluid>
        <p>Shop Page</p>
      </MDBContainer>
    );
  }
}

export default withRouter(ShopPage);

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Christian Aichner
 */
