import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { login } from '../redux/actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';

import styled from 'styled-components';

import Head from 'next/head';
import Nav from '../components/layout/nav/nav';

export const Container = styled.div`
  padding: 0 20px;
  @media (min-width: 768px) {
    max-width: 1400px;
    margin: 0 auto;
  }
`;

const Login = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      Router.push('/');
    }
  }, [isAuthenticated]);

  return (
    <div>
      <Head></Head>
      <Container>
        <h1>Sign Up</h1>{' '}
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          validate={values => {
            let errors = {};

            if (!values.email) {
              errors.email = 'Email is Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }

            if (!values.password) {
              errors.password = 'Password is Required';
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(login(values));
            setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <span>{errors.email && touched.email && errors.email} </span>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                name='password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <span>
                {errors.password && touched.password && errors.password}
              </span>

              <button type='submit' disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        </Formik>
      </Container>
    </div>
  );
};

export default Login;
