import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import {
  ADD_HOBBY,
  ADD_SKILL,
  GET_USER_DETAILS
} from "../../store/dashboard/dashboard.const";

import UserHobbies from "./components/user-hobbies/user-hobbies";
import UserSkills from "./components/user-skills/user-skills";

class Dashboard extends Component {
  newSkill = null;
  newHobby = null;
  componentDidMount() {
    this.props.getUserDetails();
  }

  hobbieChangeHandler = value => {
    this.newHobby = value;
  };

  skillChangeHandler = value => {
    this.newSkill = value;
  };

  render() {
    return (
      <Fragment>
        <div>
          <h2>The Logged In User - {this.props.name}</h2>
        </div>
        <UserHobbies
          hobbies={this.props.hobbies}
          hobbieChangeHandler={this.hobbieChangeHandler}
        />
        <UserSkills
          proficentSkills={this.props.proficentSkills}
          skillChangeHandler={this.skillChangeHandler}
        />
        <section id="dashboard-footer">
          <button onClick={() => this.props.addNewHobbie(this.newHobby)}>
            Add New Hobbie
          </button>
          <button onClick={() => this.props.addNewSkill(this.newSkill)}>
            Add New Skill
          </button>
        </section>
      </Fragment>
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
