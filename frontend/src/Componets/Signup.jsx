import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { authEndpoints } from "../../api/api";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();

  const signupSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Too Short!").required("Required"),
    terms: Yup.boolean().oneOf([true], "You must accept the Terms of Use"),
  });

  const handleSignup = async (values, { setSubmitting, setFieldError }) => {
    try {
      const response = await axios.post(authEndpoints.SIGNUP_API, {
        username: values.name,
        email: values.email,
        password: values.password,
      });

      if (response.status === 201) {
        navigate("/chatbot");
      }
    } catch (error) {
      if (error.response && error.response.data.msg) {
        setFieldError("email", error.response.data.msg);
      } else {
        setFieldError("email", "Something went wrong. Please try again later.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="w-screen md:h-screen h-full bg-[#030A1C] flex flex-col justify-center items-center md:flex-row p-5">
      {/* Left Section */}
      <div className="md:flex w-full md:w-2/5 lg:w-1/2 flex-col justify-center items-center p-5 md:p-0">
        <div className="flex flex-col gap-5 justify-center items-center md:items-start md:w-3/4">
          <p className="text-[#F9F9FF] text-3xl md:text-4xl font-medium">
            Study with us
          </p>
          <p className="text-[#F9F9FF] text-xl md:text-2xl font-normal text-center md:text-left">
            Boost your studying efficiency with socratic techniques
          </p>
          <img
            src="teacher-svg.svg"
            alt="Study Illustration"
            className="w-3/4 md:w-auto filter invert brightness-0 md:block hidden md:z-0 "
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex w-full md:w-3/5 lg:w-1/2 flex-col justify-end items-center md:items-end my-3 lg:my-5 md:mr-20 z-20">
        <div className="m-5 w-80 md:w-4/5 rounded-xl bg-white p-8 md:p-6 lg:p-10 flex flex-col gap-10">
          <p className="text-2xl md:text-3xl font-medium text-[#030A1C]">
            Sign up now
          </p>
          <Formik
            initialValues={{ name: "", email: "", password: "" }}
            validationSchema={signupSchema}
            onSubmit={handleSignup}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-5">
                {/* Name Field */}
                <div>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="border border-gray-300 rounded p-3 w-full"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

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

                {/* Terms and Conditions */}
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Field type="checkbox" name="terms" className="mr-2" />
                    <span>
                      By creating an account, I agree to our{" "}
                      <a href="#" className="underline">
                        Terms of use
                      </a>{" "}
                      and{" "}
                      <a href="#" className="underline">
                        Privacy Policy
                      </a>
                      .
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Field
                      type="checkbox"
                      name="marketingConsent"
                      className="mr-2"
                    />
                    <span>
                      By creating an account, I consent to receive product
                      updates, promotions, etc.
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className={`${
                    isSubmitting ? "bg-gray-300" : "bg-gray-500"
                  } text-white py-2 px-4 rounded w-full`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Sign up"}
                </button>

                {/* Login Link */}
                <p className="text-center mt-4">
                  Already have an account?{" "}
                  <button className="underline" onClick={handleLoginClick}>
                    Log in
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

export default Signup;
