import React from "react";

Share.propTypes = {};

function Share() {
  return (
    <>
      <section className="share section bd-container" id="share">
        <div className="share__container bd-grid">
          <div className="share__data">
            <h2 className="section-title-center">Video</h2>
            <p className="share__description">
              Choose from 100,000 video online video courses with new additions
              published every month
            </p>
            <a href="/some/valid/uri#top#" className="button">
              Watching
            </a>
          </div>

          <div className="share__img">
            <img
              src={"https://images.pexels.com/photos/1181216/pexels-photo-1181216.jpeg?auto=compresscs=tinysrgb&dpr=2&h=750&w=1260"}
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Share;
