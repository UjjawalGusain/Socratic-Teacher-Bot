import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import '../CSS_Files/Login.css'


const Login = () => {
  const navigate = useNavigate();
  
  const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Too Short!').required('Required'),
  });

  const handleLogin = (values) => {
    console.log(values);
    navigate('/chatbot');
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login Form</h2>
        <Formik
          initialValues={{ email: '', password: '' }}
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
                <ErrorMessage name="password" component="div" className="error" />
              </div>
              <div className="options">
                <label>
                  <Field type="checkbox" name="rememberMe" />
                  Remember me
                </label>
                <a href="#" className="forgot-password">Forgot password?</a>
              </div>
              <button type="submit" className="login-button">Login</button>
            </Form>
          )}
        </Formik>
        <p>Not a member? <a href="/signup" className="signup-link">Signup now</a></p>
      </div>
    </div>
  );
};

export default Login;
