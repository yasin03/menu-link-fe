import React from "react";

const InfoSection = () => {
  return (
    <>
      {/* Start Deafutl Info
    ============================================= */}
      <div
        className="default-info default-padding bottom-less bg-fixed"
        style={{ backgroundImage: "url(img/2440x1578.png)" }}
      >
        <div className="container">
          <div className="row">
            <div className="info-items text-center">
              {/* Single Item */}
              <div className="col-md-4 single-item">
                <div className="item">
                  <img src="assets/img/800x800.png" alt="Thumb" />
                  <h4>Party and Event</h4>
                  <p>
                    Belonging sir curiosity discovery extremity yet forfeited
                    prevailed own off. Travelling by introduced of mr
                    terminated.
                  </p>
                  <a className="btn circle btn-theme effect btn-sm" href="/">
                    Attend Now
                  </a>
                </div>
              </div>
              {/* End Single Item */}
              {/* Single Item */}
              <div className="col-md-4 single-item">
                <div className="item">
                  <img src="assets/img/800x800.png" alt="Thumb" />
                  <h4>Buffet</h4>
                  <p>
                    Belonging sir curiosity discovery extremity yet forfeited
                    prevailed own off. Travelling by introduced of mr
                    terminated.
                  </p>
                  <a className="btn circle btn-theme effect btn-sm" href="/">
                    Attend Now
                  </a>
                </div>
              </div>
              {/* End Single Item */}
              {/* Single Item */}
              <div className="col-md-4 single-item">
                <div className="item">
                  <img src="assets/img/800x800.png" alt="Thumb" />
                  <h4>Home Delivery</h4>
                  <p>
                    Belonging sir curiosity discovery extremity yet forfeited
                    prevailed own off. Travelling by introduced of mr
                    terminated.
                  </p>
                  <a className="btn circle btn-theme effect btn-sm" href="/">
                    Attend Now
                  </a>
                </div>
              </div>
              {/* End Single Item */}
            </div>
          </div>
        </div>
      </div>
      {/* End Default Info */}
    </>
  );
};

export default InfoSection;
