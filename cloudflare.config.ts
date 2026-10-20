import { defineConfig } from 'cf/config';
export default defineConfig({
  settings: { accountId: process.env.CLOUDFLARE_ACCOUNT_ID || '00000000000000000000000000000000' },
  worker: {
    name: 'madanpark-portfolio',
    compatibilityDate: '2026-10-15',
    domains: ['madanpark.com', 'www.madanpark.com'],
    assets: { notFoundHandling: '404-page', htmlHandling: 'auto-trailing-slash' },
    observability: { enabled: true, traces: { enabled: true } }
  }
});
