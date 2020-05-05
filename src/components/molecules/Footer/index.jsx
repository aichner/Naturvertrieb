//> React
// Contains all the functionality necessary to define React components
import React from "react";
// React Router
import { Link } from "react-router-dom";

//> Additional
// To copy to clipboard
import copy from "copy-to-clipboard";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBFooter,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBBtn,
  MDBIcon,
} from "mdbreact";

//> CSS
import "./footer.scss";

//> Images
import logoImg from "../../../assets/content/h120.png";
import payPalImg from "../../../assets/content/trusted/paypal.png";
import masterCardImg from "../../../assets/content/trusted/mastercard.png";
import visaCardImg from "../../../assets/content/trusted/visa.png";
import sofortImg from "../../../assets/content/trusted/sofort.png";

class Footer extends React.Component {
  state = {};
  render() {
    return (
      <MDBFooter color="white" className="font-small text-dark pt-4">
        <MDBContainer className="text-center text-md-left py-3">
          <MDBRow>
            <MDBCol md="6" className="text-left">
              <p className="font-weight-bold lead">Zahlungsarten</p>
              <div className="trusted">
                <img src={payPalImg} alt="PayPal" className="img-fluid" />
                <img
                  src={sofortImg}
                  alt="Sofortüberweisung"
                  className="img-fluid"
                />
                <img src={visaCardImg} alt="Visa" className="img-fluid" />
                <img
                  src={masterCardImg}
                  alt="Mastercard"
                  className="img-fluid"
                />
              </div>
            </MDBCol>
            <MDBCol md="6" className="text-left">
              <p className="font-weight-bold lead">Bei uns kaufen Sie sicher</p>
              <div className="trusted">
                <p className="text-muted">Gütezeichen to be added</p>
              </div>
            </MDBCol>
          </MDBRow>
          <MDBRow className="flex-center mt-3 align-items-initial">
            <MDBCol md="3" className="text-center">
              <p className="font-weight-bold lead text-left mb-2">
                Rechtliches
              </p>
              <Link to="about">
                <li className="list-unstyled">Impressum</li>
              </Link>
              <Link to="privacy">
                <li className="list-unstyled">Datenschutzerklärung</li>
              </Link>
              <Link to="anb">
                <li className="list-unstyled">Nutzungsbedingungen</li>
              </Link>
              <Link to="disclaimer">
                <li className="list-unstyled">Widerruf</li>
              </Link>
            </MDBCol>
            <MDBCol md="3" className="text-center">
              <p className="font-weight-bold lead text-left mb-2">Verkaufen</p>
              <Link to="partnershop">
                <li className="list-unstyled">Shop eröffnen</li>
              </Link>
              <Link to="partner">
                <li className="list-unstyled">Affiliate Partner werden</li>
              </Link>
              <Link to="partnerlist">
                <li className="list-unstyled">Unsere Partner</li>
              </Link>
              <Link to="faq">
                <li className="list-unstyled">FAQ</li>
              </Link>
            </MDBCol>
            <MDBCol md="3" className="text-center">
              <p className="font-weight-bold lead text-left mb-2">Kategorien</p>
              <li className="list-unstyled">Nahrungsergänzungsmittel</li>
              <li className="list-unstyled">Lebensmittel</li>
              <li className="list-unstyled">Körperpflege</li>
              <li className="list-unstyled">Kleidung</li>
            </MDBCol>
            <MDBCol md="3" className="text-left">
              <p className="font-weight-bold lead text-left mb-2">
                Kundensupport
              </p>
              <p>MO-SO 9:00 - 18:00</p>
              <p>+43 660 5752112</p>
              <p className="font-weight-bold mt-3">Kontakt über Facebook</p>
              <div>
                <MDBBtn color="blue" className="w-100 m-0">
                  <MDBIcon fab icon="facebook-messenger" />
                  Facebook Messenger
                </MDBBtn>
              </div>
              <p className="font-weight-bold mt-3">Kontakt per E-Mail</p>
              <div>
                <MDBBtn color="elegant" className="w-100 m-0">
                  <MDBIcon far icon="envelope" />
                  E-Mail
                </MDBBtn>
              </div>
            </MDBCol>
            <MDBCol md="2" className="mt-4 mb-2">
              <img
                src={logoImg}
                alt="Naturvertrieb Logo"
                className="img-fluid"
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3 text-dark">
          <MDBContainer fluid>
            <div>
              &copy; {new Date().getFullYear()} Copyright: Vertrieb Luca Egger
              <p className="my-2 font-weight-bold">
                Made with
                <i
                  className="fas fa-heart pulse red-text ml-1 mr-1"
                  aria-hidden="true"
                ></i>
                by
                <a
                  href="https://www.aichner-christian.com"
                  target="_blank"
                  className="ml-1 text-dark underlined"
                  rel="noopener noreferrer"
                >
                  Werbeagentur Christian Aichner
                </a>
                .
              </p>
            </div>
            <div>
              <small>
                Stable release
                <span className="pl-2 pr-2">·</span>
                Version v{process.env.REACT_APP_VERSION}
                <span className="pl-2 pr-2">·</span>
                <a
                  href="https://github.com/aichner/Naturvertrieb"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-dark"
                >
                  <MDBIcon fab icon="github" className="pr-2" />
                  View on GitHub
                </a>
                <span className="pl-2 pr-2">·</span>
                <a
                  href="https://github.com/aichner/Naturvertrieb/issues/new?template=bug_report.md"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-dark"
                >
                  <MDBIcon icon="bug" className="pr-2" />
                  Report bug
                </a>
              </small>
            </div>
          </MDBContainer>
        </div>
      </MDBFooter>
    );
  }
}

export default Footer;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
