import Head from 'next/head';
import '../styles/globals.css'
import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';


function MyApp({ Component, pageProps }) {
  
  return (
    <>
    <Head>
    <title>Familia</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
{/* // makes auth0 available on every page */}
  <UserProvider>
  <Component {...pageProps} />
</UserProvider>
</>
  )}

export default MyApp
