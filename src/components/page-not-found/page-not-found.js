import React from "react";

const PageNotFound = () => {
  return <h1 style={{ textAlign: "center" }}>Page not found</h1>;
};

/* 
  Using react memo to avoid unnecessary rendering when parent component rerenders 
  and nothing updated for this component
*/
const MemoizedPageNotFound = React.memo(PageNotFound);
export default MemoizedPageNotFound;
