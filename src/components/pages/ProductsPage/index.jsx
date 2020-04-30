//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBTreeview,
  MDBTreeviewList,
  MDBTreeviewItem,
} from "mdbreact";

//> CSS
import "./products.scss";

//> Data
const categories = [
  { name: "Nahrungsergänzungsmittel", icon: "pills", far: false },
  {
    name: "Lebensmittel",
    icon: "utensils",
    far: false,
    sub: [
      { name: "Obst", icon: "apple-alt", far: false },
      { name: "Gemüse", icon: "carrot", far: false },
      { name: "Bauernprodukte", icon: "bacon", far: false },
      { name: "Sonstiges", icon: "hamburger", far: false },
    ],
  },

  { name: "Körperpflege", icon: "shower", far: false },
  { name: "Kleidung", icon: "tshirt", far: false },
];

class ProductsPage extends React.Component {
  state = {};

  render() {
    return (
      <MDBContainer fluid className="my-5 py-5" id="products">
        <MDBRow>
          <MDBCol lg="2">
            <MDBCard>
              <MDBCardBody>
                <p className="lead font-weight-bold">Unsere Produkte</p>
                <MDBTreeview
                  theme="animated"
                  className="w-100"
                  getValue={(value) => console.log(value)}
                >
                  {categories.map((category, i) => {
                    return (
                      <>
                        {category.sub ? (
                          <MDBTreeviewList
                            icon={category.icon}
                            title={category.name}
                            far={category.far}
                            key={i}
                          >
                            {category.sub &&
                              category.sub.map((sub, k) => {
                                return (
                                  <MDBTreeviewItem
                                    icon={sub.icon}
                                    title={sub.name}
                                    far={sub.far}
                                    key={k}
                                  />
                                );
                              })}
                          </MDBTreeviewList>
                        ) : (
                          <MDBTreeviewItem
                            icon={category.icon}
                            title={category.name}
                            far={category.far}
                            key={i}
                          />
                        )}
                      </>
                    );
                  })}
                </MDBTreeview>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="10">
            <MDBCard>
              <MDBCardBody></MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default ProductsPage;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Christian Aichner
 */
