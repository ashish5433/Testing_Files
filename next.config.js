/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  optimizeFonts: false,
  
  images: {
    domains: ['firebasestorage.googleapis.com','flagcdn.com'],

},
}


module.exports = nextConfig

