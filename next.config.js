const nextConfig = {
  reactStrictMode: true,
  images: {
      domains: ['lh3.googleusercontent.com', "s.gravatar.com", "www.w3schools.com", "ibb.co", "i.ibb.co", "res.cloudinary.com"]
    },


}


const withTM = require('next-transpile-modules')(['@balkangraph/familytree.js']); 
//2nd parameter is the family tree package 
const withPlugins = require('next-compose-plugins');


module.exports = withPlugins([withTM], nextConfig);

//https://stackoverflow.com/questions/64847988/babylonjs-es6-in-nextjs-failes-with-unexpected-token-export




// module.exports = {
//   append this at the bottom of your next.config.js file
//   async headers() {
//     return [
//       {
//         source: '/(.*)',
//         headers: [
//       {
//         key: 'X-DNS-Prefetch-Control',
//         value: 'on',
//       },
//       {
//         key: 'Strict-Transport-Security',
//         value: 'max-age=63072000; includeSubDomains; preload',
//       },
//       {
//         key: 'Server',
//         value: 'Apache', // phony server value
//       },
//       {
//         key: 'X-Content-Type-Options',
//         value: 'nosniff',
//       },
//       {
//         key: 'X-Frame-Options',
//         value: 'sameorigin',
//       },
//       {
//         key: 'X-XSS-Protection',
//         value: '1; mode=block',
//       },
//       {
//         key: 'Referrer-Policy',
//         value: 'same-origin',
//       },
//       {
//         key: 'Permissions-Policy',
//         value: 'geolocation=*', // allow specified policies here
//       },
//     ]
//   },


//     ];
//   },
// };