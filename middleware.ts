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
      console.log("token", token);
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
