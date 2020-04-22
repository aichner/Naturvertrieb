//> React
// Contains all the functionality necessary to define React components
import React from "react";
// Router
import { Link, Redirect, withRouter } from "react-router-dom";

//> Additional modules
// Firebase
import firebase from "firebase";

//> Redux
// Connect
import { connect } from "react-redux";
// Actions
import { getQuestionnaire } from "../../../store/actions/questionnaireActions";

//> MDB
// "Material Design for Bootstrap" is a great UI design framework
import {
  MDBContainer,
  MDBBtn,
  MDBInput,
  MDBMask,
  MDBView,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBStepper,
  MDBStep,
} from "mdbreact";

//> Components
// To be added here

//> CSS
import "./questionnaire.scss";

//> Images
// To be added here

class ProfilePage extends React.Component {
  state = { selectedField: 0, allergies: {} };

  componentDidMount = () => {
    this.props.getQuestionnaire();
  };

  fetchVariables = (label) => {
    // Check if the label has variables
    if (label.includes("{{") && label.includes("}}")) {
      let variables = label.match(/{{(.*?)}}/g);

      // Replace the variable with the value
      variables.map((variable, i) => {
        let variableName = variable.replace(/{{|}}/g, "").toLowerCase();

        if (this.state[variableName]) {
          if (this.state[variableName] !== undefined) {
            let dat = this.state[variableName];
            let result = dat;

            if (Array.isArray(dat)) {
              let datarr = "";

              dat.map((da, i) => {
                if (dat.length > 1) {
                  datarr += dat[i];
                  if (dat.length - 1 !== i) {
                    datarr += ", ";
                  }
                } else {
                  datarr += dat[i];
                }
              });
              result = datarr;
            }
            label = label.replace(variable, result);
          }
        }
      });
      return label;
    } else {
      return label;
    }
  };

  handleSubmit = (e, field, i) => {
    e.preventDefault();
    // Check if the field was required
    field.required
      ? this.state[field.name]
        ? this.setState({
            selectedField: i + 1,
            errorField: undefined,
          })
        : this.setState({ errorField: i })
      : this.setState({
          selectedField: i + 1,
          errorField: undefined,
        });
  };

  getOptionClasses = (field, option) => {
    let className = "option";
    if (
      field.multiSelect &&
      this.state[field.name] &&
      this.state[field.name][option.name]
    ) {
      className += " active";
    }
    if (option.hoverColor) {
      className += " " + option.hoverColor;
    }
    return className;
  };

  render() {
    const { auth, questionnaire, loading } = this.props;
    console.log(this.state);
    // Check if firebase has loaded profile data
    if (loading) {
      return (
        <MDBContainer className="flex-center my-5 py-5">
          <div className="spinner-grow text-danger" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </MDBContainer>
      );
    } else {
      return (
        <MDBContainer id="questionnaire" className="text-center my-5 py-5">
          <MDBStepper className="d-sm-flex d-none">
            {questionnaire &&
              questionnaire.fields.map((field, i) => {
                return (
                  <MDBStep
                    className={
                      this.state.selectedField > i
                        ? "completed"
                        : this.state.selectedField === i
                        ? "active"
                        : "open"
                    }
                    key={i}
                  >
                    <span className="step-item">
                      <span className="circle">{i + 1}</span>
                      <span className="label">{field.stepName}</span>
                    </span>
                  </MDBStep>
                );
              })}
          </MDBStepper>
          <MDBRow className="flex-center my-5">
            <MDBCol md="6">
              {questionnaire &&
                questionnaire.fields.map((field, i) => {
                  switch (field.module) {
                    case "singleLine":
                      return (
                        <div key={i}>
                          {this.state.selectedField === i && (
                            <>
                              <h3>{this.fetchVariables(field.label)}</h3>
                              <p className="lead mb-4 text-muted">
                                {field.helpText}
                              </p>
                              <form
                                onSubmit={(e) => this.handleSubmit(e, field, i)}
                              >
                                <input
                                  type={field.type}
                                  className={
                                    this.state.errorField === i
                                      ? "error form-control form-control-lg mb-4"
                                      : "form-control form-control-lg mb-4"
                                  }
                                  value={this.state[field.name]}
                                  onChange={(e) =>
                                    this.setState({
                                      [field.name]: e.target.value,
                                    })
                                  }
                                  placeholder={field.placeholder}
                                  name={field.name}
                                  required={field.required}
                                />
                                {field.checkbox && (
                                  <MDBInput
                                    label={field.checkbox.label}
                                    filled
                                    type="checkbox"
                                    required={field.required}
                                    id={"checkbox" + i}
                                    checked={this.state[field.checkbox.name]}
                                    onClick={(e) =>
                                      this.setState({
                                        [field.checkbox.name]: e.target.checked,
                                      })
                                    }
                                    name={field.checkbox.name}
                                    containerClass="checkbox-form mb-3"
                                  />
                                )}
                                {field.skip && (
                                  <MDBBtn
                                    color="green"
                                    outline
                                    size="lg"
                                    onClick={() =>
                                      this.setState({
                                        selectedField: i + 1,
                                        errorField: undefined,
                                      })
                                    }
                                  >
                                    Überspringen
                                  </MDBBtn>
                                )}
                                <MDBBtn color="green" type="submit" size="lg">
                                  {field.button ? field.button : "Weiter"}
                                </MDBBtn>
                              </form>
                              {i > 0 && i <= questionnaire.fields.length && (
                                <span
                                  className="text-muted clickable d-block mt-5"
                                  onClick={() =>
                                    this.setState({
                                      selectedField: i - 1,
                                    })
                                  }
                                >
                                  <MDBIcon icon="angle-left" className="mr-1" />
                                  Zurück
                                </span>
                              )}
                            </>
                          )}
                        </div>
                      );
                      break;
                    case "options":
                      return (
                        <div key={i}>
                          {this.state.selectedField === i && (
                            <>
                              <h3>{this.fetchVariables(field.label)}</h3>
                              <p className="lead mb-4 text-muted">
                                {field.helpText}
                              </p>
                              <div className="options">
                                {field.options &&
                                  field.options.map((option, k) => {
                                    return (
                                      <div
                                        className={this.getOptionClasses(
                                          field,
                                          option
                                        )}
                                        onClick={() => {
                                          if (field.multiSelect) {
                                            this.setState({
                                              [field.name]: this.state[
                                                field.name
                                              ]
                                                ? this.state[field.name][
                                                    option.name
                                                  ]
                                                  ? {
                                                      ...this.state[field.name],
                                                      [option.name]: false,
                                                    }
                                                  : {
                                                      ...this.state[field.name],
                                                      [option.name]: true,
                                                    }
                                                : {
                                                    [option.name]: true,
                                                  },
                                            });
                                          } else {
                                            this.setState({
                                              [field.name]: option.name,
                                              selectedField: i + 1,
                                            });
                                          }
                                        }}
                                      >
                                        <MDBIcon icon={option.icon} />
                                        {option.label}
                                      </div>
                                    );
                                  })}
                              </div>
                              {field.multiSelect && (
                                <MDBBtn
                                  color="green"
                                  size="lg"
                                  className="mt-3"
                                  disabled={
                                    this.state[field.name]
                                      ? !Object.keys(this.state[field.name])
                                          .length > 0
                                      : true
                                  }
                                  onClick={() => {
                                    this.setState({
                                      selectedField: i + 1,
                                    });
                                  }}
                                >
                                  {field.button ? field.button : "Weiter"}
                                </MDBBtn>
                              )}
                              {i > 0 && i <= questionnaire.fields.length && (
                                <span
                                  className="text-muted clickable d-block mt-5"
                                  onClick={() =>
                                    this.setState({
                                      selectedField: i - 1,
                                    })
                                  }
                                >
                                  <MDBIcon icon="angle-left" className="mr-1" />
                                  Zurück
                                </span>
                              )}
                            </>
                          )}
                        </div>
                      );
                      break;
                    case "checkboxes":
                      return (
                        <div key={i}>
                          {this.state.selectedField === i && (
                            <>
                              <h3>{this.fetchVariables(field.label)}</h3>
                              <p className="lead mb-4 text-muted">
                                {field.helpText}
                              </p>
                              <MDBRow className="checkboxes mb-3">
                                {field.checkboxes &&
                                  field.checkboxes.map((checkbox, k) => {
                                    return (
                                      <MDBCol md="6">
                                        <MDBView
                                          className="checkbox-item"
                                          onClick={() =>
                                            this.setState({
                                              [field.name]: this.state[
                                                field.name
                                              ]
                                                ? this.state[field.name][
                                                    checkbox.name
                                                  ]
                                                  ? {
                                                      ...this.state[field.name],
                                                      [checkbox.name]: false,
                                                    }
                                                  : {
                                                      ...this.state[field.name],
                                                      [checkbox.name]: true,
                                                    }
                                                : {
                                                    [checkbox.name]: true,
                                                  },
                                            })
                                          }
                                        >
                                          <MDBInput
                                            label={checkbox.label}
                                            filled
                                            type="checkbox"
                                            id={"checkbox" + i + "-" + k}
                                            checked={
                                              this.state[field.name]
                                                ? this.state[field.name][
                                                    checkbox.name
                                                  ]
                                                : false
                                            }
                                            name={checkbox.name}
                                            containerClass="checkbox-form mb-3"
                                          />
                                          <MDBMask></MDBMask>
                                        </MDBView>
                                      </MDBCol>
                                    );
                                  })}
                              </MDBRow>
                              <MDBBtn
                                color="green"
                                size="lg"
                                onClick={() => {
                                  // Check if at least one option was selected
                                  this.setState({
                                    selectedField: i + 1,
                                  });
                                }}
                              >
                                {field.button ? field.button : "Weiter"}
                              </MDBBtn>
                              {i > 0 && i <= questionnaire.fields.length && (
                                <span
                                  className="text-muted clickable d-block mt-5"
                                  onClick={() =>
                                    this.setState({
                                      selectedField: i - 1,
                                    })
                                  }
                                >
                                  <MDBIcon icon="angle-left" className="mr-1" />
                                  Zurück
                                </span>
                              )}
                            </>
                          )}
                        </div>
                      );
                      break;
                    default:
                      return null;
                  }
                })}
              {questionnaire &&
                this.state.selectedField === questionnaire.fields.length && (
                  <h2>Done</h2>
                )}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      );
    }
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    questionnaire: state.questionnaire.questionnaireResults,
    loading: state.questionnaire.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getQuestionnaire: (type) => dispatch(getQuestionnaire(type)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProfilePage));

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019-2020 Werbeagentur Christian Aichner
 */
