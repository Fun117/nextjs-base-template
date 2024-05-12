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
import { Header } from "@/components/element/navigation";

export default function PageClientLayout({
  title,
  description,
}: {
  title: string;
  description?: string;
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

  return (
    <>
      <ClientComponent title={title} description={description} />
    </>
  );
}

function ClientComponent({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <>
      <div className="relative grow flex flex-col py-36">
        <main className="relative flex grow flex-col text-center w-full mx-auto px-4">
          <h1 className="font-bold text-5xl">{title}</h1>
          <p>{description}</p>
        </main>
      </div>
    </>
  );
}
