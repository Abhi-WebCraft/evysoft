if (!process.env.WORDPRESS_API_URL) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `);
}

const { protocol, hostname, port } = new URL(process.env.WORDPRESS_API_URL);

/** @type {import('next').NextConfig} */ 
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    forceSwcTransforms: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'secure.gravatar.com',
        port: '', // Leave port blank unless explicitly needed
        pathname: '/avatar/**',
      },
      {
        protocol: 'https',
        hostname: 'blog.',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
  async redirects() {
    console.log("Redirects function is running!"); // Debug log
    return [
      {
        source: '/sat-preparation-in-uae',
        destination: '/sat-preparation-in-dubai',
        permanent: true, // Use true for a 308 redirect
      },
      {
        source: '/ielts-test-prep-in-uae',
        destination: '/ielts-test-prep-in-dubai',
        permanent: true, // Use true for a 308 redirect
      },
      {
        source: '/ucat-preparation-in-uae',
        destination: '/ucat-preparation-in-dubai',
        permanent: true, // Use true for a 308 redirect
      },
    ];
  },
};

export default nextConfig;
