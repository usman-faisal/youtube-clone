/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_KEY: "AIzaSyBl6XVFxHVUlmmojo_drPqC67XBc4NoRSI",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "yt3.ggpht.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
