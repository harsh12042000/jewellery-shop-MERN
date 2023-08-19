import React from "react";

const gallery = () => {
  return (
    <div className="container gallery">
      <div
        id="carouselExampleControls"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="card-wrapper container-sm d-flex  justify-content-around">
              <div className="card  " style={{ width: "18rem" }}>
                <img
                  src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwb71d1052/images/hi-res/50O3UN2CHABA32_1.jpg?sw=640&sh=640"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src = "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwa29377ec/images/hi-res/50O3UN1ARABA09_1.jpg?sw=640&sh=640"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwbc9a6e5e/images/hi-res/50O3UN2CEABA32_1.jpg?sw=640&sh=640"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw947f6f9f/images/hi-res/51W2A1DCSABAP3.jpg?sw=640&sh=640"
                  className="card-img-top"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card-wrapper container-sm d-flex  justify-content-around">
              <div className="card  " style={{ width: "18rem" }}>
                <img
                  src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwcc037384/images/hi-res/50O3UNSANABA09_1.jpg?sw=640&sh=640"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwc47a2b3b/images/hi-res/50O3UNSBJABA09_1.jpg?sw=640&sh=640"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw8c245b42/images/hi-res/50O3UN1BXABA09_1.jpg?sw=640&sh=640"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src="https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw57c3e329/images/hi-res/50O3UN2AYABA09_1.jpg?sw=640&sh=640"
                  className="card-img-top"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default gallery;
