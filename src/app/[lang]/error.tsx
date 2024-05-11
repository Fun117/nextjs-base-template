"use client";

import { useLanguage } from "../i18n/client";
import { redirect } from "next/navigation";

type Props = {
  error: Error;
  reset(): void;
};

export default function Error({ error, reset }: Props) {
  const { language } = useLanguage();

  redirect(`/${language}/not-found`);
}
