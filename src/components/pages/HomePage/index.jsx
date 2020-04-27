//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> Components
import {
  Hero,
  Features,
  Featured,
  CallToAction,
} from "../../organisms/sections";

class HomePage extends React.Component {
  render() {
    return (
      <>
        <Hero />
        <Features />
        <CallToAction />
        <Featured />
      </>
    );
  }
}

export default HomePage;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
