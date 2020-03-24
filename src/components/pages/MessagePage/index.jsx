//> React
// Contains all the functionality necessary to define React components
import React from "react";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBContainer,
  MDBBtn,
  MDBAlert,
  MDBIcon,
} from "mdbreact";

//> CSS
import "./messagepage.scss";

class MessagePage extends React.Component {
  render() {
    return (
      <MDBContainer id="message" className="py-5 my-5 text-center">
        {this.props.location.pathname === "/thankyou" &&
        <>
          <h2>
          Thank you for considering to donate
          <MDBIcon icon="heart" className="pink-text ml-2"/>
          </h2>
          <p className="lead mt-3 mb-0">
          We are a <strong>non-profit</strong>, <strong>open source</strong> Social Network.
          </p>
          <p>
          We therefore require donations to stay up-and-running.
          </p>
          <p className="mb-0">If you change your mind later, you can always</p>
          <MDBBtn
          color="green"
          size="md"
          onClick={() => this.setState({modalDonate: true})}
          >
          Donate
          </MDBBtn>
        </>
        }
        {this.props.location.pathname === "/about" &&
        <div className="text-left mt-5">
          <h2>
          Impressum
          </h2>
          <p className="lead mb-0 font-weight-bold">Naturvertrieb</p>
          <small>Verantwortlich für das Unternehmen Naturvertrieb und aller Services</small>
          <p>
            <strong>Luca Egger</strong>
            <br/>
            Tel: +43 6605752112
            <br/>
            Kratschacher Weg 14
            <br/>
            9580 Villach
            <br/>
            <MDBBtn
            color="green"
            href="mailto:egger@naturvertrieb.at"
            >
              <MDBIcon far icon="envelope" />
              Kontakt
            </MDBBtn>
          </p>
          <p className="lead mb-0 font-weight-bold">Webservices</p>
          <small>
          Entwickler, aber nicht Eigentümer und Verantwortlicher, der Homepage und aller Naturvertrieb Webservices
          </small>
          <p>
            <strong>Werbeagentur Christian Aichner</strong>
            <br/>
            Tel: +43 681 205 027 54
            <br/>
            Emailwerkstraße 29
            <br/>
            9523 Villach-Landskron
            <br/>
            <MDBBtn
            color="elegant"
            href="https://www.aichner-christian.com/about?refer=direktvertrieb"
            >
              <MDBIcon icon="question" />
              Info
            </MDBBtn>
          </p>
          <p className="lead mb-2">
          Haftungsausschluss
          </p>
          <p>
          Dieser Haftungsausschluss ist als Teil des Internetangebotes zu betrachten, von dem aus auf diese Webseite 
          verwiesen wurde. Sofern Teile oder einzelne Formulierungen dieses Textes der geltenden Rechtslage nicht, 
          nicht mehr oder nicht vollständig entsprechen sollten, bleiben die übrigen Teile des Dokumentes in ihrem 
          Inhalt und ihrer Gültigkeit davon unberührt.
          </p>
          <p className="lead mb-2">
          Haftung für Inhalte dieser Webseite
          </p>
          <p>
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und 
          Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir für eigene 
          Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, 
          übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf 
          eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von 
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch 
          erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von 
          entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>
          <p className="lead mb-2">
          Haftung für Links auf Webseiten Dritter
          </p>
          <p>
          Unser Angebot enthält Links zu externen Websites. Auf den Inhalt dieser externen Webseiten haben wir 
          keinerlei Einfluss. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die 
          Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. 
          Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
          Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche 
          Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht 
          zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>
          <p className="lead mb-2">
          Urheberrecht
          </p>
          <p>
          Die Betreiber dieser Webseite sind bemüht, stets die Urheberrechte anderer zu beachten bzw. auf selbst 
          erstellte sowie lizenzfreie Werke zurückzugreifen. Die durch die Seitenbetreiber erstellten Inhalte und 
          Werke auf dieser Webseite unterliegen dem Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. 
          Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des 
          Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und 
          Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          </p>
        </div>
        }
      </MDBContainer>
    );
  }
}

export default MessagePage;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */