import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
// import "../CSS_Files/Login.css";
import axios from "axios";
import { authEndpoints } from "../../api/api";

const Login = () => {
  const navigate = useNavigate();

  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Too Short!").required("Required"),
  });

  const handleLogin = async (values, { setSubmitting, setFieldError }) => {
    try {
      const response = await axios.post(authEndpoints.LOGIN_API, values);

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/chatbot");
      }
    } catch (error) {
      if (error.response && error.response.data.msg) {
        setFieldError("email", error.response.data.msg);
      } else {
        setFieldError("email", "Login failed");
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img
          src="2ff100a6-7dba-11ef-b8f0-0242ac11000e-removebg-preview.png" // Update with your image URL
          alt="Login illustration"
          className="login-image"
        />
      </div>
      <div className="login-right">
        <h2>Log in </h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={handleLogin}
        >
          {() => (
            <Form>
              <div className="form-field">
                <Field
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="input-field"
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <div className="form-field">
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input-field"
                />
                <ErrorMessage
                  name="password"
                  component="div" 
                  className="error"
                />
              </div>
              <div className="options">
                <label className="lb-remember">
                  <Field type="checkbox" name="rememberMe" />
                  Remember me
                </label>
              </div>
              <button type="submit" className="login-button">
                Log in
              </button>
            </Form>
          )}
        </Formik>
        <p>
          Not a member?{" "}
          <span onClick={handleSignupClick} className="signup-link">
            Create an account
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
