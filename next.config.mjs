/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true
  },
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    // Configuración para pdfjs-dist
    if (!isServer) {
      config.resolve.alias.canvas = false;
      config.resolve.alias.encoding = false;
    }

    // Ignorar archivos de worker de pdfjs
    config.module.rules.push({
      test: /pdf\.worker\.(min\.)?js/,
      type: 'asset/resource',
      generator: {
        filename: 'static/worker/[hash][ext][query]',
      },
    });

    // Configuración adicional para pdfjs-dist
    config.resolve.alias = {
      ...config.resolve.alias,
      'pdfjs-dist/build/pdf.worker.entry': 'pdfjs-dist/build/pdf.worker.min.mjs',
    };

    // FIX para Object.defineProperty en pdf.mjs
    config.module.rules.push({
      test: /\.m?js$/,
      include: [
        /pdfjs-dist/,
        /react-pdf/
      ],
      type: 'javascript/auto',
    });

    return config;
  },
  // Deshabilitar optimización de paquetes para pdfjs
  experimental: {
    esmExternals: 'loose',
    serverComponentsExternalPackages: ['@prisma/client'],
  },
}

export default nextConfig

