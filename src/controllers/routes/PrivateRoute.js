import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default PrivateRoute({ children, ...rest }) {

  const login = useSelector(state => state);

  return(
    <Route {...rest}

    render={({location}) => 
      login ? (children) : 
      (<Redirect to={{
        pathname: "/",
        state: {from: location}
      }}></Redirect>)
  }
  ></Route>);
};
