/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/,
        issuer: /\.[jt]sx?$/,
        use: [{ loader: "@svgr/webpack", options: { icon: true } }],
      },
      {
        test: /\.md$/,
        use: "raw-loader",
      }
    );
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
};

export default nextConfig;
