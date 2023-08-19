import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start bg-white text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between border-bottom"></section>
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3 text-secondary" />
                  BlueStone
                </h6>
                <p>
                  BlueStone Jewellers always appreciated by its valuable and
                  loyal customers and is recognized in overseas exhibitions.
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">T&C</h6>
                <p>
                  <Link to="/privacy/shipping" className="text-reset">
                    Shipping Policy
                  </Link>
                </p>
                <p>
                  <Link to="/privacy/policy" className="text-reset">
                    Privacy Policy
                  </Link>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <Link to="/contactus" className="text-reset">
                    Contact Us
                  </Link>
                </p>
                <p>
                  <Link to="/aboutus" className="text-reset">
                    About Us
                  </Link>
                </p>
                <p>
                  <Link to="/orderhistory" className="text-reset">
                    Orders
                  </Link>
                </p>
                <p>
                  <Link to="/profile" className="text-reset">
                    Account
                  </Link>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3 text-secondary" /> Mumbai,
                  Maharashtra
                </p>
                <p>
                  <i className="fas fa-envelope me-3 text-secondary" />
                  info@example.com
                </p>
                <p>
                  <i className="fas fa-phone me-3 text-secondary" /> +91
                  8830711743
                </p>
                <p>
                  <i className="fas fa-print me-3 text-secondary" /> +91
                  8830711744
                </p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}
        {/* Copyright */}
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}
        >
          © 2021 Copyright: BlueStone
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </>
  );
};
