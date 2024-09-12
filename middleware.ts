// middleware.ts

export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/does-not-match-anything"],
};
