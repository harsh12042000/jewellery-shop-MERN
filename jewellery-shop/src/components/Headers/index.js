import { Link, useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import { useContext, useState } from "react";
import { Store } from "../../Store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Headers = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart, userInfo } = state;

  const signoutHandler = () => {
    ctxDispatch({ type: "USER_SIGNOUT" });
    localStorage.removeItem("userInfo");
    localStorage.removeItem("shippingAddress");
    localStorage.removeItem("paymentMethod");
    window.location.href = "/signin";
  };

  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    navigate(query ? `search/?query=${query}` : "/search");
    e.target.reset();
  };

  return (
    <>
      <div className="superNav border-bottom py-2 bg-light">
        <div className="container">
          <ToastContainer position="bottom-center" limit={1}></ToastContainer>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 centerOnMobile">
              <span className="d-none d-lg-inline-block d-md-inline-block d-sm-inline-block d-xs-none me-3">
                <strong>info@gmail.com</strong>
              </span>
              <span className="me-3">
                <i className="fa-solid fa-phone me-1 text-danger" />{" "}
                <strong>+91 8830711743</strong>
              </span>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-none d-lg-block d-md-block-d-sm-block d-xs-none text-end">
              <span className="me-3">
                <i className="fa-solid fa-truck text-muted me-1" />
                <Link className="text-muted" to="/privacy/shipping">
                  Shipping
                </Link>
              </span>
              <span className="me-3">
                <i className="fa-solid fa-file  text-muted me-2" />
                <Link className="text-muted" to="/privacy/policy">
                  Policy
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-white sticky-top navbar-light p-3 shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="#">
            <i className="fa-solid fa-shop me-2" />{" "}
            <strong>
              <Link to="/">BlueStone</Link>
            </strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <form onSubmit={submitHandler}>
            <div className="mx-auto my-3 d-lg-none d-sm-block d-xs-block">
              <div className="input-group">
                <input
                  type="text"
                  name="q"
                  id="q"
                  onChange={(e) => setQuery(e.target.value)}
                  className="form-control border-dark"
                  style={{ color: "#7a7a7a" }}
                />
                <button
                  className="btn btn-dark text-white"
                  type="submit"
                  id="button-search"
                >
                  Search
                </button>
              </div>
            </div>
          </form>
          <div className=" collapse navbar-collapse" id="navbarNavDropdown">
            <form onSubmit={submitHandler}>
              <div className="ms-auto d-none d-lg-block">
                <div className="input-group">
                  <input
                    type="text"
                    name="q"
                    id="q"
                    onChange={(e) => setQuery(e.target.value)}
                    className="form-control border-dark"
                    style={{ color: "#7a7a7a" }}
                  />
                  <button
                    className="btn btn-dark text-white"
                    type="submit"
                    id="button-search"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>

            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <Link
                  className="nav-link mx-2 text-uppercase active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2 text-uppercase" to="/aboutus">
                  About Us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle mx-2 text-uppercase"
                  href="#"
                  id="submenu1"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </a>
                <ul className="dropdown-menu" aria-labelledby="submenu1">
                  <li>
                    <Link
                      className="dropdown-item"
                      to={`/search?category=Bangle`}
                    >
                      BANGLE
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/search?category=Bracelet"
                    >
                      BRACELET
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/search?category=Chain">
                      CHAIN
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/search?category=Earings"
                    >
                      EARINGS
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/search?category=Mangalsutra"
                    >
                      MANGALSUTRA
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/search?category=Necklace"
                    >
                      NECKLACE
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/search?category=Pendent"
                    >
                      PENDENT
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/search?category=Rings">
                      RINGS
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2 text-uppercase" to="/contactus">
                  Contact Us
                </Link>
              </li>
            </ul>
            <ul></ul>
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <Link to="/cart" className="nav-link mx-2 text-uppercase">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </Badge>
                  )}
                </Link>
              </li>

              {userInfo && userInfo.email == "admin@gmail.com" && (
                <li className="nev-item dropdown">
                  <a
                    className="nav-link dropdown-toggle mx-2 text-uppercase"
                    href="#"
                    id="admin-menu"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    ADMIN
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="admin-menu">
                    <>
                      <li>
                        <Link className="dropdown-item" to="admin/dashboard">
                          ADMIN DASHBOARD
                        </Link>
                      </li>
                      {/* <li>
                        <Link className="dropdown-item" to="/admin/userlist">
                          USERS
                        </Link>
                      </li> */}
                    </>
                  </ul>
                </li>
              )}

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle mx-2 text-uppercase"
                  href="#"
                  id="submenu3"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Account
                </a>
                <ul className="dropdown-menu" aria-labelledby="submenu3">
                  {userInfo ? (
                    <>
                      <li>
                        <Link className="dropdown-item" to="/profile">
                          Your Profile
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/orderhistory">
                          Order History
                        </Link>
                        <hr></hr>
                        <Link
                          className="dropdown-item"
                          to="#signout"
                          onClick={signoutHandler}
                        >
                          Sign out
                        </Link>
                      </li>
                    </>
                  ) : (
                    <li>
                      <Link className="dropdown-item" to="/signin">
                        Sign In
                      </Link>
                    </li>
                  )}
                  {/* <li>
                    <Link className="dropdown-item" to="/signup">
                      Sign Up
                    </Link>
                  </li> */}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Headers;
