/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'img-mm.manoramaonline.com',
            port: '',
            pathname: 'content/dam/mm/**',
          },
        ],
      },
};

export default nextConfig;
