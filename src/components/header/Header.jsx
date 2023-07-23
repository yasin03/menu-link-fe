import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* Preloader Start */}
      <div className="se-pre-con" />
      {/* Preloader Ends */}
      {/* Header 
    ============================================= */}
      <header id="home">
        {/* Start Navigation */}
        <nav className="navbar navbar-default navbar-fixed navbar-transparent dark bootsnav shadow-less">
          <div className="container">
            <div class="attr-nav">
              <ul>
                <li class="side-menu">
                  <Link
                    data-animation="animated slideInUp"
                    className="btn btn-theme effect btn-md"
                    to="/login"
                  >
                    Giriş Yap
                  </Link>
                </li>
              </ul>
            </div>
            {/* Start Header Navigation */}
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar-menu"
              >
                <i className="fa fa-bars" />
              </button>
              <a className="navbar-brand" href="index.html">
                <img
                  src="assets/img/logo-light.png"
                  className="logo logo-display"
                  alt="Logo"
                />
                <img
                  src="assets/img/logo.png"
                  className="logo logo-scrolled"
                  alt="Logo"
                />
              </a>
            </div>
            {/* End Header Navigation */}
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse" id="navbar-menu">
              <ul
                className="nav navbar-nav navbar-right"
                data-in="#"
                data-out="#"
              >
                <li className="dropdown">
                  <a href="/">Ana Sayfa</a>
                </li>
                <li className="dropdown">
                  <a href="/">Hakkımızda</a>
                </li>
                <li className="dropdown">
                  <a href="/">Referanslar</a>
                </li>
                <li>
                  <Link to="/contact">İletişim</Link>
                </li>
              </ul>
            </div>
            {/* /.navbar-collapse */}
          </div>
        </nav>
        {/* End Navigation */}
      </header>
      {/* End Header */}
    </>
  );
};

export default Header;
