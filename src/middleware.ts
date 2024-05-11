import { NextRequest, NextResponse } from "next/server";
import Negotiator from "negotiator";
import { defaultLanguage, availableLanguages } from "@/app/i18n/settings";
import _config from "../base.config";

const getNegotiatedLanguage = (
  headers: Negotiator.Headers
): string | undefined => {
  return new Negotiator({ headers }).language([...availableLanguages]);
};

// The page's `config` must be an object initialized directly when being exported and not modified dynamically.
// The `config` object must only contain static constant literals without expressions.
// Docs: https://nextjs.org/docs/messages/invalid-page-config
export const config = {
  matcher: ["/", `/(ja|en)/:path*`, "/((?!_next|_vercel|.*\\..*).*)"],
};

export function middleware(request: NextRequest) {
  const headers = {
    "accept-language": request.headers.get("accept-language") ?? "",
  };
  const preferredLanguage = getNegotiatedLanguage(headers) || defaultLanguage;

  const pathname = request.nextUrl.pathname;

  // Check if the pathname starts with a valid two-letter language code
  const isValidLanguagePath = availableLanguages.some(
    (lang) =>
      lang.length === 2 &&
      (pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`)
  );

  if (!isValidLanguagePath) {
    if (preferredLanguage !== defaultLanguage) {
      return NextResponse.redirect(
        new URL(`/${preferredLanguage}${pathname}`, request.url)
      );
    } else {
      const newPathname = `/${defaultLanguage}${pathname}`;
      return NextResponse.rewrite(new URL(newPathname, request.url));
    }
  }

  return NextResponse.next();
}
