import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import styled from 'styled-components';

import * as dashboardActions from "./dashboard.actions";
import UserHobbies from "./user-hobbies/user-hobbies";
import UserSkills from "./user-skills/user-skills";
import ErrorBoundary from "../../containers/error-boundary/error-boundary";

const DashboardContainer = styled.div`
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: red;
    border: thin solid #adadad;
`;

class Dashboard extends Component {
  newSkill = null;
  newHobby = null;
  componentDidMount() {
    console.log('this.props ', this.props)
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
        <DashboardContainer>
        <div>
          <h2>This style is using a styled component</h2>
          <h3>The Logged In User - {this.props.name}</h3>
        </div>
        </DashboardContainer>
       
        <ErrorBoundary>
          <UserHobbies
            hobbies={this.props.hobbies}
            hobbieChangeHandler={this.hobbieChangeHandler}
          />
        </ErrorBoundary>

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
      dispatch(dashboardActions.getUserDetails());
    },
    addNewHobbie: data => {
      dispatch(dashboardActions.addHobby(data));
    },
    addNewSkill: data => {
      dispatch(dashboardActions.addSkill(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
