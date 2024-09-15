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
    authorized: (req) => {
      // Allow requests where a session exists
      return !!req.nextauth.token;
    },
  },
});

export const config = {
  matcher: [
    // Exclude NextAuth auth routes, login page, static files, assets, and API uploads
    "/((?!api/auth|login|static|.*\\..*|_next|api/cache/upload).*)",
  ],
};
