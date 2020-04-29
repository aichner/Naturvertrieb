// Have initial state for when state is not ready to be passed
const initState = {
  loading: false,
  questionnaireError: null,
  questionnaireResults: null,
};

const questionnaireReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOAD_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "GET_QUESTIONNAIRE_SUCCESS":
      console.log("Got questionnaire");

      return {
        ...state,
        questionnaireError: false,
        questionnaireResults: action.results,
        loading: false,
      };
    case "GET_QUESTIONNAIRE_FAIL":
      console.log("Questionnaire fetching failed", action.err);

      return {
        ...state,
        questionnaireError: true,
        loading: false,
      };
    default:
      return state;
  }
};

export default questionnaireReducer;

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
