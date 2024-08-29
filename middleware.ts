import { NextRequest } from 'next/server';
import authMiddleware from 'next-auth/middleware';

export function middleware(req: NextRequest) {
  console.log(`Request URL: ${req.url}`);
  return authMiddleware(req);
}

export const config = {
  matcher: [
    "/((?!login|static|.*\\..*|_next|api/cache/upload).*)",
  ],
};
