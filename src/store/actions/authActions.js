export const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({
          type: "LOGIN_SUCCESS",
        });
      })
      .catch((err) => {
        dispatch({
          type: "LOGIN_ERROR",
          err,
        });
      });
  };
};

export const signInAnonymous = (credentials) => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    return firebase
      .auth()
      .signInAnonymously()
      .then(() => {
        return true;
      })
      .catch((err) => {
        return false;
      });
  };
};

export const createCustomerFromAnon = (email, password) => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    const credential = firebase.auth.EmailAuthProvider.credential(
      email,
      password
    );

    return firebase
      .auth()
      .currentUser.linkWithCredential(credential)
      .then(function (usercred) {
        const user = usercred.user;
        console.log("Anonymous account successfully upgraded", user);
      })
      .catch(function (error) {
        console.log("Error upgrading anonymous account", error);
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({
          type: "SIGNOUT_SUCCESS",
        });
      });
  };
};

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
