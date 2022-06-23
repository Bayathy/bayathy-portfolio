/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      config.externals['node:fs'] = '@node/fs'
      config.externals['node:path'] = '@node/path'
      return config
   }
}

module.exports = nextConfig
