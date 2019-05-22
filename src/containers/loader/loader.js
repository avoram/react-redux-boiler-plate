import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import "./loader.css";

class Loader extends Component {
  render() {
    return (
      <Fragment>
        {this.props.showLoader ? (
          <div className="spinner">
            <div className="loader-outer">
              <div className="loader-inner" />
            </div>
          </div>
        ) : null}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    showLoader: state.loaderReducer.showLoader
  };
};

export default connect(mapStateToProps)(Loader);
