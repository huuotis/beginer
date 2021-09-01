import React from "react";

Workspace.propTypes = {};

function Workspace(props) {
  return (
    <>
      <section className="send section">
        <div className="send__container bd-container bd-grid">
          <div className="send__content">
            <h2 className="section-title-center send__title">Workspace</h2>
            <p className="send__description">
              Start giving away before the holidays are over. Write the home
              address of the person who will send the course.
            </p>
            <form action="">
              <div className="send__direction">
                <input
                  type="text"
                  placeholder="House address"
                  className="send__input"
                />
                <a href="#" className="button">
                  Send
                </a>
              </div>
            </form>
          </div>

          <div className="send__img">
            <img
              src="https://images.pexels.com/photos/389819/pexels-photo-389819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Workspace;
