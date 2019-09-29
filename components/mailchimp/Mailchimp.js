import React from 'react';
import { Button, FlexRow, Input } from '../../styles/landing';
import { Formik } from 'formik';
import { airpackAPI } from '../../config/baseUrl';

const Mailchimp = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        sent: false
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

        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {
        const res = await airpackAPI.post('/mail/mailchimp', values);

        if (res.data.status === 'success') {
          values.sent = true;
        }
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
      }) => (
        <form onSubmit={handleSubmit}>
          <FlexRow direction='row'>
            {!values.sent ? (
              <>
                {' '}
                <Input
                  name='email'
                  type='email'
                  value={values.email}
                  placeholder='mike@gmail.com'
                  onChange={handleChange}
                />
                <span>{errors.email && touched.email && errors.email} </span>
                <Button type='submit' disabled={isSubmitting}>
                  Subscribe
                </Button>
              </>
            ) : (
              <p>You have been subscribed to our newsletter!</p>
            )}
          </FlexRow>
        </form>
      )}
    </Formik>
  );
};

export default Mailchimp;
