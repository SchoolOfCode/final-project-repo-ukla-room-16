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