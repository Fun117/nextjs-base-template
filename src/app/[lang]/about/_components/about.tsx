"use client";

// Layout
import BasePageLayout from "@/components/client/base_layout";

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

const modules_card = [
  {
    title: "Next.js",
    description:
      "Next.js by Vercel is the full-stack React framework for the web.",
    url: "https://nextjs.org/",
    image_url: "/brand/nextjs/twitter-card.png",
    version: `Latest`,
  },
  {
    title: "shadcn/ui",
    description:
      "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",
    url: "https://ui.shadcn.com/",
    image_url: "/img/modules/shadcn-ui/banner.jpg",
    version: `Latest`,
  },
  {
    title: "next-themes",
    description:
      "Perfect Next.js dark mode in 2 lines of code. Support System preference and any other theme with no flashing",
    url: "https://github.com/pacocoursey/next-themes",
    image_url: "/brand/nextjs/twitter-card.png",
    version: `Latest`,
  },
  {
    title: "React Bootstrap",
    description: "The most popular front-end framework, rebuilt for React",
    url: "https://react-bootstrap.netlify.app/",
    image_url: "/img/modules/react-bootstrap/banner.png",
    version: `Latest`,
  },
  {
    title: "i18next",
    description:
      "i18next is a very popular internationalization framework for browser or any other javascript environment (eg. Node.js, Deno).",
    url: "https://www.i18next.com/",
    image_url: "/img/modules/i18next/banner.png",
    version: `Latest`,
  },
  {
    title: "Lucide React",
    description: "Beautiful & consistent icon toolkit made by the community.",
    url: "https://lucide.dev/",
    image_url: "/img/modules/lucide-react/banner.png",
    version: `Latest`,
  },
  {
    title: "Custom Sitemap Generation",
    description:
      "Automatically generate sitemaps tailored for different languages.",
    url: "https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap",
    image_url: "/brand/nextjs/docs/sitemap-banner.png",
    version: `Latest`,
  },
];

export default function PageClientLayout_About() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <BasePageLayout>
      <div className="flex flex-col gap-2 text-center py-5">
        <h1 className="font-bold text-5xl">{t("Next.js base template")}</h1>
        <p>
          {t(
            "Do you have experience creating websites? You can get started more easily with Next.js using this base template. The template comes with features such as theme switching, i18n (internationalization), and a sitemap. Additionally, React Bootstrap is used to simplify UI development."
          )}
        </p>
      </div>
      <Row xs={1} md={2} className="g-4">
        {modules_card.map((card, idx) => (
          <Col key={idx} className="flex">
            <Link
              target="_block"
              href={card.url}
              className="flex no-underline w-full h-full"
            >
              <Card className="w-full h-full">
                <div
                  className="w-full h-[260px] bg-cover bg-no-repeat bg-center rounded-[0.375rem] rounded-b-none"
                  style={{ backgroundImage: `url(${card.image_url})` }}
                />
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.description}</Card.Text>
                  <Badge bg="primary">{card.version}</Badge>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </BasePageLayout>
  );
}
