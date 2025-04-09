import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const { pathname } = request.nextUrl;

  const isAuthPage =
    pathname.startsWith("/sign-in") ||
    pathname.startsWith("/sign-up") ||
    pathname.startsWith("/verify");

  const isPublicPage = isAuthPage || pathname === "/";

  // ✅ Redirect logged-in users away from auth pages to /dashboard
  if (token && isPublicPage) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // ✅ Redirect unauthenticated users trying to access protected pages
  if (!token && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  // ✅ Let all other requests pass through
  return NextResponse.next();
}

export const config = {
  matcher: ["/sign-in", "/sign-up", "/dashboard/:path*", "/", "/verify/:path*"],
};
