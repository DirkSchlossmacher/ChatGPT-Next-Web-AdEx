import { withAuth } from 'next-auth/middleware';
import { NextRequest } from 'next/server';

export default function middleware(req: NextRequest) {
  console.log(`Request URL: ${req.url}`);
  return withAuth(req);
}

export const config = {
  matcher: [
    "/((?!login|static|.*\\..*|_next|api/cache/upload).*)",
  ],
};
