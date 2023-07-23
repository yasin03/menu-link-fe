import React from "react";

const LoginPage = () => {
  return (
    <>
      {/* Start Reservation
    ============================================= */}
      <div className="bg-danger ">
        <div className="reservation about-area default-padding">
          <div className="container ">
            <div className="row">
              <div className="reservation-items about-items">
                <div className="col-md-7 info">
                  <h2>How do i make raservations</h2>
                  <p>
                    Pleased anxious or as in by viewing forbade minutes prevent.
                    Too leave had those get being led weeks blind. Had men rose
                    from down lady able. Its son him ferrars proceed six
                    parlors.
                  </p>
                  <p>
                    Advanced diverted domestic sex repeated bringing you old.
                    Possible procured her trifling laughter thoughts property
                    she met way. Companions shy had solicitude favourable own.
                    Which could saw guest man now heard but. Lasted my coming
                    uneasy marked so should. Gravity letters it amongst herself
                    dearest an windows by. Wooded ladies she basket.
                  </p>
                  <div className="address">
                    <ul>
                      <li>
                        <span>Address</span>
                        <p>22 Baker Street, London, United Kingdom, W1U 3BW</p>
                      </li>
                      <li>
                        <span>Phone</span>
                        <p>+123 456 7890</p>
                      </li>
                      <li>
                        <span>Email</span>
                        <p>support@restcafe.com</p>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-5 form">
                  <div className="form-box">
                    <div className="icon">
                      <i className="fa fa-address-book" />
                    </div>
                    <h3>GİRİŞ SAYFASI</h3>
                    <form action="#">
                      <div className="row">
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
                            <input
                              className="form-control"
                              id="password"
                              name="password"
                              placeholder="Password"
                              type="password"
                            />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <button type="submit" name="submit" id="submit">
                            GİRİŞ YAP
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Reservation */}
    </>
  );
};

export default LoginPage;
