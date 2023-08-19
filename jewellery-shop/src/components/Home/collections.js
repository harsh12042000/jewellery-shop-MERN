import React from "react";

const Collections = () => {
  return (
    // Popular Collections
    <div className="container">
      <div className="row ">
        <div className="col-sm-6 col-lg-3 d-flex align-items-center justify-content-center mb-10">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  className="img_avatar"
                  src={process.env.PUBLIC_URL + '/assets/images/collection-01.jpg'}
                  alt="Avatar"
                />
              </div>
              <div className="flip-card-back bg-light d-flex flex-column align-items-center justify-content-center">
                <h1>Gold Collection</h1>
                <img
                  src={process.env.PUBLIC_URL + '/assets/images/line_star.png'}
                  alt="Line Star"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 d-flex align-items-center justify-content-center">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  className="img_avatar"
                  src={process.env.PUBLIC_URL + '/assets/images/collection-02.jpg'}
                  alt="Avatar"
                />
              </div>
              <div className="flip-card-back bg-light d-flex flex-column align-items-center justify-content-center">
                <h1>Diamond Collection</h1>
                <img
                  src={process.env.PUBLIC_URL + '/assets/images/line_star.png'}
                  alt="Line Star"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 d-flex align-items-center justify-content-center">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  className="img_avatar"
                  src={process.env.PUBLIC_URL + '/assets/images/collection-03.jpg'}
                  alt="Avatar"
                />
              </div>
              <div className="flip-card-back bg-light d-flex flex-column align-items-center justify-content-center">
                <h1>Polki</h1>
                <img
                  src={process.env.PUBLIC_URL + '/assets/images/line_star.png'}
                  alt="Line Star"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3 d-flex align-items-center justify-content-center">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  className="img_avatar"
                  src={process.env.PUBLIC_URL + '/assets/images/collection-04.jpg'}
                  alt="Avatar"
                />
              </div>
              <div className="flip-card-back bg-light d-flex flex-column align-items-center justify-content-center">
                <h1>Baby Collection</h1>
                <img
                  src={process.env.PUBLIC_URL + '/assets/images/line_star.png'}
                  alt="Line Star"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
