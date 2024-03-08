import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const isAuthRoute = ["/auth/login"].includes(
    request.nextUrl.pathname
  );
  const isPrivateRoute = ["/settings"].includes(request.nextUrl.pathname);

  const token = request.cookies.get("ACHIRD_TOKEN")?.value;

  // TO DO: VALIDATE TOKEN
  const tokenIsValid = !!token;

  const isAuthenticated = token && tokenIsValid;

  if (isAuthenticated && (request.nextUrl.pathname === "/" || isAuthRoute)) {
    return NextResponse.redirect(new URL("/settings", request.url));
  }

  if (!isAuthenticated && isPrivateRoute) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/settings", "/auth/login", "/"],
};
