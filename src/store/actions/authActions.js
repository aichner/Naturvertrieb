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

    if (firebase.auth().currentUser) {
      return true;
    } else {
      return firebase
        .auth()
        .signInAnonymously()
        .then(() => {
          return true;
        })
        .catch((err) => {
          return false;
        });
    }
  };
};

export const createCustomerFromAnon = (email, password, userData) => {
  return async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const credential = firebase.auth.EmailAuthProvider.credential(
      email,
      password
    );
  };
};

export const createCustomerFromAnonWithGoogle = (userData) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    // Init Firebase and Firestore
    const firebase = getFirebase();
    const firestore = getFirestore();
    // Init Google oAuth
    const provider = new firebase.auth.GoogleAuthProvider();

    // Add custom params to the Google oAuth
    provider.addScope("email");

    // Open Popup and authenticate
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (response) {
        // This gives you a Google Access Token. You can use it to access the Google API
        /*const credential = firebase.auth.GoogleAuthProvider.credential(
          response.credential.accessToken
        );*/
        // Signed in user info
        const user = response.user;

        // Create data for user that was just created
        firestore
          .collection("users")
          .doc(user.uid)
          .set(
            {
              name: userData.name,
              email: userData.email ? userData.email : null,
              email_check: userData.email_check ? true : false,
              nutritionalStyle: userData.nutritionalStyle,
              sex: userData.sex,
            },
            { merge: true }
          )
          .then(function () {
            dispatch({
              type: "SIGNUP_SUCCESS",
            });
          });
      })
      .catch(function (error) {
        //console.error(error);
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };
};

export const createCustomerFromAnonWithFacebook = (userData) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    // Init Firebase and Firestore
    const firebase = getFirebase();
    const firestore = getFirestore();
    // Init Facebook oAuth
    const provider = new firebase.auth.FacebookAuthProvider();

    // Add custom params to the Facebook Auth
    provider.addScope("user_birthday");
    provider.addScope("email");

    // Open Popup and authenticate
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (response) {
        // This gives you a Google Access Token. You can use it to access the Google API
        /*const credential = firebase.auth.GoogleAuthProvider.credential(
          response.credential.accessToken
        );*/
        // Signed in user info
        const user = response.user;
        // Create data for user that was just created
        firestore
          .collection("users")
          .doc(user.uid)
          .set(
            {
              name: userData.name,
              email: userData.email ? userData.email : null,
              email_check: userData.email_check ? true : false,
              nutritionalStyle: userData.nutritionalStyle,
              sex: userData.sex,
            },
            { merge: true }
          )
          .then(function () {
            dispatch({
              type: "SIGNUP_SUCCESS",
            });
          });
      })
      .catch(function (error) {
        //console.error(error);
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
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
