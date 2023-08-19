import React from "react";

const testimonials = () => {
  return (
    <div className="container">
      <section>
        <div className="row">
          <div className="col-md-4 mb-5 mb-md-0">
            <div className="d-flex justify-content-center mb-4">
              <img
                src={process.env.PUBLIC_URL + '/assets/images/testi-01.png'}
                className="rounded-circle shadow-1-strong"
                width={150}
                height={150}
              />
            </div>
            <h5 className="mb-3">Shreyasi Dutta</h5>
            <h6 className="text-primary mb-3">Diamond Ring</h6>
            <p className="px-xl-3">
              <i className="fas fa-quote-left pe-2" />
              It takes something to celebrate first job and first salary. Thank
              you for giving me that.
            </p>
            <ul className="list-unstyled d-flex justify-content-center mb-0">
              <li>
                <i className="fas fa-star fa-sm text-warning" />
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning" />
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning" />
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning" />
              </li>
              <li>
                <i className="fas fa-star-half-alt fa-sm text-warning" />
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-5 mb-md-0">
            <div className="d-flex justify-content-center mb-4">
              <img
                src={process.env.PUBLIC_URL + '/assets/images/testi-02.png'}
                className="rounded-circle shadow-1-strong"
                width={150}
                height={150}
              />
            </div>
            <h5 className="mb-3">Sindhu Jayakumar</h5>
            <h6 className="text-primary mb-3">Custom-made Jewellery</h6>
            <p className="px-xl-3">
              <i className="fas fa-quote-left pe-2" />
              Thanks team for this wonderfully customised solitaire mangalsutra.
              I always wanted my wedding ring and mangalsutra to match and the
              outcome is just so perfect that Im in love with it. Kudos to your
              team , they keep updating me on the status until it’s delivered.
              Your customer service is top notch. Keep it up!!
            </p>
            <ul className="list-unstyled d-flex justify-content-center mb-0">
              <li>
                <i className="fas fa-star fa-sm text-warning" />
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning" />
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning" />
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning" />
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning" />
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-0">
            <div className="d-flex justify-content-center mb-4">
              <img
                src={process.env.PUBLIC_URL + '/assets/images/testi-03.png'}
                className="rounded-circle shadow-1-strong"
                width={150}
                height={150}
              />
            </div>
            <h5 className="mb-3">Sanjana C.</h5>
            <h6 className="text-primary mb-3">Alizeh Nose Ring</h6>
            <p className="px-xl-3">
              <i className="fas fa-quote-left pe-2" />I loved it so much ..The
              design is Amazing .. I got it customized for 6mm within few days
              ,the delivery time was very less around 5-7days which is so much
              appreciable and the quality is so good ...
            </p>
            <ul className="list-unstyled d-flex justify-content-center mb-0">
              <li>
                <i className="fas fa-star fa-sm text-warning" />
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning" />
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning" />
              </li>
              <li>
                <i className="fas fa-star fa-sm text-warning" />
              </li>
              <li>
                <i className="far fa-star fa-sm text-warning" />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default testimonials;
