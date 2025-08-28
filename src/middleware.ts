import type { MiddlewareHandler } from 'astro';

// Enforce a single canonical origin and clean URLs
export const onRequest: MiddlewareHandler = async (context, next) => {
  const request = context.request;
  const url = new URL(request.url);

  const host = url.hostname.toLowerCase();
  const forwardedProto = request.headers.get('x-forwarded-proto');

  // 1) Force apex domain (no www)
  if (host === 'www.skillion.app') {
    url.hostname = 'skillion.app';
    url.protocol = 'https:';
    return Response.redirect(url.toString(), 308);
  }

  // 2) Force https in production (vercel sets x-forwarded-proto)
  if ((forwardedProto === 'http' || url.protocol === 'http:') && host.endsWith('skillion.app')) {
    url.protocol = 'https:';
    return Response.redirect(url.toString(), 308);
  }

  // 3) Trailing slash normalization for language route: /es -> /es/
  if (url.pathname === '/es') {
    url.pathname = '/es/';
    return Response.redirect(url.toString(), 308);
  }

  return next();
};


