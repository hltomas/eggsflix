import Card from './Card.jsx'
import './App.css';
import './Card.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './Card.css'
import '@frontegg/react';
import { AdminPortal } from '@frontegg/react';

// import { useEffect } from 'react';
import { useAuth, useLoginWithRedirect, ContextHolder } from "@frontegg/react";

function App() 
{
const { user, isAuthenticated } = useAuth();
const loginWithRedirect = useLoginWithRedirect();

const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
   };

    const handleClick = () => {
    AdminPortal.show();
   }; 


 return (
       
      <div className="App">     
      { isAuthenticated ? (
          
        <div>
          <div>
            <img src={user?.profilePictureUrl || undefined} alt={user?.name}/>
          </div>
          <div>
            <span>Logged in as: {user?.name}</span>
          </div>
          <div>
            <button onClick={() => alert(user?.accessToken)}>What is my access token?</button>
          </div>
          <div>
            <button onClick={() => logout()}>Click to logout</button>
          </div>
          <button onClick={handleClick}>Settings</button>
          <Card />
        </div>
      ) : (
        <div>
          <button onClick={() => loginWithRedirect()}>Click me to login</button>
        </div>
      )
    }
   </div>
          
 );
}

export default App
