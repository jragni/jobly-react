import React from "react";

function Homepage() {
  function showUserLoggedInView(props) {
    return <div className="isLoggedIn"></div>;
  }

  function showUserNotLoggedInView(props) {
    return (
      <div className="isNotLoggedIn">
        <h1>
          <strong>Jobly</strong>
        </h1>
        <h4 className="text-muted">All the jobs. One convenient place.</h4>
      </div>
    );
  }

  return (
    <div className="Homepage">
      {/* Will add authentication layer after */}
      {true ? showUserNotLoggedInView() : showUserLoggedInView()}
    </div>
  );
}

export default Homepage;
