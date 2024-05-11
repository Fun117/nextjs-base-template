"use client";

import { redirect } from "next/navigation";

// Render the default Next.js 404 page when a route
// is requested that doesn't match the middleware and
// therefore doesn't have a locale associated with it.

export default function NotFound() {
  redirect(`/ja/not-found`);
}
