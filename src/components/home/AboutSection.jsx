import React from "react";

const AboutSection = () => {
  return (
    <>
      {/* Start About
    ============================================= */}
      <div className="about-area default-padding">
        <div className="container">
          <div className="row">
            <div className="about-items">
              <div className="col-md-7 info">
                <h3>Our Story</h3>
                <h2>
                  Until I discovered cooking I was never
                  <br /> really interested in anything
                </h2>
                <p>
                  Pleased anxious or as in by viewing forbade minutes prevent.
                  Too leave had those get being led weeks blind. Had men rose
                  from down lady able. Its son him ferrars proceed six parlors.
                </p>
                <p>
                  Advanced diverted domestic sex repeated bringing you old.
                  Possible procured her trifling laughter thoughts property she
                  met way. Companions shy had solicitude favourable own. Which
                  could saw guest man now heard but. Lasted my coming uneasy
                  marked so should. Gravity letters it amongst herself dearest
                  an windows by. Wooded ladies she basket.
                </p>
                <ul>
                  <li>
                    <div className="icon">
                      <i className="fas fa-phone" />
                    </div>
                    <div className="info">
                      <h4>Phone</h4>
                      <span>+123 456 7890</span>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fas fa-envelope-open" />
                    </div>
                    <div className="info">
                      <h4>Eamil</h4>
                      <span>support@restcafe.com</span>
                    </div>
                  </li>
                </ul>
              </div>
              {/* Start Form */}
              <div className="col-md-5 form">
                <div className="form-box">
                  <div className="icon">
                    <i className="fas fa-utensils" />
                  </div>
                  <h3>Book a table</h3>
                  <form action="#">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Name"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Email"
                            type="email"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <select>
                            <option value={1}>1 Person</option>
                            <option value={2}>2 Person</option>
                            <option value={4}>3 Person</option>
                            <option value={5}>4 Person</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            id="date"
                            name="date"
                            placeholder="Date"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <button type="submit" name="submit" id="submit">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* End Form */}
            </div>
          </div>
        </div>
      </div>
      {/* End About */}
    </>
  );
};

export default AboutSection;
