import React, { Component } from "react";
import { connect } from "react-redux";

import {
  CHANGE_USER,
  ADD_HOBBY,
  ADD_SKILL,
  GET_USER_DETAILS
} from "../../store/dashboard/dashboard.const";

import UserHobbies from "../../components/user-hobbies/user-hobbies";
import UserSkills from "../../components/user-skills/user-skills";

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
          <UserHobbies
            hobbies={this.props.hobbies}
            hobbieChangeHandler={value => this.hobbieChangeHandler(value)}
          />
          <UserSkills
            proficentSkills={this.props.proficentSkills}
            skillChangeHandler={value => this.skillChangeHandler(value)}
          />

        <section id="dashboard-footer">
          <button onClick={() => this.props.addNewHobbie(this.state.newHobby)}>
            Add New Hobbie
          </button>
          <button onClick={() => this.props.addNewSkill(this.state.newSkill)}>
            Add New Skill
          </button>
        </section>
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
