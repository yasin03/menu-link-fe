import React from "react";

const Footer = () => {
  return (
    <>
      {/* Start Footer 
    ============================================= */}
      <footer className="bg-dark">
        <div className="container">
          <div className="row">
            <div className="f-items col-4 title-effect text-light default-padding">
              {/* Single Item */}
              <div className="col-md-3 col-sm-6  equal-height item">
                <div className="f-item address">
                  <img src="assets/img/logo-light.png" alt="Logo" />
                  <p>
                    20, floor, Queenslad Victoria Building. 60 california street
                    california USA
                  </p>
                  <ul>
                    <li>
                      <span>Phone: </span> +123 456 7890
                    </li>
                    <li>
                      <span>Email: </span>{" "}
                      <a href="mailto:support@validtheme.com">
                        support@validtheme.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* End Single Item */}
              {/* Single Item */}
              <div className="col-md-3 col-sm-6  equal-height item">
                <div className="f-item link">
                  <h4>Food Menu</h4>
                  <ul>
                    <li>
                      <a href="/">Chees croissants</a>
                    </li>
                    <li>
                      <a href="/">Bruschetti</a>
                    </li>
                    <li>
                      <a href="/">Awesome Vegetables</a>
                    </li>
                    <li>
                      <a href="/">Tasty Snacks</a>
                    </li>
                    <li>
                      <a href="/">Meal for whole family</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* End Single Item */}
              {/* Single Item */}
              <div className="col-md-3 col-sm-6  equal-height item">
                <div className="f-item inst-feed">
                  <h4>Instagram Feed</h4>
                  <ul>
                    <li>
                      <a href="/">
                        <img src="assets/img/800x800.png" alt="thumb" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img src="assets/img/800x800.png" alt="thumb" />
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <img src="assets/img/800x800.png" alt="thumb" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img src="assets/img/800x800.png" alt="thumb" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img src="assets/img/800x800.png" alt="thumb" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img src="assets/img/800x800.png" alt="thumb" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* End Single Item */}
              {/* Single Item */}
              <div className="col-md-3 col-sm-6 equal-height item">
                <div className="f-item opening-hours">
                  <h4>Opening Hours</h4>
                  <ul>
                    <li>
                      <span> Mon - Tues :</span>
                      <div className="pull-right"> 6.00 am - 10.00 pm </div>
                    </li>
                    <li>
                      <span> Wednes - Thurs :</span>
                      <div className="pull-right"> 8.00 am - 6.00 pm </div>
                    </li>
                    <li>
                      <span> Launch :</span>
                      <div className="pull-right"> Everyday </div>
                    </li>
                    <li>
                      <span> Sun : </span>
                      <div className="pull-right closed"> Closed </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* End Single Item */}
            </div>
          </div>
        </div>
        {/* Start Footer Bottom */}
        <div className="footer-bottom bg-dark text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p>
                  © Copyright 2019. All Rights Reserved by{" "}
                  <a href="/">validthemes</a>
                </p>
              </div>
              <div className="col-md-6 text-right link">
                <ul>
                  <li>
                    <a href="/">Terms of user</a>
                  </li>
                  <li>
                    <a href="/">License</a>
                  </li>
                  <li>
                    <a href="/">Support</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* End Footer Bottom */}
      </footer>
      {/* End Footer */}
    </>
  );
};

export default Footer;
