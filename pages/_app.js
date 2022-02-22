import '../styles/globals.css'
import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';


function MyApp({ Component, pageProps }) {
  return (
// makes auth0 available on every page
  <UserProvider>
  <Component {...pageProps} />
</UserProvider>

  )}

export default MyApp
