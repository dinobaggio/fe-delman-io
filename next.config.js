/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'delman.io',
                pathname: '/contents/delman%20data%20lab%20orange%20color.webp'
            }
        ]
    }
}

module.exports = nextConfig
