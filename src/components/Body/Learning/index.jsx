import React from "react";

Learning.propTypes = {};

function Learning(props) {
  return (
    <>
      <section className="home" id="home">
        <div className="home__container bd-container bd-grid">
          <div className="home__img">
            <img
              src="https://images.pexels.com/photos/5588490/pexels-photo-5588490.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />
          </div>

          <div className="home__data">
            <h1 className="home__title">Learning...</h1>
            <p className="home__description">
              Go from no-code to an in-demand junior web developer, at a
              fraction of the cost of a bootcamp. Start with the front-end by
              learning HTML, CSS, and JavaScript...
            </p>
            <a href="#" className="button">
              Get Started
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Learning;
