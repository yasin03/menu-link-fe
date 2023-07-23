import React from "react";

const Banner = () => {
  return (
    <>
      {/* Start Banner 
    ============================================= */}
      <div
        className="banner-area responsive-auto-height ds-fonts text-light video-bg-live bg-fixed"
        style={{ backgroundImage: "url(img/2440x1578.png)" }}
      >
        <div
          className="player"
          data-property="{videoURL:'https://www.youtube.com/watch?v=hoiGV-N-2Gs',containment:'.video-bg-live', showControls:false, autoPlay:true, zoom:0, loop:true, mute:true, startAt:5, opacity:1, quality:'default'}"
        />
        <div
          id="bootcarousel"
          className="carousel transparent-nav slide carousel-fade animate_text"
          data-ride="carousel"
        >
          {/* Wrapper for slides */}
          <div className="carousel-inner shadow dark">
            <div className="item active">
              <div className="box-table">
                <div className="box-cell">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-8">
                        <div className="content">
                          <h2 data-animation="animated fadeInUp">Buffet</h2>
                          <h1 data-animation="animated slideInLeft">
                            Official Packages
                          </h1>
                          <div
                            className="lists"
                            data-animation="animated slideInUp"
                          >
                            <ul>
                              <li>
                                <i className="flaticon-hamburger" /> 40 Food
                              </li>
                              <li>
                                <i className="flaticon-champagne-glass" /> 19
                                Drinks
                              </li>
                              <li>
                                <i className="flaticon-coffee-cup" /> 28 Soup
                              </li>
                            </ul>
                          </div>
                          <a
                            data-animation="animated slideInUp"
                            className="btn btn-theme effect btn-md"
                            href="/"
                          >
                            Order Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="box-table">
                <div className="box-cell">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-8">
                        <div className="content">
                          <h2 data-animation="animated fadeInUp">Buffet</h2>
                          <h1 data-animation="animated slideInLeft">
                            Student Packages
                          </h1>
                          <div
                            className="lists"
                            data-animation="animated slideInUp"
                          >
                            <ul>
                              <li>
                                <i className="flaticon-hamburger" /> 40 Food
                              </li>
                              <li>
                                <i className="flaticon-champagne-glass" /> 19
                                Drinks
                              </li>
                              <li>
                                <i className="flaticon-coffee-cup" /> 28 Soup
                              </li>
                            </ul>
                          </div>
                          <a
                            data-animation="animated slideInUp"
                            className="btn btn-theme effect btn-md"
                            href="/"
                          >
                            Order Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="box-table">
                <div className="box-cell">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-8">
                        <div className="content">
                          <h2 data-animation="animated fadeInUp">Buffet</h2>
                          <h1 data-animation="animated slideInLeft">
                            Family Packages
                          </h1>
                          <div
                            className="lists"
                            data-animation="animated slideInUp"
                          >
                            <ul>
                              <li>
                                <i className="flaticon-hamburger" /> 40 Food
                              </li>
                              <li>
                                <i className="flaticon-champagne-glass" /> 19
                                Drinks
                              </li>
                              <li>
                                <i className="flaticon-coffee-cup" /> 28 Soup
                              </li>
                            </ul>
                          </div>
                          <a
                            data-animation="animated slideInUp"
                            className="btn btn-theme effect btn-md"
                            href="/"
                          >
                            Order Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Wrapper for slides */}
          {/* Left and right controls */}
          <a
            className="left carousel-control"
            href="#bootcarousel"
            data-slide="prev"
          >
            <i className="fa fa-angle-left" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="right carousel-control"
            href="#bootcarousel"
            data-slide="next"
          >
            <i className="fa fa-angle-right" />
            <span className="sr-only">Next</span>
          </a>
        </div>
        {/* Shape */}
        <div className="wavesshape">
          <img src="img/shape.png" alt="Shape" />
        </div>
        {/* Shape */}
      </div>
      {/* End Banner */}
    </>
  );
};

export default Banner;
