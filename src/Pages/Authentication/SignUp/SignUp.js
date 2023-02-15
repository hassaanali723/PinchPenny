import { NavLink } from "react-router-dom";
import "./../../../assets/scss/style.scss";
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import DEMO from "../../../store/constant";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useMutation } from "react-query";
// import { register as registerApi } from "./api";
import {
  registerRequest,
  registerSuccess,
  registerFailure,
} from "../../../store/actions/auth.actions";

const SignUp = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const initialState = useSelector((state) => state.authReducer);

  //   const [register, { status, error }] = useMutation(registerApi, {
  //     onSuccess: (user) => {
  //       dispatch(registerSuccess(user));
  //     },
  //     onError: (error) => {
  //       dispatch(registerFailure(error.message));
  //     },
  //   });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(firstName, lastName, email, password);
    dispatch(registerRequest({ firstName, lastName, email, password }));
    console.log(initialState);
    // register(firstName, lastName, email, password);
  };

  return (
    <Aux>
      <Breadcrumb />
      <div className="auth-wrapper">
        <div className="auth-content">
          <div className="auth-bg">
            <span className="r" />
            <span className="r s" />
            <span className="r s" />
            <span className="r" />
          </div>
          <div className="card">
            <div className="card-body text-center">
              <div className="mb-4">
                <i className="feather icon-user-plus auth-icon" />
              </div>
              <h3 className="mb-4">Sign up</h3>
              <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    value={firstName}
                    placeholder="First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    value={lastName}
                    placeholder="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input-group mb-4">
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {/* <div className="form-group text-left">
                <div className="checkbox checkbox-fill d-inline">
                  <input
                    type="checkbox"
                    name="checkbox-fill-2"
                    id="checkbox-fill-2"
                  />
                  <label htmlFor="checkbox-fill-2" className="cr">
                    Send me the <a href={DEMO.BLANK_LINK}> Newsletter</a>{" "}
                    weekly.
                  </label>
                </div>
              </div> */}
                <button type="submit" className="btn btn-primary shadow-2 mb-4">
                  Sign up
                </button>
              </form>
              <p className="mb-0 text-muted">
                Allready have an account?{" "}
                <NavLink to="/auth/signin-1">Login</NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Aux>
  );
};

export default SignUp;
