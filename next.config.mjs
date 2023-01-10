import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  // target: 'serverless',
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Fixes npm packages (mdx) that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback.fs = false
    }
    return config
  },
  images: {
    unoptimized: true,
  },
}


const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
    providerImportSource: "@mdx-js/react",
  },
})



export default withMDX(nextConfig)
