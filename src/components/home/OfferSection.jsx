import React from "react";

const OfferSection = () => {
  return (
    <>
      {/* Start Offer
    ============================================= */}
      <div className="offer-area">
        <div className="container-full">
          <div className="row">
            <div className="offer-items offer-carousel owl-carousel owl-theme">
              {/* Single Item */}
              <div className="item">
                <div
                  className="col-md-6 thumb bg-cover"
                  style={{ backgroundImage: "url(assets/img/2440x1578.png)" }}
                >
                  <div className="price">
                    <h4>
                      Price <span>$63</span>
                    </h4>
                  </div>
                </div>
                <div className="col-md-6 info">
                  <h3>Special Offer</h3>
                  <h2>Famirly Party</h2>
                  <span>Fried Chicken / Gordita Crunch / Pizza / Burger</span>
                  <p>
                    Frankness applauded by supported ye household. Collected
                    favourite now for for and rapturous repulsive consulted. An
                    seems green be wrote again. She add what own only like.
                    Tolerably we as extremity exquisite do commanded. Doubtful
                    offended do entrance of landlord moreover is mistress in.
                    Nay was appear entire ladies. Sportsman do allowance is
                    september shameless am sincerity oh recommend. Gate tell man
                    day that who.
                  </p>
                  <a className="btn btn-dark border btn-md" href="/">
                    Book a table
                  </a>
                </div>
              </div>
              {/* End Single Item */}
              {/* Single Item */}
              <div className="item">
                <div
                  className="col-md-6 thumb bg-cover"
                  style={{ backgroundImage: "url(assets/img/2440x1578.png)" }}
                >
                  <div className="price">
                    <h4>
                      Price <span>$78</span>
                    </h4>
                  </div>
                </div>
                <div className="col-md-6 info">
                  <h3>Special Offer</h3>
                  <h2>Birthday Party</h2>
                  <span>Fried Chicken / Gordita Crunch / Pizza / Burger</span>
                  <p>
                    Frankness applauded by supported ye household. Collected
                    favourite now for for and rapturous repulsive consulted. An
                    seems green be wrote again. She add what own only like.
                    Tolerably we as extremity exquisite do commanded. Doubtful
                    offended do entrance of landlord moreover is mistress in.
                    Nay was appear entire ladies. Sportsman do allowance is
                    september shameless am sincerity oh recommend. Gate tell man
                    day that who.
                  </p>
                  <a className="btn btn-dark border btn-md" href="/">
                    Book a table
                  </a>
                </div>
              </div>
              {/* End Single Item */}
            </div>
          </div>
        </div>
      </div>
      {/* End Offer */}
    </>
  );
};

export default OfferSection;
