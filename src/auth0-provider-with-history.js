import React from 'react';
import { useHistory } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithHistory = ({ children }) => {
  const history = useHistory();
  const domain = process.env.MISSO_DOMAIN;
  const clientId = process.env.MISSO_CLIENT_ID;

  const onRedirectCallback = () => {
    history.push('http://localhost:3000/login');
    // const onRedirectCallback = (appState) => {
    // history.push(
    //   appState && appState.targetUrl
    //     ? appState.targetUrl
    //     : (window.location.href = 'http://localhost:3000/login')
    // );
    // history.push(appState?returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
