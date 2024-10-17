import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
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
        setFieldError("email", "Login failed. Please try again.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleProfileClick = () => {
    navigate('/');
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  return (
    <div className="w-screen h-screen bg-[#030A1C] flex flex-col justify-center items-center md:flex-row p-5">


      <button className="absolute top-4 left-4"
        onClick={handleProfileClick}>
          <div className="border-2 border-[#F8F8FF] rounded-2xl size-10 p-1">
            <img src="avatar.png" alt="avatar-img" />
          </div>
      </button>


      {/* Left Section */}
      <div className="md:flex w-full md:w-2/5 lg:w-1/2 flex-col justify-center items-center p-5 md:p-0">
        <div className="flex flex-col gap-5 justify-center items-center md:items-start md:w-3/4">
          <p className="text-[#F9F9FF] text-3xl md:text-4xl font-medium">
            Welcome Back!
          </p>
          <p className="text-[#F9F9FF] text-xl md:text-2xl font-normal text-center md:text-left">
            Log in and continue studying with us
          </p>
          <img
            src="teacher-svg.svg"
            alt="Study Illustration"
            className="w-3/4 md:w-auto filter invert brightness-0 md:block hidden md:z-0"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex w-full md:w-3/5 lg:w-1/2 flex-col justify-center items-center md:items-end my-3 lg:my-5 md:mr-20 z-20">
        <div className="m-5 w-80 md:w-4/5 rounded-xl bg-white p-8 md:p-6 lg:p-10 flex flex-col gap-10">
          <p className="text-2xl md:text-3xl font-medium text-[#030A1C]">
            Log in to your account
          </p>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={handleLogin}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-5">
                {/* Email Field */}
                <div>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className="border border-gray-300 rounded p-3 w-full"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Password Field */}
                <div>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="border border-gray-300 rounded p-3 w-full"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className={`${
                    isSubmitting ? "bg-gray-300" : "bg-gray-500"
                  } text-white py-2 px-4 rounded w-full`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Logging in..." : "Log in"}
                </button>

                {/* Signup Link */}
                <p className="text-center mt-4">
                  Don't have an account?{" "}
                  <button className="underline" onClick={handleSignupClick}>
                    Sign up
                  </button>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
