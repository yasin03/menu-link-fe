/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXTAUTH_SECRET: "my_ultra_secure_nextauth_secret",
    NEXTAUTH_URL: "http://localhost:3000",
  },
  images: {
    domains: [
      "omurrestaurant.com",
      "cdn1.ntv.com.tr",
      "i.pinimg.com",
      "www.sahimevlana.com",
      "www.raks.com.tr",
      "img-s1.onedio.com",
    ],
  },
}

module.exports = nextConfig
