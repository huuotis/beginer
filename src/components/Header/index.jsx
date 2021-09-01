import React from "react";

Header.propTypes = {};

const handleClickThemeButton = () => {
  const themeButton = document.getElementById("theme-button");
  const darkTheme = "dark-theme";
  const iconTheme = "bx-toggle-right";
  const selectedTheme = localStorage.getItem("selected-theme");
  const selectedIcon = localStorage.getItem("selected-icon");

  const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light";
  const getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme)
      ? "bx-toggle-left"
      : "bx-toggle-right";

  if (selectedTheme) {
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
      darkTheme
    );
    themeButton.classList[selectedIcon === "bx-toggle-left" ? "add" : "remove"](
      iconTheme
    );
  }

  themeButton.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
  });
}

const navList = [
  {
    title: "Home",
    href: "home",
  },
  {
    title: "Video",
    href: "share",
  },
  {
    title: "Courses",
    href: "decoration",
  },
  {
    title: "Products",
    href: "accessory"
  },
]

const handleClickNavToggle =() => {
  const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);
  
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("show-menu");
      });
    }
  };
  
  showMenu("nav-toggle", "nav-menu");
}

function Header(props) {
  return (
    <>
      <header className="l-header" id="header">
        <nav className="nav bd-container">
          <a href="/some/valid/uri#top#" className="nav__logo">
            CSS TUTORIAL CHANNEL
          </a>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              {navList.map((navItem, index) => {
                return (
                  <li className="nav__item" key={index}>
                    <a href={`#${navItem.href}`} className="nav__link">
                      {navItem.title}
                    </a>
                  </li>
                )
              })}
              <li>
                <i
                  onClick={handleClickThemeButton}
                  className="bx bx-toggle-left change-theme"
                  id="theme-button"
                ></i>
              </li>
            </ul>
          </div>

          <div className="nav__toggle" id="nav-toggle" onClick={handleClickNavToggle}>
            <i className="bx bx-grid-alt"></i>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
