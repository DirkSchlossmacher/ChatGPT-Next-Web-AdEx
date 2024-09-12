// middleware.ts

// export { default } from "next-auth/middleware";

// export const config = {
//   matcher: [
//     "/((?!login|static|.*\\..*|_next|api/cache/upload).*)",
//   ],
// };

// Temporäre Middleware, die alle Anfragen zulässt
import { NextResponse } from 'next/server';

export function middleware(req) {
  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
