import React, { useState } from "react";
import "./Register.css";
import logo from "../../../images/logo2.png";
import auth from "../../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Loading from "../../Shared/Loading/Loading";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, errorUpdating] = useUpdateProfile(auth);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  let errorTemplate;
  if (error) {
    errorTemplate = <p className="text-danger">{error.message}</p>;
  }
  if (loading || updating) {
    return <Loading></Loading>;
  }
  const handleCreateUser = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirm.value;
    if (password === confirmPassword) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
    } else {
      errorTemplate = (
        <p className="text-danger">Both passwords are not same</p>
      );
    }
  };
  if (user) {
    navigate(from, { replace: true });
    console.log(user);
  }
  return (
    <div className="form d-flex justify-content-center align-items-center">
      <div>
        <img
          className="img-fluid mb-5 d-block mx-auto"
          style={{ height: "80px" }}
          src={logo}
          alt="logo"
        />
        <form onSubmit={handleCreateUser} className="login-form">
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <div className="password">
            <input
              type={show ? "text" : "password"}
              name="password"
              placeholder="Confirm Password"
              required
            />
            <span>
              <FontAwesomeIcon
                onClick={() => setShow(!show)}
                icon={show ? faEyeSlash : faEye}
              ></FontAwesomeIcon>
            </span>
          </div>
          <div className="password">
            <input
              type={show ? "text" : "password"}
              name="confirm"
              placeholder="Confirm Password"
              required
            />
            <span>
              <FontAwesomeIcon
                onClick={() => setShow(!show)}
                icon={show ? faEyeSlash : faEye}
              ></FontAwesomeIcon>
            </span>
          </div>
          {errorTemplate}
          <input type="submit" value="Register" className="submit-btn" />
        </form>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default SignUp;
