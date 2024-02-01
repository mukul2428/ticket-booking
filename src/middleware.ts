import { NextResponse, NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === "/sign-up";

  const token = request.cookies.get("token")?.value || "";
  // if current route is signup and token is present then restrict that
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
  //restrict from moving to /seller and /buyer page
  if (path === "/seller" || path === "/buyer") {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/sign-up", "/seller", "/buyer"],
};
