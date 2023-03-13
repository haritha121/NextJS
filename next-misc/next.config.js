/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: "/about",
        destination: "/",
        permanent: true, //indicates whether the redirection is permanent or not.
      },
      //path matching redirects
      {
        source: "/old-blog/:id",
        destination: "/new-blog/:id",
        permanent: true, //indicates whether the redirection is permanent or not.
      },
    ];
  },
};

module.exports = nextConfig;
