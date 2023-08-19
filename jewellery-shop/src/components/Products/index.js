import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import logger from 'use-reducer-logger';
import Rating from '../Rating'

const reducer = (state, action) => {
  switch(action.type) {
    case 'FETCH_REQUEST':
      return {...state, loading: true};
    case 'FETCH_SUCCESS':
      return {...state, products: action.payload, loading: false};
    case 'FETCH_FAIL':
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};

//after banner section
export const Products = () => {

  const params = useParams();
  const { slug } = params;

  const [{loading, error, products}, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: ''
  })

  // const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async() => {
      dispatch({type: 'FETCH_REQUEST'});
      try {
        const result = await axios.get('/api/products');
        dispatch({type: 'FETCH_SUCCESS', payload: result.data});
      } catch(err) {
        dispatch({type: 'FETCH_FAIL', payload: err.message});
      }

      // setProducts(result.data);
    };
    fetchData();
  }, [])
  return (
    <>
      <div className="container">
      <div className="row">
  {loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    products
      .filter((product) => slug === product.category)
      .map((product) => (
        <>
        <div className="text-centre" style= {{ margin: "70px 0 50px 0" }}>
            <h2>{product.category}</h2>
            <img src={process.env.PUBLIC_URL + '/assets/images/line_star.png'}></img>
        </div>
        <div className="col-12 col-sm-6 col-lg-3" key={product.slug}>
          <div className="card my-3">
            <img className="card-img-top" src={product.image} alt={product.name} style={{ height: '200px', objectFit: 'cover' }} />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <Rating rating={product.rating} numReviews={product.numReviews} />
              <p className="card-text">
                <strong>&#8377;{product.price}</strong>
              </p>
              <button className="btn btn-light">Add to cart</button>
            </div>
          </div>
        </div>
        </>
      ))
  )}
  {products.filter((product) => slug === product.category).length === 0 && (
    <div className="col-12">
      <div className="text-centre" style= {{ margin: "100px 0 50px 0" }}>
            <h2>Sorry! No products available now</h2>
            <img src={process.env.PUBLIC_URL + '/assets/images/line_star.png'}></img>
        </div>
    </div>
  )}
</div>



      </div>
    </>
  );
};
