import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
// import Auth0ProviderWithHistory from './auth0-provider-with-history';

const domain = 'dev-qruk0bfv.eu.auth0.com';
const clientId = 'KInqYCW7AcCA04uw5DIj5KZNbSV3cZnq';

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirect_uri={`${window.location.origin}/dashboard`}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
