// export { default } from "next-auth/middleware";

// export const config = {
//   matcher: [
//     "/((?!login|static|.*\\..*|_next|api/cache/upload).*)",
//   ],
// };


// gpt-o1 middleware.ts

import { NextResponse } from 'next/server';
import { withAuth } from 'next-auth/middleware';

// Custom middleware to log requests
export function middleware(req) {
  console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);

  if (req.method === 'POST' || req.method === 'PUT') {
    req.clone().json().then(body => {
      console.log('Request Payload:', body);
    }).catch(() => {
      console.log('Failed to parse request payload');
    });
  }

  return NextResponse.next();
}

// Authentication middleware
export default withAuth({
  callbacks: {
    authorized: ({ token }) => {
      console.log("token.email", token?.email);
      return !!token;
    },
  },
});

export const config = {
  matcher: [
    // Exclude NextAuth auth routes, login page, static files, Next.js internals, and specific API routes
    "/((?!api/auth|login|static|.*\\..*|_next|api/cache/upload).*)",
  ],
};
