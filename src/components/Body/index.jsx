import React from "react";
import Learning from "./Learning";
import Share from "./Share";
import Courses from "./Courses";
import Products from "./Products";
import Workspace from "./Workspace";

Body.propTypes = {};

function Body(props) {
  return (
    <>
      <main className="l-main">
        <Learning />
        <Share />
        <Courses />
        <Products />
        <Workspace />
      </main>
    </>
  );
}

export default Body;
