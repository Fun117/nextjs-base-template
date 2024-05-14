"use client";

// React
import React from "react";

// image svg
import { Languages } from "lucide-react";

// next.js
import Image from "next/image";
import Link from "next/link";

// shadcn/ui
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// bootstrap elements
import {
  Navbar,
  Offcanvas,
  Container,
  Nav,
  NavDropdown,
} from "react-bootstrap";

// i18n
import { useLanguage, useTranslation } from "@/app/i18n/client";
import { ChangeLang, LPass } from "../link";

// next-theme
import { GetTheme, ThemeSwitch } from "../client/theme-toggle";
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
import useScroll from "@/lib/hooks/use-scroll";

export function Header() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  const scrolled = useScroll(50);

  const SetSelectLanguage = (value: string) => {
    window.location.href = ChangeLang(value);
  };

  const NavBrandLogo =
    GetTheme() === "light"
      ? _config.navigation?.ui?.logo?.url_dark ||
        _config.navigation?.ui?.logo?.url ||
        "/favicon.ico"
      : _config.navigation?.ui?.logo?.url || "/favicon.ico";

  return (
    <div className="backdrop-blur-xl">
      <Navbar
        expand={_config.navigation.ui.style?.expand || "lg"}
        bg={_config.navigation.ui.style?.bg || "primary"}
        data-bs-theme={_config.navigation.ui.style?.dataBsTheme}
        className={`${
          _config.navigation.ui.style?.bg === "none" &&
          `${
            scrolled
              ? "border-b border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/50"
              : "bg-white/0 dark:bg-black/0"
          }`
        }`}
      >
        <Container fluid>
          <Navbar.Brand href={_config.navigation?.ui?.home_url || "/"}>
            {_config.navigation?.ui?.logo?.url && (
              <Image
                alt={_config.navigation?.ui?.logo?.alt || "Logo"}
                src={`${NavBrandLogo}`}
                width={30}
                height={30}
                className="d-inline-block align-top w-auto h-auto mr-2"
              />
            )}
            {_config.navigation?.ui?.label && (
              <span className="text-base font-bold">
                {t(_config.navigation.ui.label)}
              </span>
            )}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${
              _config.navigation.ui.style?.expand || "lg"
            }`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${
              _config.navigation.ui.style?.expand || "lg"
            }`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id={`offcanvasNavbarLabel-expand-${
                  _config.navigation.ui.style?.expand || "lg"
                }`}
              >
                {_config.meta.title}
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {_config.navigation.contents.map((content, idx) => (
                  <React.Fragment key={idx}>
                    {content.type === "group" ? (
                      <NavDropdown
                        title={t(content.label)}
                        id={`offcanvasNavbarDropdown-expand-${idx}`}
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
                        href={LPass(content.url || `/`)}
                        target={content.target}
                        className="nav-link"
                      >
                        {t(content.label)}
                      </Link>
                    )}
                  </React.Fragment>
                ))}
              </Nav>
              <div className="d-flex items-center gap-2">
                <Nav className="my-2 my-lg-0" navbarScroll>
                  <div className="flex items-center transition-all duration-300 ease-in-out">
                    <Select
                      defaultValue={language}
                      onValueChange={SetSelectLanguage}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a language" />
                      </SelectTrigger>
                      <SelectContent className="z-[1046]">
                        <SelectGroup>
                          <SelectLabel className="flex items-center">
                            <Languages className="font-bold pr-1" />
                            {t("Language")}
                          </SelectLabel>
                          {_config.i18n.locales.map((lang, idx) => (
                            <SelectItem key={idx} value={lang}>
                              {_config.i18n.localeConfigs[lang].label}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </Nav>
                <ThemeSwitch />
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export function Footer() {
  const { language } = useLanguage();
  const { t } = useTranslation(language);

  return (
    <div className="pt-10">
      <footer className="border-t border-neutral-200 dark:border-neutral-700 flex flex-col w-full transition-all duration-100 ease-in-out">
        <div className="flex justify-between flex-wrap px-5 md:px-20 py-5 md:py-10">
          <div className="flex flex-col gap-4">
            <Link
              href={_config.author.url || "/"}
              target="_blank"
              className="flex items-center"
            >
              {_config.footer?.ui.logo?.url && (
                <Image
                  src={`${_config.footer?.ui.logo?.url || "/favicon.png"}`}
                  alt={t(_config.footer?.ui.logo?.alt || "Footer Logo")}
                  width={40}
                  height={40}
                  className={`w-[40px] h-[40px] hover:scale-[102%] hover:shadow-lg active:scale-[98%] active:shadow transition-all duration-300 ease-in-out ${
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
                  target="_blank"
                  className="p-[6px] border rounded-lg shadow-sm hover:shadow-lg hover:scale-[102%] active:shadow active:scale-[95%] transition-all duration-300 ease-in-out"
                >
                  <FaGithub className="text-xl" />
                </Link>
              )}
              {_config.author.socialAccounts?.twitter && (
                <Link
                  aria-label="twitter"
                  href={_config.author.socialAccounts?.twitter}
                  target="_blank"
                  className="p-[6px] border rounded-lg shadow-sm hover:shadow-lg hover:scale-[102%] active:shadow active:scale-[95%] transition-all duration-300 ease-in-out"
                >
                  <FaTwitter className="text-xl" />
                </Link>
              )}
              {_config.author.socialAccounts?.youtube && (
                <Link
                  aria-label="youtube"
                  href={_config.author.socialAccounts?.youtube}
                  target="_blank"
                  className="p-[6px] border rounded-lg shadow-sm hover:shadow-lg hover:scale-[102%] active:shadow active:scale-[95%] transition-all duration-300 ease-in-out"
                >
                  <FaYoutube className="text-xl" />
                </Link>
              )}
              {_config.author.socialAccounts?.reddit && (
                <Link
                  aria-label="reddit"
                  href={_config.author.socialAccounts?.reddit}
                  target="_blank"
                  className="p-[6px] border rounded-lg shadow-sm hover:shadow-lg hover:scale-[102%] active:shadow active:scale-[95%] transition-all duration-300 ease-in-out"
                >
                  <FaReddit className="text-xl" />
                </Link>
              )}
              {_config.author.socialAccounts?.discord && (
                <Link
                  aria-label="discord"
                  href={_config.author.socialAccounts?.discord}
                  target="_blank"
                  className="p-[6px] border rounded-lg shadow-sm hover:shadow-lg hover:scale-[102%] active:shadow active:scale-[95%] transition-all duration-300 ease-in-out"
                >
                  <FaDiscord className="text-xl" />
                </Link>
              )}
              {_config.author.socialAccounts?.email && (
                <Link
                  aria-label="email"
                  href={`mailto:${_config.author.socialAccounts?.email}`}
                  target="_blank"
                  className="p-[6px] border rounded-lg shadow-sm hover:shadow-lg hover:scale-[102%] active:shadow active:scale-[95%] transition-all duration-300 ease-in-out"
                >
                  <MdAlternateEmail className="text-xl" />
                </Link>
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-10 mt-5 md:mt-0">
            {_config.footer?.contents.map((group, index) => (
              <nav key={index} className="flex flex-col gap-4">
                <h1 className="font-semibold text-base">{t(group.label)}</h1>
                <ul className="flex flex-col gap-2">
                  {group.links.map((content, index2) => (
                    <li key={index2}>
                      <Link
                        href={content.url}
                        target={content.target}
                        className="hover:underline"
                      >
                        {t(content.label)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        <div className="border-t border-neutral-200 dark:border-neutral-700 flex items-center justify-center w-auto p-3 mx-[5%]">
          <span>{t("site:all-rights-reserved")}</span>
        </div>
      </footer>
    </div>
  );
}
