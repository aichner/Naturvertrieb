export const getQuestionnaire = (type) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    // Start loading animation
    dispatch({ type: "LOAD_LOADING" });

    // What type of questionnaire should be loaded
    type = type ? type : "standard";

    // Define questionnaire document
    let questionnaire = firestore.collection("questionnaire").doc(type);

    // Get questionnaire
    questionnaire
      .get()
      .then((doc) => {
        if (doc.exists) {
          // Convert to Questionnaire object
          let results = doc.data();
          dispatch({ type: "GET_QUESTIONNAIRE_SUCCESS", results });
        } else {
          dispatch({ type: "GET_QUESTIONNAIRE_FAIL", err: "Questionnaire not found." });
        }
      })
      .catch((err) => {
        dispatch({ type: "GET_QUESTIONNAIRE_FAIL", err });
      });
  };
};

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
