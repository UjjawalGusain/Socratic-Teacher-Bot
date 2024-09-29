import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import "../CSS_Files/Login.css";
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
        // Display error message from backend
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
      <div className="login-form">
        <h2>Login Form</h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={handleLogin}
        >
          {() => (
            <Form>
              <div className="form-field">
                <Field type="email" name="email" placeholder="Email Address" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <div className="form-field">
                <Field type="password" name="password" placeholder="Password" />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />
              </div>
              <div className="options">
                <label>
                  <Field type="checkbox" name="rememberMe" />
                  Remember me
                </label>
                <a href="#" className="forgot-password">
                  Forgot password?
                </a>
              </div>
              <button type="submit" className="login-button">
                Login
              </button>
            </Form>
          )}
        </Formik>
        <p>
          Not a member?
          <span
            onClick={handleSignupClick}
            className="signup-link"
            style={{ cursor: "pointer", color: "blue" }} // Optional styling for clarity
          >
            Signup now
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
