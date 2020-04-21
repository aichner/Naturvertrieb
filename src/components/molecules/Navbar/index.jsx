//> React
// Contains all the functionality necessary to define React components
import React from "react";
// Router
import { withRouter } from "react-router-dom";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
  MDBBtn,
} from "mdbreact";

//> Redux
// Connect
import { connect } from "react-redux";
// Actions
import { signOut } from "../../../store/actions/authActions";

//> CSS
import "./navbar.scss";

// React Logo
import Logo from "../../../assets/content/h70.png";

class Navbar extends React.Component {
  state = {
    collapseID: "",
  };

  toggleCollapse = (collapseID) => () =>
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));

  closeCollapse = (collapseID) => () => {
    window.scrollTo(0, 0);
    this.state.collapseID === collapseID && this.setState({ collapseID: "" });
  };

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("mainNavbarCollapse")}
      />
    );
    const { collapseID } = this.state;
    const { auth, profile, location } = this.props;

    if (location && location.pathname !== "/manage") {
      return (
        <div>
          <MDBNavbar color="white" light expand="md" fixed="top" scrolling>
            <MDBContainer>
              <MDBNavbarBrand href="/" className="py-0 font-weight-bold">
                <img src={Logo} alt="Naturvertrieb" className="img-fluid" />
              </MDBNavbarBrand>
              <MDBNavbarToggler
                onClick={this.toggleCollapse("mainNavbarCollapse")}
              />
              <MDBCollapse
                id="mainNavbarCollapse"
                isOpen={this.state.collapseID}
                navbar
              >
                <MDBNavbarNav right className="flex-center">
                  <MDBNavItem className="mr-2">
                    <a
                      href="mailto:info@naturvertrieb.at"
                      className="text-dark"
                    >
                      <strong>Kontakt</strong>
                    </a>
                  </MDBNavItem>
                  {auth.uid && (
                    <MDBNavItem>
                      <MDBNavLink
                        exact
                        to=""
                        onClick={() => this.props.signOut()}
                      >
                        <MDBBtn size="lg" outline color="elegant">
                          Logout
                        </MDBBtn>
                      </MDBNavLink>
                    </MDBNavItem>
                  )}
                  {!auth.uid && (
                    <>
                      <MDBNavItem>
                        <MDBNavLink exact to="questionnaire">
                          <MDBBtn size="lg" color="green">
                            Fragebogen
                          </MDBBtn>
                        </MDBNavLink>
                      </MDBNavItem>
                      <MDBNavItem>
                        <MDBNavLink exact to="login">
                          <MDBBtn size="lg" color="elegant" outline>
                            Login
                          </MDBBtn>
                        </MDBNavLink>
                      </MDBNavItem>
                    </>
                  )}
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
          {collapseID && overlay}
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
