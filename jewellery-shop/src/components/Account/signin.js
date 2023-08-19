import React from "react";
import { useContext, useEffect } from 'react';
import { Store } from '../../Store';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate  } from 'react-router-dom';
import axios from 'axios';
import { toast } from "react-toastify";
import { getError } from '../../utils';

export default function Signin() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('api/users/signin', data);
      // console.log(response);
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate(redirect || '/');console.log(response.data); 
    } catch (error) {
      toast.error(getError(error));
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);


  return (
    <div className="container signin">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="text-center" style={{ margin: "100px 0 50px 0" }}>
          <h2>Login</h2>
          <img src={process.env.PUBLIC_URL + '/assets/images/line_star.png'} alt="Logo" />
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
              placeholder="Enter Email"
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
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <div className="mx-auto" style={{ width: "300px" }}>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <div className="mb-3">
          New customer?{' '}
          <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
        </div>
      </form>
    </div>
  );
}
