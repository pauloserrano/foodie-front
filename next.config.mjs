/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "fakeimg.pl"
      }
    ]
  }
};

export default nextConfig;
