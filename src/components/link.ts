import type { UrlObject } from "url";

import { useLanguage } from "@/app/i18n/client";

export function LPass(pass: string | UrlObject) {
  const lang = useLanguage().language;

  if (typeof pass === "string" && !pass.startsWith("/")) {
    return pass;
  }

  let path: string;

  if (typeof pass === "object") {
    path = pass.pathname || "/";
  } else {
    path = pass;
  }

  return `/${lang}${path}`;
}

export function ChangeLang(lang: string) {
  if (typeof window !== "undefined") {
    const path = window.location.pathname;

    // サイト内リンク以外のURLには適用しない
    if (!path.startsWith("/")) {
      return path;
    }

    if (path.length < 4) {
      return `/${lang}`;
    } else {
      const index = path.indexOf("/", 1); // 最初の '/' の位置を取得（2番目の '/' から）
      const newPath = index !== -1 ? path.substring(index) : path; // 最初の '/' 以降の部分を取得

      return `/${lang}${newPath}`;
    }
  }

  return "./";
}
