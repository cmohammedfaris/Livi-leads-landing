const path = require('path');

// Dynamically extract hostname and protocol from NEXT_PUBLIC_API_BASE_URL (works for any dev IP or prod domain)
const getApiRemotePattern = () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!apiUrl) return null;
  try {
    const parsed = new URL(apiUrl);
    const pattern = {
      protocol: parsed.protocol.replace(':', ''),
      hostname: parsed.hostname,
    };
    if (parsed.port) {
      pattern.port = parsed.port;
    }
    return pattern;
  } catch (e) {
    return null;
  }
};

const apiPattern = getApiRemotePattern();

// Production-safe trusted remote image patterns (avoids open wildcard ** SSRF vulnerability)
const remotePatterns = [
  { protocol: 'https', hostname: 'livileads.com' },
  { protocol: 'https', hostname: '*.livileads.com' },
  { protocol: 'https', hostname: '*.r2.dev' },
  { protocol: 'https', hostname: '*.r2.cloudflarestorage.com' },
  { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
  { protocol: 'https', hostname: 'firebasestorage.googleapis.com' },
];

if (apiPattern) {
  remotePatterns.push(apiPattern);
}

// In local development, also allow localhost
if (process.env.NODE_ENV !== 'production') {
  remotePatterns.push(
    { protocol: 'http', hostname: 'localhost' },
    { protocol: 'http', hostname: '127.0.0.1' },
  );
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',          // Required for Docker multi-stage build
  compress: true,                // Enable gzip compression
  poweredByHeader: false,        // Hide "X-Powered-By: Next.js" header (security)
  
  // Image optimization — dynamic API host + trusted CDNs only
  images: {
    remotePatterns,
  },

  // Production-safe headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
