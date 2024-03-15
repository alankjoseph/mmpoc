/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'img-mm.manoramaonline.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
