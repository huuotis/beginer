import React from "react";

Products.propTypes = {};

function Products(props) {
  return (
    <>
      <section className="accessory section bd-container" id="accessory">
        <h2 className="section-title">
          Products <br />
          of Members
        </h2>

        <div className="accessory__container bd-grid">
          <div className="accessory__content">
            <img
              src="https://images.pexels.com/photos/583842/pexels-photo-583842.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
              className="accessory__img"
            />
            <h3 className="accessory__title">Iphone X</h3>
            <span className="accessory__category">Accessory</span>
            <span className="accessory__preci">$9.45</span>
            <a href="#" className="button accessory__button">
              <i className="bx bx-heart"></i>
            </a>
          </div>

          <div className="accessory__content">
            <img
              src="https://images.pexels.com/photos/1693627/pexels-photo-1693627.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
              className="accessory__img"
            />
            <h3 className="accessory__title">Iphone Pro 12</h3>
            <span className="accessory__category">Accessory</span>
            <span className="accessory__preci">$2.52</span>
            <a href="#" className="button accessory__button">
              <i className="bx bx-heart"></i>
            </a>
          </div>

          <div className="accessory__content">
            <img
              src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
              className="accessory__img"
            />
            <h3 className="accessory__title">Nokia</h3>
            <span className="accessory__category">Accessory</span>
            <span className="accessory__preci">$13.15</span>
            <a href="#" className="button accessory__button">
              <i className="bx bx-heart"></i>
            </a>
          </div>

          <div className="accessory__content">
            <img
              src="https://images.pexels.com/photos/583847/pexels-photo-583847.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
              className="accessory__img"
            />
            <h3 className="accessory__title">Macbook</h3>
            <span className="accessory__category">Accessory</span>
            <span className="accessory__preci">$800</span>
            <a href="#" className="button accessory__button">
              <i className="bx bx-heart"></i>
            </a>
          </div>

          <div className="accessory__content">
            <img
              src="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260assets/img/accessory5.png"
              alt=""
              className="accessory__img"
            />
            <h3 className="accessory__title">Macbook Pro</h3>
            <span className="accessory__category">Accessory</span>
            <span className="accessory__preci">$1000</span>
            <a href="#" className="button accessory__button">
              <i className="bx bx-heart"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
