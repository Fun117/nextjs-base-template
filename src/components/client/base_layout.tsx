"use client";

// React
import React, { useEffect, useState } from "react";
import Link from "next/link";

// React bootstrap
import {
  Accordion,
  Badge,
  Button,
  Card,
  Col,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
  ProgressBar,
  Row,
} from "react-bootstrap";

// i18n
import { useLanguage, useTranslation } from "@/app/i18n/client";

// Elements
import { Loading, NetworkOffline } from "@/components/element/status";
import { Footer, Header } from "@/components/element/navigation";

export default function BasePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [NetworkStatus, setNetworkStatus] = useState<boolean>(true);
  const [isPageLoaded, setPageLoaded] = useState(false);
  useEffect(() => {
    const PageLoaded = async () => {
      try {
        if (typeof window !== "undefined") {
          window.addEventListener("offline", (e) => {
            setNetworkStatus(false);
          });
          window.addEventListener("online", (e) => {
            setNetworkStatus(true);
          });
        }
        setPageLoaded(true);
      } catch (error) {
        console.error("PageLoaded:", error);
      }
    };

    if (!isPageLoaded) {
      PageLoaded();
    }
  }, [isPageLoaded]);

  if (!NetworkStatus) {
    return <NetworkOffline />;
  }

  if (!isPageLoaded) {
    return <Loading />;
  }

  return <_BasePage>{children}</_BasePage>;
}

function _BasePage({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <main className="flex flex-col gap-3 w-auto max-w-7xl mx-auto px-1 py-2">
      {children}
    </main>
  );
}
