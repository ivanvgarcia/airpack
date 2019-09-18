import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Header, Body, Content } from './AlertStyles';
import { removeAlert } from '../../redux/actions/alert';

const Alert = ({ alerts, history, removeAlert, ...props }) => {
  const handleClick = id => {
    removeAlert(id);
  };

  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map(alert => (
      <Container key={alert.id} className={`alert alert-${alert.alertType}`}>
        {/* <CloseButton onClick={() => handleClick(alert.id)}>x</CloseButton> */}
        <Header>{alert.message.name}</Header>
        <Body>
          <Content>{alert.message.message || alert.message}</Content>
        </Body>
      </Container>
    ))
  );
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(
  mapStateToProps,
  { removeAlert }
)(Alert);
