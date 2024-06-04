/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(mp3|wav|ogg)$/,
      loader: "file-loader",
      options: {
        name: "[name].[hash].[ext]",
        outputPath: "public/sounds/",
      },
    });
    return config;
  },
};

export default nextConfig;
