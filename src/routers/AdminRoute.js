import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const AdminRoute = ({
 authId,
 component: Component,
 ...rest
 }) => {
  return (
    <Route
      {...rest}
      component={props =>
        authId === 'V7kpYQ7RBWVx3HQS6iIUMW6Xjpy2' ? (
          <div>
            <Component {...props} />
          </div>
        ) : (
          <Redirect to="/"/>
        )
      }
    />
  )
};

const mapStateToProps = state => ({
  authId: state.auth.uid
});

export default connect(mapStateToProps)(AdminRoute);