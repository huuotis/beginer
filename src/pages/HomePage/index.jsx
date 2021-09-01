import React from "react";
import Header from "../../components/Header";
import Body from "../../components/Body";
import Footer from "../../components/Footer";
import sr from "../../ScrollReveal";

export class HomePage extends React.Component {
  componentDidMount = () => {
    const config = {
      distance: "30px",
      duration: 1800,
      reset: true
    }
    sr.reveal(
      `.home__data, .home__img, 
               .decoration__data,
               .accessory__content,
               .footer__content`,
      {
        ...config,
        origin: "top",
        interval: 200
      }
    );
    sr.reveal(`.share__img, .send__content`, {
      ...config,
      origin: "left",
    });
    sr.reveal(`.share__data, .send__img`, {
      ...config,
      origin: "right"
    })
  }
  render() {
    return (
      <>
        <Header />
        <Body />
        <Footer />
      </>
    );
  }
}

export default HomePage;