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

//> Images
import shopIMG from "../../../assets/content/shops.jpg";
import partnerIMG from "../../../assets/content/vertriebspartner.jpg";

class HomePage extends React.Component {
  state = {
    radio: 2
  };

  onClick = nr => () => {
    this.setState({
      radio: nr
    });
  };

  render() {
    return (
      <div id="hero">
      <MDBView>
          <MDBMask overlay="black-light" />
          <MDBContainer
            style={{ height: "100%", width: "100%", paddingTop: "10rem" }}
            className=""
          >
            <MDBRow className="d-flex justify-content-center">
              <MDBCol md="6" className="white-text text-center text-md-left mb-5">
                <h1 className="display-4 font-weight-bold">naturvertrieb.at</h1>
                <h3>Where nature meets quality.</h3>
                <hr className="hr-light" />
                <h6 className="mb-4">
                  Unmöglich kann ein naturhaftes Begehren vergeblich sein.
                </h6>
                <MDBSmoothScroll to="shop" className="d-inline m-0 p-0">
                  <MDBBtn color="white" size="lg">
                    <MDBIcon icon="users" />
                    Partner werden
                  </MDBBtn>
                </MDBSmoothScroll>
                <a href="mailto:egger@naturvertrieb.at">
                  <MDBBtn color="green" size="lg">
                    <MDBIcon far icon="envelope" />
                    Kontakt
                  </MDBBtn>
                </a>
              </MDBCol>
              <MDBCol md="6" className="mb-4">
                <MDBCard className="text-center">
                  <MDBCardBody>
                    <h2 className="font-weight-bold">Treten Sie der Warteliste bei!</h2>
                    <p className="lead">
                    Immer mehr lokale Betriebe und Direktvermarkter nutzen ihre einzigartige Chance auf unserer 
                    Plattform.
                    </p>
                    <p>
                    Finde auch Du heraus, wie du im Naturvertrieb teilnehmen kannst um Deine tollen Produkte zu 
                    verkaufen oder Direktvertrieb zu betreiben.
                    </p>
                    <h3 className="mt-4 mb-2">Entdecke die Vorteile</h3>
                    <p className="mb-0">
                    Du bist Betreiber eines Betriebs und willst im profitablen Online-Markt Deine Produkte vertreiben?
                    </p>
                    <MDBSmoothScroll to="shop">
                      <MDBBtn color="green">
                        <MDBIcon icon="chart-line"/>
                        Shop eröffnen
                      </MDBBtn>
                    </MDBSmoothScroll>
                    <p className="mt-3 mb-0">
                    Du bist Direktvermarkter und willst durch Vermarktung und 
                    Weiterempfehlungen profitieren?
                    </p>
                    <MDBSmoothScroll to="distributor">
                      <MDBBtn color="elegant">
                        <MDBIcon icon="handshake"/>
                        Vertriebspartner werden
                      </MDBBtn>
                    </MDBSmoothScroll>
                    <div className="mt-4">
                    <hr />
                      <p className="lead mt-4">
                      Trete <strong>JETZT</strong> unserer Warteliste bei und sichere Dir Deinen Platz auf 
                      naturvertrieb.at!
                      </p>
                      {/*<form>
                        <input className="form-control" type="email" name="email" placeholder="Deine E-Mail" required />
                        <div className="text-left my-3">
                          <MDBInput
                            label={
                              <p>Ich habe die <a 
                              href="https://www.naturvertrieb.at/privacy"
                              target="_blank"
                              rel="noopener noreferrer"
                              >
                              Datenschutzerklärung
                              </a> gelesen und stimme der Weiterverarbeitung meiner Daten für die Kontaktaufnahme zu.
                              </p>
                            }
                            filled
                            type="checkbox"
                            id="checkbox1"
                            required
                            containerClass="mr-5"
                          />
                        </div>
                        <MDBBtn color="secondary" size="lg" type="submit">
                        Warteliste beitreten
                        </MDBBtn>
                      </form>*/}
                      <a href="mailto:egger@naturvertrieb.at">
                        <MDBBtn color="secondary" size="lg" type="submit">
                        Jetzt kontaktieren
                        </MDBBtn>
                      </a>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
        <MDBContainer>
        <h2 className="h1 font-weight-bold text-center mt-5">Wie Sie profitieren</h2>
          <MDBRow className="pb-5 mt-4">
            <MDBCol md="5" className="text-center">
              <img src={shopIMG} alt="" className="img-fluid"/>
            </MDBCol>
            <MDBCol md="7" id="shop">
              <h2>Verkaufen Sie Produkte online</h2>
              <p className="lead">
              Der moderne Online-Markt bietet sehr viele Vorteile und eine gigantische Menge an Neukunden.
              </p>
              <p className="lead font-weight-bold mb-0">
              Wir betreiben Ihren Shop!
              </p>
              <p>
              Sie haben daher wenig Selbstaufwand und können unproblematisch Ihre Produkte verkaufen. Wir übernehmen das
              Hosting und Betreuung des Shops.
              </p>
              <p className="lead font-weight-bold mb-0">
              Steigern Sie Ihrem Umsatz!
              </p>
              <p>Werden Sie JETZT Partner und stellen Sie Ihre Produkte in unseren Onlineshop und 
                steigern Sie somit Ihren Umastz.
              </p>
              <p>
                <a href="mailto:join@naturvertrieb.at?subject=Anfrage%20Shop%20Partner">
                <MDBBtn
                color="green"
                >
                  Jetzt Online-Shop eröffnen
                </MDBBtn>
                </a>
              </p>
            </MDBCol>
            <MDBCol md="12" className="py-3" />
            <MDBCol id="distributor" md="7" className="text-right">
              <h2>Vertreiben Sie Produkte</h2>
              <p className="lead">
              Wollen Sie unkomplizert in Online Marketing einsteigen und Ihren eigenen Vertrieb aufbauen?
              </p>
              <p className="lead font-weight-bold mb-0">
              Sie vertreiben, wir belohnen!
              </p>
              <p>
              Sie werden nach unserem Vergütungsplan entsprechend entlohnt.
              </p>
              <p>
                <a href="mailto:join@naturvertrieb.at?subject=Anfrage%20Vertriebspartner">
                <MDBBtn
                color="elegant"
                >
                  Vertriebspartner werden
                </MDBBtn>
                </a>
              </p>
            </MDBCol>
            <MDBCol md="5" className="text-center">
              <img src={partnerIMG} alt="" className="img-fluid"/>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default HomePage;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
