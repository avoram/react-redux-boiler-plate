import React from "react";
import { DebounceInput } from "react-debounce-input";

// TODO:: Can be removed just for better UI
const divStyle = {
  marginTop: "40px"
};

const UserHobbies = props => {
  return (
    <section>
      <div style={divStyle}>
        <span>Add User Hobbies</span>
        <DebounceInput
          minLength={2}
          debounceTimeout={300}
          onChange={event => props.hobbieChangeHandler(event.target.value)}
        />
      </div>
      <div>
        <p>User Hobbies :: </p>
        <ul>
          {props.hobbies.map((value, index) => {
            return <li key={index}>{value}</li>;
          })}
        </ul>
      </div>
    </section>
  );
};

/* 
  Using react memo to avoid unnecessary rendering when parent component rerenders 
  and nothing updated for this component
*/
const MemoizedUserHobbies = React.memo(UserHobbies);
export default MemoizedUserHobbies;

