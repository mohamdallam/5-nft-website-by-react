import "./header.css";
import React, { useRef, useEffect } from "react";
import { Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

const NAV__LINKS = [
  {
    display: "home",
    url: "/home",
  },

  {
    display: "Market",
    url: "/market",
  },

  {
    display: "Create",
    url: "/create",
  },

  {
    display: "Contact",
    url: "/contact",
  },
];

const Header = () => {
  // const headerRef = useRef(null);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (
  //       document.body.scrollTop > 80 ||
  //       document.documentElement.scrollTop > 80
  //     ) {
  //       headerRef.current.classList.add("header__shrink");
  //     } else {
  //       headerRef.current.classList.remove("header__shrink");
  //     }
  //   });

  //   return () => {
  //     window.removeEventListener("scroll");
  //   };
  // }, []);

  return (
    <header className="header">
      <Container>
        <div className="navigation">
          {/* LOGO */}
          <div className="logo">
            <h2 className="d-flex gap-2 align-items-center">
              <span>
                <i class="ri-fire-fill"></i>
              </span>
              NFTs
            </h2>
          </div>

          {/* Nav Link */}
          <div className="nav__menu">
            <div className="nav__list">
              {NAV__LINKS.map((item, index) => (
                <li className="nav__item" key={index}>
                  <NavLink
                    to={item.url}
                    className={(navClass) =>
                      navClass.isActive ? "active" : ""
                    }
                  >
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </div>
          </div>

          {/* Nav Right */}
          <div className="nav__right d-flex align-items-center gap-5">
            <button className="btn  d-flex align-items-center gap-2">
              <span>
                <i class="ri-wallet-line"></i>
              </span>
              <Link to={"/wallet"}>Connect Wallet</Link>
            </button>

            <span className="mobile__menu">
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
