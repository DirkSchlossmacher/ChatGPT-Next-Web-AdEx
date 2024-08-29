import { NextRequest } from 'next/server';
import { default as authMiddleware } from 'next-auth/middleware';

export default function middleware(req: NextRequest) {
  console.log(`Request URL: ${req.url}`);
  return authMiddleware(req);
}

export const config = {
  matcher: [
    "/((?!login|static|.*\\..*|_next|api/cache/upload).*)",
  ],
};
