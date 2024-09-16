// export { default } from "next-auth/middleware";

// export const config = {
//   matcher: [
//     "/((?!login|static|.*\\..*|_next|api/cache/upload).*)",
//   ],
// };


// gpt-o1 middleware.ts

import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ token }) => {
      // Allow access if the token exists
      console.log("token.email", token);
      return !!token;
    },
  },
  async middleware(req, res, next) {
    // Log the request method and URL
    console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);

    // Log the request payload if it's a POST or PUT request
    if (req.method === 'POST' || req.method === 'PUT') {
      let body = '';
      req.on('data', chunk => {
        body += chunk.toString();
      });
      req.on('end', () => {
        console.log('Request Payload:', body);
      });
    }

    // Call the next middleware or route handler
    next();
  }
});

export const config = {
  matcher: [
    // Exclude NextAuth auth routes, login page, static files, Next.js internals, and specific API routes
    "/((?!api/auth|login|static|.*\\..*|_next|api/cache/upload).*)",
  ],
};
