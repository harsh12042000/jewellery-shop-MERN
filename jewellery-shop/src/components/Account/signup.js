import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { Store } from "../../Store";
import { toast } from "react-toastify";
import { getError } from "../../utils";
import axios from "axios";

export default function Signup() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch
  } = useForm();

  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobile, setMobile] = useState('');


  // const onSubmit = async (data) => {
  //   try {
  //     const response = await axios.post('api/users/signup', data);
  //     ctxDispatch({type: 'USER_SIGNIN', payload: data})
  //     localStorage.setItem('userInfo', JSON.stringify(data));
  //     navigate(redirect || '/');
  //   } catch(error) {
  //     toast.error(getError(error));
  //   }
  // };

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("api/users/signup", data);
      ctxDispatch({ type: "USER_SIGNIN", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate(redirect || "/");
    } catch (error) {
      const errorMessage = getError(error);
      toast.error(errorMessage);
    }
  };

  useEffect(() => {
    if(userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const password = watch("password"); 

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="text-centre" style= {{ margin: "50px 0 35px 0" }}>
            <h2>Registration</h2>
            <img src={process.env.PUBLIC_URL + '/assets/images/line_star.png'}></img>
        </div>
        <div className="mb-3 text-center">
          <label htmlFor="email" className="form-label">
            Username
          </label>
          <div className="mx-auto" style={{ width: "300px" }}>
            <input
              type="name"
              className="form-control"
              id="name"
              {...register("name", {
                required: true,
              })}
            />
          </div>
          {errors.name && (
            <p className="text-danger">Name is required</p>
          )}
        </div>
        <div className="mb-3 text-center">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <div className="mx-auto" style={{ width: "300px" }}>
            <input
              type="email"
              className="form-control"
              id="email"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
              })}
            />
          </div>
          {errors.email && (
            <p className="text-danger">Email is required</p>
          )}
          {errors.email?.type === "pattern" && (
            <p className="text-danger">Entered email is in the wrong format</p>
          )}
        </div>
        <div className="mb-3 text-center">
          <label htmlFor="mobile" className="form-label">
            Mobile Number
          </label>
          <div className="mx-auto" style={{ width: "300px" }}>
            <input
              type="tel"
              className="form-control"
              id="mobile"
              {...register("mobile", {
                required: true,
                minLength: 10,
                maxLength: 10,
              })}
            />
          </div>
          {errors.mobile && (
            <p className="text-danger">Mobile number is required</p>
          )}
          {errors.mobile?.type === "minLength" && (
            <p className="text-danger">
              Entered mobile number is less than 10 digits
            </p>
          )}
          {errors.mobile?.type === "maxLength" && (
            <p className="text-danger">
              Entered mobile number is more than 10 digits
            </p>
          )}
        </div>
        <div className="mb-3 text-center">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <div className="mx-auto" style={{ width: "300px" }}>
            <input
              type="password"
              className="form-control"
              id="password"
              {...register("password", {
                required: true,
                minLength: 5,
                maxLength: 20,
              })}
            />
          </div>
          {errors.password && (
            <p className="text-danger">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-danger">
              Entered password is less than 5 characters
            </p>
          )}
          {errors.password?.type === "maxLength" && (
            <p className="text-danger">
              Entered password is more than 20 characters
            </p>
          )}
        </div>
        <div className="mb-3 text-center">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <div className="mx-auto" style={{ width: "300px" }}>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              {...register("confirmPassword", {
                required: true,
                validate: (value) => value === password,
              })}
            />
          </div>
          {errors.confirmPassword?.type === "required" && (
            <p className="text-danger">Confirm password is required</p>
          )}
          {errors.confirmPassword?.type === "validate" && (
            <p className="text-danger">Passwords do not match</p>
          )}
        </div>
        <div className="mb-3 text-center">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
