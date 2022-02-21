import Head from 'next/head';
import React, { useState } from 'react';

export default function Home() {
 
  return (
    <>
        <div>      
          <Head>
            <title>Kevwe Resume</title>
            <meta name='keywords' content='Kevwe resume' />
          </Head>

          <h1>Welcome to my Portfolio</h1>

          <p>This online portfolio is to give you an idea of who I am and an overview of what I have been doing since I finished my first degree in 2012. 
          <br></br>
          I am many things - <strong><em>a doctoral research, a web developer trainee, a junior data analyst</em></strong>, but most of all, a passionate and lifelong learner.</p>

      </div>
   </>
  )
}
