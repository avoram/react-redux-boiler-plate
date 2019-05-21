import React, { Component } from "react";
import { connect } from "react-redux";
import { DebounceInput } from "react-debounce-input";

import {
  CHANGE_USER,
  ADD_HOBBY,
  ADD_SKILL,
  GET_USER_DETAILS
} from "../../store/dashboard/dashboard.const";

// TODO:: Can be removed just for better UI
const divStyle = {
  marginTop: "40px"
};

class Dashboard extends Component {
  // TODO:: Define class variable one way of defining local variable
  //   newSkill = null;
  //   newHobby = null;

  // Defining local state
  state = {
    newSkill: "",
    newHobby: ""
  };
  componentDidMount() {
    this.props.getUserDetails();
  }

  hobbieChangeHandler = value => {
    // TODO:: Can be removed just for better UI

    // One way of doing
    // this.newHobby = value;

    this.setState({ newHobby: value });
  };

  skillChangeHandler = value => {
    // this.newSkill = value;
    this.setState({ newSkill: value });
  };

  render() {
    return (
      <section>
        <div>
          <h1>The Logged In User - {this.props.name}</h1>
          <button onClick={this.props.changeUserName}>Change User Name</button>
        </div>
        <div style={divStyle}>
          <span>Add User Hobbies</span>
          <DebounceInput
            minLength={2}
            debounceTimeout={300}
            onChange={event => this.hobbieChangeHandler(event.target.value)}
          />
        </div>
        <div>
          <p>User Hobbies :: </p>
          <ul>
            {this.props.hobbies.map((value, index) => {
              return <li key={index}>{value}</li>;
            })}
          </ul>
        </div>

        <div style={divStyle}>
          <span>Add User Proficient Skills</span>
          <DebounceInput
            minLength={2}
            debounceTimeout={300}
            onChange={event => this.skillChangeHandler(event.target.value)}
          />
        </div>
        <div>
          <p>User Skills :: </p>
            <ul>
              {this.props.proficentSkills && this.props.proficentSkills.map((value, index) => {
                return <li key={index}>{value}</li>;
              })}
            </ul>
        </div>

        <button onClick={() => this.props.addNewHobbie(this.state.newHobby)}>
          Add New Hobbie
        </button>
        <button onClick={() => this.props.addNewSkill(this.state.newSkill)}>
          Add New Skill
        </button>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    name: state.dashboardReducer.data.name,
    hobbies: state.dashboardReducer.data.hobbies,
    proficentSkills: state.dashboardReducer.data.skills.proficient
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserDetails: () => {
      dispatch({ type: GET_USER_DETAILS });
    },
    changeUserName: () => {
      dispatch({ type: CHANGE_USER });
    },
    addNewHobbie: data => {
      dispatch({ type: ADD_HOBBY, payload: data });
    },
    addNewSkill: data => {
      dispatch({ type: ADD_SKILL, payload: data });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
