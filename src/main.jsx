import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './Card.css'
import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
  baseUrl: 'https://app-wy992ttg8iex.frontegg.com',
  clientId: 'e4aa81f1-91d8-4897-8a73-80ff6c9e9871'
};

const authOptions = {
 keepSessionAlive: true // Uncomment this in order to maintain the session alive
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <FronteggProvider contextOptions={contextOptions} hostedLoginBox={true} authOptions={authOptions}> 
      <App />
  </FronteggProvider> ,
  document.getElementById('root')
);
