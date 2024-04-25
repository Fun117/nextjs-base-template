import { NextRequest, NextResponse } from 'next/server';
import Negotiator from 'negotiator';
import { defaultLanguage, availableLanguages } from '@/app/i18n/settings';

const getNegotiatedLanguage = (
    headers: Negotiator.Headers,
): string | undefined => {
    return new Negotiator({ headers }).language([...availableLanguages]);
};

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.html|.*\\.xml|.*\\.txt|.*\\.svg|.*\\.png|.*\\.ico|.*\\.webp$).*)'],
};

export function middleware(request: NextRequest) {
    const headers = {
        'accept-language': request.headers.get('accept-language') ?? '',
    };
    const preferredLanguage = getNegotiatedLanguage(headers) || defaultLanguage;

    const pathname = request.nextUrl.pathname;

    // Check if the pathname starts with a valid two-letter language code
    const isValidLanguagePath = availableLanguages.some(
        (lang) => lang.length === 2 && (pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`),
    );

    if (!isValidLanguagePath) {
        if (preferredLanguage !== defaultLanguage) {
            return NextResponse.redirect(
                new URL(`/${preferredLanguage}${pathname}`, request.url),
            );
        } else {
            const newPathname = `/${defaultLanguage}${pathname}`;
            return NextResponse.rewrite(new URL(newPathname, request.url));
        }
    }

    return NextResponse.next();
}
