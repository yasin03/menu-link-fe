import React from "react";

const ContactPage = () => {
  return (
    <>
      {/* Start Contact 
    ============================================= */}
      <div className="contact-us-area default-padding">
        <div className="container">
          <div className="row">
            <div className="contact-box">
              {/* Start Form */}
              <div className="col-md-5 form-box">
                <div className="form-content">
                  <div className="heading">
                    <h3>Drop us a line</h3>
                  </div>
                  <form
                    action="assets/mail/contact.php"
                    method="POST"
                    className="contact-form"
                  >
                    <div className="col-md-12">
                      <div className="row">
                        <div className="form-group">
                          <input
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Name"
                            type="text"
                          />
                          <span className="alert-error" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Email*"
                            type="email"
                          />
                          <span className="alert-error" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            id="phone"
                            name="phone"
                            placeholder="Phone"
                            type="text"
                          />
                          <span className="alert-error" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="row">
                        <div className="form-group comments">
                          <textarea
                            className="form-control"
                            id="comments"
                            name="comments"
                            placeholder="Tell Us About Project *"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="row">
                        <button type="submit" name="submit" id="submit">
                          Send Message <i className="fa fa-paper-plane" />
                        </button>
                      </div>
                    </div>
                    {/* Alert Message */}
                    <div className="col-md-12 alert-notification">
                      <div id="message" className="alert-msg" />
                    </div>
                  </form>
                </div>
              </div>
              {/* End Form */}
              <div className="col-md-6 col-md-offset-1 info">
                <h2>Contact Us</h2>
                <p>
                  Often merit stuff first oh up hills as he. Servants contempt
                  as although addition dashwood is procured. Interest in
                  yourself an do of numerous feelings cheerful confined.
                </p>
                <div className="address-items">
                  <div className="row">
                    {/* Item */}
                    <div className="col-md-6 col-sm-6 equal-height">
                      <div className="item">
                        <div className="icon">
                          <i className="fas fa-map-marked-alt" />
                        </div>
                        <span>
                          22 Baker Street,
                          <br /> London, United Kingdom,
                          <br /> W1U 3BW
                        </span>
                      </div>
                    </div>
                    {/* End Item */}
                    {/* Item */}
                    <div className="col-md-6 col-sm-6 equal-height">
                      <div className="item">
                        <div className="icon">
                          <i className="fas fa-clock" />{" "}
                        </div>
                        <span>
                          info@yourdomain.com
                          <br />
                          admin@yourdomain.com
                        </span>
                      </div>
                    </div>
                    {/* End Item */}
                    {/* Item */}
                    <div className="col-md-6 col-sm-6 equal-height">
                      <div className="item">
                        <div className="icon">
                          <i className="fas fa-phone" />
                        </div>
                        <span>
                          +44-20-7328-4499 <br />
                          +99-34-8878-9989
                        </span>
                      </div>
                    </div>
                    {/* End Item */}
                    {/* Item */}
                    <div className="col-md-6 col-sm-6 equal-height">
                      <div className="item">
                        <div className="icon">
                          <i className="fas fa-envelope-open" />{" "}
                        </div>
                        <span>
                          info@yourdomain.com
                          <br />
                          admin@yourdomain.com
                        </span>
                      </div>
                    </div>
                    {/* End Item */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Contact */}
      {/* Start Google Maps 
    ============================================= */}
      <div className="maps-area">
        <div className="container-full">
          <div className="row">
            <div className="google-maps">
              <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14767.262289338461!2d70.79414485000001!3d22.284975!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1424308883981" />
            </div>
          </div>
        </div>
      </div>
      {/* End Google Maps */}
    </>
  );
};

export default ContactPage;
