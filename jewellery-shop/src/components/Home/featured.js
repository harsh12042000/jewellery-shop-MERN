import React from "react";
import { Link } from "react-router-dom";
import Rating from "../Rating";

const featured = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-6 col-lg-3">
          <Link to={`/Products/girls-bows-bracelet`}>
            <img
              src={process.env.PUBLIC_URL + '/assets/images/p-01.jpg'}
              alt="Bracelet"
              className="prouduct-img"
            />
          </Link>
          <Link href={`/Products/girls-bows-bracelet`} className="text-reset">
            <h5>Girl's Bows Bracelet</h5>
          </Link>
          <Rating rating={4.5} numReviews={5} />
          <p>
            <strong>&#8377;{51663}</strong>
          </p>
          <button className="btn btn-light">Add to cart</button>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <Link to={`/Products/alizeh-nose-ring`}>
            <img
              src={process.env.PUBLIC_URL + '/assets/images/p-02.jpg'}
              alt="Bracelet"
              className="prouduct-img"
            />
          </Link>
          <Link href={`/Products/alizeh-nose-ring`} className="text-reset">
            <h5>Alizeh Nose Ring</h5>
          </Link>
          <Rating rating={5} numReviews={10} />
          <p>
            <strong>&#8377;{9638}</strong>
          </p>
          <button className="btn btn-light">Add to cart</button>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <Link to={`/Products/exquisite-filigree-earrings`}>
            <img
              src={process.env.PUBLIC_URL + '/assets/images/p-03.jpg'}
              alt="Bracelet"
              className="prouduct-img"
            />
          </Link>
          <Link href={`/Products/exquisite-filigree-earrings`} className="text-reset">
            <h5>Exquisite Filigree Earrings</h5>
          </Link>
          <Rating rating={4.5} numReviews={15} />
          <p>
            <strong>&#8377;{19345}</strong>
          </p>
          <button className="btn btn-light">Add to cart</button>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <Link to={`/Products/studded-heart-pendant`}>
            <img
              src={process.env.PUBLIC_URL + '/assets/images/p-04.jpg'}
              alt="Bracelet"
              className="prouduct-img"
            />
          </Link>
          <Link href={`/Products/studded-heart-pendant`} className="text-reset">
            <h5>Studded Heart Pendant</h5>
          </Link>
          <Rating rating={4} numReviews={20} />
          <p>
            <strong>&#8377;{14036}</strong>
          </p>
          <button className="btn btn-light">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default featured;
