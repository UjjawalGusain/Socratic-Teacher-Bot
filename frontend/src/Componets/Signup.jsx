import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import '../CSS_Files/Signup.css'; 
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
      // Make a POST request to the backend using Axios
      const response = await axios.post(authEndpoints.SIGNUP_API, {
        username: values.name,
        email: values.email,
        password: values.password,
      });

      // If signup is successful, redirect to the chatbot page
      if (response.status === 201) {
        navigate('/chatbot');
      } 
    } catch (error) {
      // Handle errors and validation messages from the backend
      if (error.response && error.response.data.msg) {
        setFieldError('email', error.response.data.msg);  // Set error message from backend
      } else {
        setFieldError('email', 'Something went wrong. Please try again later.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Signup Form</h2>
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          validationSchema={signupSchema}
          onSubmit={handleSignup}
        >
          {() => (
            <Form>
              <div className="form-field">
                <Field type="text" name="name" placeholder="Name" />
                <ErrorMessage name="name" component="div" className="error" />
              </div>
              <div className="form-field">
                <Field type="email" name="email" placeholder="Email Address" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <div className="form-field">
                <Field type="password" name="password" placeholder="Password" />
                <ErrorMessage name="password" component="div" className="error" />
              </div>
              <button type="submit" className="login-button">Signup</button>
            </Form>
          )}
        </Formik>
        <p>Already have an account? <a href="/" className="signup-link">Login here</a></p>
      </div>
    </div>
  );
};

export default Signup;
