import React from "react";
import { DebounceInput } from "react-debounce-input";

// TODO:: Can be removed just for better UI
const divStyle = {
  marginTop: "40px"
};

const UserSkills = (props) => {
  return (
  <section>
    <div style={divStyle}>
      <span>Add User Proficient Skills</span>
      <DebounceInput
        minLength={2}
        debounceTimeout={300}
        onChange={event => props.skillChangeHandler(event.target.value)}
      />
    </div>
    <div>
      <p>User Skills :: </p>
      <ul>
        {props.proficentSkills &&
          props.proficentSkills.map((value, index) => {
            return <li key={index}>{value}</li>;
          })}
      </ul>
    </div>
  </section>
)
};

const MemoizedUserSkills = React.memo(UserSkills);
export default MemoizedUserSkills;
