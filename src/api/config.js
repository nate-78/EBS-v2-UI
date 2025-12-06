// Configuration for API domains
const DOMAINS = {
  development: 'http://localhost:5213',
  production: 'https://api.production-domain.com' // TODO: Replace with actual production domain
};

export const API_BASE_URL = import.meta.env.DEV ? DOMAINS.development : DOMAINS.production;