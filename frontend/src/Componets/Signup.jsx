import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
// import '../CSS_Files/Signup.css'; 
import { authEndpoints } from '../../api/api';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();

  const signupSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Too Short!').required('Required'),
  });

  const handleSignup = async (values, { setSubmitting, setFieldError }) => {
    try {
      const response = await axios.post(authEndpoints.SIGNUP_API, {
        username: values.name,
        email: values.email,
        password: values.password,
      });

      if (response.status === 201) {
        navigate('/chatbot');
      } 
    } catch (error) {
      if (error.response && error.response.data.msg) {
        setFieldError('email', error.response.data.msg);
      } else {
        setFieldError('email', 'Something went wrong. Please try again later.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleLoginClick = () => {
    navigate('/');
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <img src="2ff100a6-7dba-11ef-b8f0-0242ac11000e-removebg-preview.png" alt="Signup Character" className="signup-image" />
      </div>
      <div className="signup-right">
        <h2>Sign Up</h2>
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          validationSchema={signupSchema}
          onSubmit={handleSignup}
        >
          {() => (
            <Form>
              <div className="form-field">
                <Field type="text" name="name" placeholder="Name" className="input-field"/>
                <ErrorMessage name="name" component="div" className="error" />
              </div>
              <div className="form-field">
                <Field type="email" name="email" placeholder="Email Address" className="input-field"/>
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <div className="form-field">
                <Field type="password" name="password" placeholder="Password" className="input-field"/>
                <ErrorMessage name="password" component="div" className="error" />
              </div>
              <button type="submit" className="signup-button">Sign Up</button>
            </Form>
          )}
        </Formik>
        <p>
          Already have an account?{' '}
          <span onClick={handleLoginClick} className="login-link">
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
