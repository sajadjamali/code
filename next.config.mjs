/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
            },
            {
                protocol: 'http', // Use http for localhost (HTTPS might not be set up)
                hostname: 'localhost',
            },
        ],
    },
};

export default nextConfig;
