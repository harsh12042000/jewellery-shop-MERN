import React, { useContext, useEffect, useReducer, useState } from "react";
import { Store } from "../../Store";
import axios from "axios";
import { getError } from "../../utils";
import LoadingBox from "../LoadingBox";
import { Modal, Button } from "react-bootstrap";
import { toast } from "react-toastify";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, allProducts: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function DashboardScreen() {
  const [showModal, setShow] = useState(false);
  const [productId, setProductId] = useState(null); // Added productId state

  const handleClose = () => setShow(false);
  const handleShow = (product) => {
    setFormData({
      name: product.name,
      description: product.description,
      countInStock: product.countInStock,
      rating: product.rating,
      price: product.price,
      id: product._id
    });
    setShow(true);
  };

  const { state } = useContext(Store);
  const { userInfo } = state;

  const [{ loading, error, allProducts }, dispatch] = useReducer(reducer, {
    loading: true,
    error: "",
  });

  const deleteHandler = async (prodId) => {
    try {
      const response = await axios.delete(`/api/products/del/${prodId}`);
      const { data } = response;

      if (response.status === 200) {
        toast.success("Product Deleted !");
        fetchData(); // Fetch data after successful delete
      } else {
        toast.error("Product Not Found !");
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };

  const fetchData = async () => {
    // Defined fetchData function
    dispatch({ type: "FETCH_REQUEST" });
    try {
      const { data } = await axios.get(`/api/products`, {});
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (error) {
      dispatch({
        type: "FETCH_FAIL",
        payload: getError(error),
      });
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data on mount and when userInfo changes
  }, [userInfo]);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    countInStock: "",
    rating: "",
    price: "",
    id: ""
  });

  const { name, description, countInStock, rating, price, id } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    // Added e parameter to prevent form submission
    e.preventDefault(); // Prevent default form submission
    // console.log(formData)

    try {
      const response = await axios.put(
        `/api/products/edit/${formData.id}`, 
        formData
      );
      const { data } = response;
      toast.success("Product Updated!");
      handleClose();
      fetchData(); 
    } catch (err) {
      toast.error(getError(err));
    }
  };

  return (
    <div className="container">
      <div className="text-center" style={{ margin: "50px 0" }}>
        <h2>Products</h2>
        <img
          src={process.env.PUBLIC_URL + "/assets/images/line_star.png"}
          alt="line_star"
        />
      </div>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="table-responsive">
          {/* <button className="btn btn-success">Add Product</button> */}
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>RATINGS</th>
                <th>STOCK</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {allProducts.map((p) => (
                <tr key={p._id}>
                  <td>{p._id}</td>
                  <td>
                    <div className="align-items-center">
                      <img
                        style={{
                          maxWidth: "30%",
                          maxHeight: "25vh",
                          margin: "auto",
                        }}
                        src={process.env.PUBLIC_URL + p.image}
                        alt={p.name} // Added alt attribute
                      />
                      <div>{p.name}</div>
                    </div>
                  </td>
                  <td>{p.price}</td>
                  <td>{p.rating}</td>
                  <td>{p.countInStock}</td>
                  <td>
                    <div>
                      <button
                        className="btn btn-primary mr-10"
                        onClick={() => handleShow(p)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-primary"
                        onClick={() => deleteHandler(p._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
          <div className="form-group">
              <label>Id:</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={id}
                disabled
              />
            </div>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Description:</label>
              <textarea
                type="textarea"
                className="form-control"
                name="description"
                value={description}
                onChange={handleChange}
                rows="5"
              />
            </div>
            <div className="form-group">
              <label>Count in Stock:</label>
              <input
                type="text"
                className="form-control"
                name="countInStock"
                value={countInStock}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Ratings:</label>
              <input
                type="text"
                className="form-control"
                name="rating"
                value={rating}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Price:</label>
              <input
                type="text"
                className="form-control"
                name="price"
                value={price}
                onChange={handleChange}
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-danger">
                Save Changes
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
