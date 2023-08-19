import React, { useEffect, useReducer, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { getError } from '../utils';
import Product from './Products/Product';
import { NavLink } from 'react-router-dom';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        products: action.payload.products,
        page: action.payload.page,
        pages: action.payload.pages,
        countProducts: action.payload.countProducts,
        loading: false,
      };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

const prices = [
  {
    name: 'Rs.3000 to Rs.8000',
    value: '3000-8000',
  },
  {
    name: 'Rs.8000 to Rs.16000',
    value: '8000-16000',
  },
  {
    name: 'Rs.16000 to Rs.25000',
    value: '16000-25000',
  },
];

const ratings = [
  {
    name: '4stars & up',
    rating: 4,
  },
  {
    name: '3stars & up',
    rating: 3,
  },
  {
    name: '2stars & up',
    rating: 2,
  },
  {
    name: '1stars & up',
    rating: 1,
  },
];

export default function SearchScreen() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const category = sp.get('category') || 'all';
  const query = sp.get('query') || 'all';
  const price = sp.get('price') || 'all';
  const rating = sp.get('rating') || 'all';
  const order = sp.get('order') || 'newest';
  const page = sp.get('page') || 1;

  const [{ loading, error, products, pages, countProducts }, dispatch] = useReducer(reducer, {
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `/api/products/search?page=${page}&query=${query}&category=${category}&price=${price}&rating=${rating}&order=${order}`
        );
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({
          type: 'FETCH_FAIL',
          payload: getError(error),
        });
      }
    };
    fetchData();
  }, [category, error, order, page, price, query, rating]);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/products/categories`);
        setCategories(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchCategories();
  }, [dispatch]);

  const getFilterUrl = (filter) => {
    const filterPage = filter.page || page;
    const filterCategory = filter.category || category;
    const filterQuery = filter.query || query;
    const filterRating = filter.rating || rating;
    const filterPrice = filter.price || price;
    const sortOrder = filter.order || order;
    return `/search?category=${filterCategory}&query=${filterQuery}&price=${filterPrice}&rating=${filterRating}&order=${sortOrder}&page=${filterPage}`;
  };

  return (
    <div className='container'>
      <div className="text-center" style={{ margin: "25px 0 25px 0" }}>
        <h2>Search Results</h2>
        <img src={process.env.PUBLIC_URL + "/assets/images/line_star.png"} alt="line star"></img>
      </div>
      <div className="row">
        <div className="col-md-3">
          <h3>Department</h3>
          <div>
            <ul className="list-unstyled">
              <li>
                <Link
                  className={'all' === category ? 'fw-bold' : ''}
                  to={getFilterUrl({ category: 'all' })}
                >
                  Any
                </Link>
              </li>
              {categories.map((c) => (
                <li key={c}>
                  <Link
                    className={c === category ? 'fw-bold' : ''}
                    to={getFilterUrl({ category: c })}
                  >
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Price</h3>
            <ul className="list-unstyled">
              <li>
                <Link
                  className={'all' === price ? 'fw-bold' : ''}
                  to={getFilterUrl({ price: 'all' })}
                >
                  Any
                </Link>
              </li>
              {prices.map((p) => (
                <li key={p.value}>
                  <Link
                    to={getFilterUrl({ price: p.value })}
                    className={p.value === price ? 'fw-bold' : ''}
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Avg. Customer Review</h3>
            <ul className="list-unstyled">
              {ratings.map((r) => (
                <li key={r.name}>
                  <Link
                    to={getFilterUrl({ rating: r.rating })}
                    className={`${r.rating}` === `${rating}` ? 'fw-bold' : ''}
                  >
                    {r.rating} &amp; up
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to={getFilterUrl({ rating: 'all' })}
                  className={rating === 'all' ? 'fw-bold' : ''}
                >
                  0 &amp; up
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-9">
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>{error}</div>
          ) : (
            <>
              <div className="d-flex justify-content-between mb-3 align-items-center">
                <div>
                  {countProducts === 0 ? 'No' : countProducts} Results
                  {query !== 'all' && `: ${query}`}
                  {category !== 'all' && `: ${category}`}
                  {price !== 'all' && `: Price ${price}`}
                  {rating !== 'all' && `: Rating ${rating} & up`}
                  {(query !== 'all' || category !== 'all' || rating !== 'all' || price !== 'all') && (
                    <button className="btn btn-light ms-3" onClick={() => navigate('/search')}>
                      Clear
                    </button>
                  )}
                </div>
                <div>
                  Sort by{' '}
                  <select
                    className="form-select"
                    value={order}
                    onChange={(e) => navigate(getFilterUrl({ order: e.target.value }))}
                  >
                    <option value="newest">Newest Arrivals</option>
                    <option value="lowest">Price: Low to High</option>
                    <option value="highest">Price: High to Low</option>
                    <option value="toprated">Avg. Customer Reviews</option>
                  </select>
                </div>
              </div>
              <div className="row">
                {products.map((product) => (
                  <Product key={product._id} product={product} />
                ))}
              </div>
              <div>
                {[...Array(pages).keys()].map((x) => (
                  <NavLink
                  key={x + 1}
                  className="mx-1"
                  to={getFilterUrl({ page: x + 1 })}
                  activeClassName="fw-bold"
                >
                  <button className={`btn ${Number(page) === x + 1 ? 'fw-bold' : ''}`} variant="light">
                    {x + 1}
                  </button>
                </NavLink>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
