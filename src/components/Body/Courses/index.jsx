import React from "react";

Courses.propTypes = {};

function Courses(props) {
  return (
    <>
      <section
        className="decoration section bd-container show-menu"
        id="decoration"
      >
        <h2 className="section-title">
          Give HTML, CSS, JS <br />
          Courses
        </h2>
        <div className="decoration__container bd-grid">
          <div className="decoration__data">
            <img
              src="https://www.inithtml.com/wp-content/uploads/2017/04/html.jpg"
              alt=""
              className="decoration__img"
            />
            <h3 className="decoration__title">HTML</h3>
            <a href="/some/valid/uri#top#" className="button button-link">
              Go Course
            </a>
          </div>

          <div className="decoration__data">
            <img
              src="https://www.dammio.com/wp-content/uploads/2019/08/CSS3.png"
              alt=""
              className="decoration__img"
            />
            <h3 className="decoration__title">CSS</h3>
            <a href="/some/valid/uri#top#" className="button button-link">
              Go Course
            </a>
          </div>

          <div className="decoration__data">
            <img
              src="https://cafedev.vn/wp-content/uploads/2019/12/cafedev_javascript.png"
              alt=""
              className="decoration__img"
            />
            <h3 className="decoration__title">JAVASCRIPT</h3>
            <a href="/some/valid/uri#top#" className="button button-link">
              Go Course
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Courses;
