/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  
  images: {
    domains: ['firebasestorage.googleapis.com','flagcdn.com'],
    optimizeFonts: false,

},
}


module.exports = nextConfig

