//> React
// Contains all the functionality necessary to define React components
import React from "react";
// DOM bindings for React Router
import { Route, Switch } from "react-router-dom";

//> Components
/**
 * HomePage: A basic template page
 */
import {
  HomePage,
  MessagePage,
  LoginPage,
  ProfilePage,
  QuestionnairePage,
  ShopPage,
  ShopOverview,
  ProductView,
  ProductsPage,
} from "./components/pages";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <HomePage />} />
        <Route
          exact
          path="/login"
          render={(props) => <LoginPage {...props} />}
        />
        <Route
          exact
          path="/questionnaire"
          render={(props) => <QuestionnairePage {...props} />}
        />
        <Route
          exact
          path="/me"
          render={(props) => <ProfilePage {...props} />}
        />
        <Route
          exact
          path="/about"
          render={(props) => <MessagePage {...props} />}
        />
        <Route
          exact
          path="/privacy"
          render={(props) => <MessagePage {...props} />}
        />
        <Route
          exact
          path="/products"
          render={(props) => <ProductsPage {...props} />}
        />
        <Route
          exact
          path="/shops"
          render={(props) => <ShopOverview {...props} />}
        />
        <Route
          exact
          path="/product/:item"
          render={(props) => <ProductView {...props} />}
        />
        <Route
          exact
          path="/shop/:shop"
          render={(props) => <ShopPage {...props} />}
        />
        <Route component={HomePage} />
      </Switch>
    );
  }
}

export default Routes;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
