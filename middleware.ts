export { default } from "next-auth/middleware";

// export const config = {
//   matcher: [
//     "/((?!login|static|.*\\..*|_next|api/cache/upload).*)",
//   ],
// };


// gpt-o1 middleware.ts

import { withAuth } from "next-auth/middleware";

/*
export default withAuth({
  callbacks: {
    authorized: ({ token }) => {
      // Allow access if the token exists
      return !!token;
    },
  },
});
*/ 

export const config = {
  matcher: [
    "/",
  ],
};
