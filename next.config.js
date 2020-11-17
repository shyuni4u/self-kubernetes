module.exports = {
  trailingSlash: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/amd/dashboard1': { page: '/amd/dashboard1' },
      '/amd/dashboard2': { page: '/amd/dashboard2' },
      '/nvidia/dashboard': { page: '/nvidia/dashboard' },
      '/total/manual': { page: '/total/manual' },
      '/total/dashboard': { page: '/total/dashboard' }
    };
  }
}