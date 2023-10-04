/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    customKey: 'customValue',
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  compress: true,
  async redirects() {
    return [
      {
        source: '/hola',
        destination: 'https://gndx.dev',
        permanent: true,
      },
    ];
  },
};
module.exports = nextConfig;
