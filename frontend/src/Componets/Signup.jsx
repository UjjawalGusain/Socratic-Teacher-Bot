import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import '../CSS_Files/Signup.css'; 

const Signup = () => {
  const navigate = useNavigate();
  
  const signupSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Too Short!').required('Required'),
  });

  const handleSignup = (values) => {
    console.log(values);
    navigate('/chatbot');
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
