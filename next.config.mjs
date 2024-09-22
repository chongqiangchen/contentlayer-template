import { createContentlayerPlugin } from "next-contentlayer2"

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    redirects() {
        return [
            {
                source: "/",
                destination: "/docs",
                permanent: true,
            }
        ]
    },
};

const withContentlayer = createContentlayerPlugin({
    // Additional Contentlayer config options
})

export default withContentlayer(nextConfig);
