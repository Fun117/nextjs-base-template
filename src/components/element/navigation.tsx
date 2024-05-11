"use client";

// React
import React, { HTMLAttributeAnchorTarget, useEffect, useState } from "react";

// image svg
import { Languages } from "lucide-react";

// next.js
import Image from "next/image";
import Link from "next/link";

// bootstrap elements
import {
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
import { ChangeLang, LPass } from "../link";

// next-theme
import { ThemeSwitch } from "../client/theme-toggle";
import _config from "../../../base.config";

// React Icons
import {
  FaDiscord,
  FaGithub,
  FaReddit,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

export function Header() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <>
      <Navbar
        expand={_config.navigation.ui.style?.expand || `lg`}
        bg={_config.navigation.ui.style?.bg || `primary`}
        data-bs-theme={_config.navigation.ui.style?.dataBsTheme}
        className={`${
          _config.navigation.ui.style?.bg === "none" &&
          `backdrop-blur-md border-b dark:border-neutral-700`
        }`}
      >
        <Container fluid className="text-[var(--bs-navbar-brand-color)]">
          <Navbar.Brand href={LPass(_config.navigation.ui.home_url || `/`)}>
            {_config.navigation.ui.logo && (
              <Image
                alt={_config.navigation.ui.logo.alt || `Logo`}
                src={`${_config.navigation.ui.logo.url || `/favicon.ico`}`}
                width="30"
                height="30"
                className="d-inline-block align-top w-auto h-auto mr-2"
              />
            )}
            {_config.navigation.ui.label && (
              <span className="text-base font-bold">
                {t(_config.navigation.ui.label || `My site`)}
              </span>
            )}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {_config.navigation.contents.map((content, idx) => (
                <React.Fragment key={idx}>
                  {content.type === "group" ? (
                    <NavDropdown
                      title={t(content.label)}
                      id={`navbarDropdown_${idx}`}
                    >
                      {content.links?.map((link, index) => (
                        <NavDropdown.Item
                          key={index}
                          href={LPass(link.url)}
                          target={link.target}
                        >
                          {t(link.label)}
                        </NavDropdown.Item>
                      ))}
                    </NavDropdown>
                  ) : (
                    <Link
                      href={LPass(`${content.url}`)}
                      target={content.target}
                      className="nav-link"
                    >
                      {t(content.label)}
                    </Link>
                  )}
                </React.Fragment>
              ))}
            </Nav>
            <div className="flex items-center gap-2">
              <Nav className=" my-2 my-lg-0" navbarScroll>
                <div className="flex items-center transition-all duration-300 ease-in-out">
                  <Languages className="font-bold pr-1" />
                  <select
                    className="bg-transparent focus:outline-none"
                    defaultValue={`${useLanguage().language}`}
                    aria-label={`select language`}
                    onChange={(e) =>
                      (window.location.href = `${ChangeLang(e.target.value)}`)
                    }
                  >
                    {_config.i18n.locales.map((lang, idx) => (
                      <option key={idx} value={lang}>
                        {_config.i18n.localeConfigs[lang].label}
                      </option>
                    ))}
                  </select>
                </div>
              </Nav>
              <ThemeSwitch />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export function Footer() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <div className="pt-10">
      <footer className="border-t flex flex-col w-full transition-all duration-100 ease-in-out">
        <div className="flex justify-between flex-row flex-wrap px-5 md:px-20 py-5 md:py-10">
          <div className="flex flex-col gap-4 mr-5">
            <Link
              href={_config.author.url || `/`}
              target="_block"
              className="flex items-center"
            >
              {_config.footer?.ui.logo?.url && (
                <Image
                  src={`${_config.footer?.ui.logo?.url || `/favicon.png`}`}
                  alt={`${t(
                    `${_config.footer?.ui.logo?.alt || "Footer Logo"}`
                  )}`}
                  width={40}
                  height={40}
                  className={`text-[11px] w-[40px] h-[40px] hover:scale-[102%] hover:shadow-lg active:scale-[98%] active:shadow transition-all duration-300 ease-in-out ${
                    _config.footer?.ui.logo?.css || ""
                  }`}
                />
              )}
              {_config.footer?.ui.label && (
                <p className="font-bold text-base ml-2">
                  {t(_config.footer?.ui.label)}
                </p>
              )}
            </Link>
            <div className="flex gap-2">
              {_config.author.socialAccounts?.github && (
                <Link
                  aria-label="github"
                  href={_config.author.socialAccounts?.github}
                  target="_block"
                  className="border-neutral-300/40 p-[6px] border rounded-lg shadow-sm hover:shadow-lg hover:scale-[102%] active:shadow active:scale-[95%] transition-all duration-300 ease-in-out"
                >
                  <FaGithub className="text-xl" />
                </Link>
              )}
              {_config.author.socialAccounts?.twitter && (
                <Link
                  aria-label="twitter"
                  href={_config.author.socialAccounts?.twitter}
                  target="_block"
                  className="border-neutral-300/40 p-[6px] border rounded-lg shadow-sm hover:shadow-lg hover:scale-[102%] active:shadow active:scale-[95%] transition-all duration-300 ease-in-out"
                >
                  <FaTwitter className="text-xl" />
                </Link>
              )}
              {_config.author.socialAccounts?.youtube && (
                <Link
                  aria-label="youtube"
                  href={_config.author.socialAccounts?.youtube}
                  target="_block"
                  className="border-neutral-300/40 p-[6px] border rounded-lg shadow-sm hover:shadow-lg hover:scale-[102%] active:shadow active:scale-[95%] transition-all duration-300 ease-in-out"
                >
                  <FaYoutube className="text-xl" />
                </Link>
              )}
              {_config.author.socialAccounts?.reddit && (
                <Link
                  aria-label="reddit"
                  href={_config.author.socialAccounts?.reddit}
                  target="_block"
                  className="border-neutral-300/40 p-[6px] border rounded-lg shadow-sm hover:shadow-lg hover:scale-[102%] active:shadow active:scale-[95%] transition-all duration-300 ease-in-out"
                >
                  <FaReddit className="text-xl" />
                </Link>
              )}
              {_config.author.socialAccounts?.discord && (
                <Link
                  aria-label="discord"
                  href={_config.author.socialAccounts?.discord}
                  target="_block"
                  className="border-neutral-300/40 p-[6px] border rounded-lg shadow-sm hover:shadow-lg hover:scale-[102%] active:shadow active:scale-[95%] transition-all duration-300 ease-in-out"
                >
                  <FaDiscord className="text-xl" />
                </Link>
              )}
              {_config.author.socialAccounts?.email && (
                <Link
                  aria-label="email"
                  href={_config.author.socialAccounts?.email}
                  target="_block"
                  className="border-neutral-300/40 p-[6px] border rounded-lg shadow-sm hover:shadow-lg hover:scale-[102%] active:shadow active:scale-[95%] transition-all duration-300 ease-in-out"
                >
                  <MdAlternateEmail className="text-xl" />
                </Link>
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-10 mt-5 md:mt-0">
            {_config.footer?.contents.map((group, index: number) => {
              return (
                <nav key={index} className="flex flex-col gap-4">
                  <h1 className="font-semibold text-base">{t(group.label)}</h1>
                  <ul className="flex flex-col gap-2">
                    {group.links.map((content, index2: number) => {
                      return (
                        <li key={index2}>
                          <Link
                            href={content.url}
                            target={content.target}
                            className="hover:underline"
                          >
                            {t(content.label)}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              );
            })}
          </div>
        </div>
        <div className="border-neutral-200 border-t flex items-center justify-center w-auto p-3 mx-[5%]">
          <span>
            &copy; {_config.year}
            {` `}
            {t(`site:all-rights-reserved`)}
          </span>
        </div>
      </footer>
    </div>
  );
}
