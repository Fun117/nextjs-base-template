'use client'

// React
import React, { HTMLAttributeAnchorTarget, useEffect, useState } from 'react';

// image svg
import { Languages } from 'lucide-react';

// next.js
import Image from 'next/image';
import Link from 'next/link';

// bootstrap elements
import { Button, Card, Col, Container, Form, Nav, NavDropdown, Navbar, ProgressBar, Row } from 'react-bootstrap';

// i18n
import { useLanguage, useTranslation } from '@/app/i18n/client';
import { ChangeLang, LPass } from '../link';

// next-theme
import { ThemeSwitch } from '../client/theme-toggle';
import _config from '../../../base.config';

export function Header() {
    const { language } = useLanguage();
    const { t } = useTranslation(language);

    return (
        <>
        <Navbar expand={_config.navigation.ui.style?.expand || `lg`} bg={_config.navigation.ui.style?.bg || `primary`} data-bs-theme={_config.navigation.ui.style?.dataBsTheme} className={`${_config.navigation.ui.style?.bg === 'none' && `backdrop-blur-md border-b dark:border-neutral-700`}`}>
            <Container fluid className='text-[var(--bs-navbar-brand-color)]'>
                <Navbar.Brand href={LPass(_config.navigation.ui.home_url || `/`)}>
                    {_config.navigation.ui.logo &&
                        <Image
                        alt={_config.navigation.ui.logo.alt || `Logo`}
                        src={`${_config.navigation.ui.logo.url || `/favicon.ico`}`}
                        width="30"
                        height="30"
                        className="d-inline-block align-top w-auto h-auto mr-2"
                        />
                    }
                    {_config.navigation.ui.label &&
                        <span className='text-base font-bold'>{t(_config.navigation.ui.label || `My site`)}</span>
                    }
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        {_config.navigation.contents.map((content, idx) => (
                            <React.Fragment key={idx}>
                                {content.type === 'group' ? (
                                    <NavDropdown title={t(content.label)} id={`navbarDropdown_${idx}`}>
                                        {content.links?.map((link, index) => (
                                            <NavDropdown.Item key={index} href={LPass(link.url)} target={link.target}>
                                                {t(link.label)}
                                            </NavDropdown.Item>
                                        ))}
                                    </NavDropdown>
                                ) : (
                                    <Link href={LPass(`${content.url}`)} target={content.target} className='nav-link'>
                                        {t(content.label)}
                                    </Link>
                                )}
                            </React.Fragment>
                        ))}
                    </Nav>
                    <div className='flex items-center gap-2'>
                        <Nav
                            className=" my-2 my-lg-0"
                            navbarScroll
                        >
                            <div className='flex items-center transition-all duration-300 ease-in-out'>
                                <Languages className='font-bold pr-1'/>
                                <select className='bg-transparent focus:outline-none' defaultValue={`${useLanguage().language}`} aria-label={`select language`} onChange={e => window.location.href = `${ChangeLang(e.target.value)}`}>
                                    {_config.i18n.locales.map((lang, idx) => (
                                        <option key={idx} value={lang}>
                                        {_config.i18n.localeConfigs[lang].label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </Nav>
                        <ThemeSwitch/>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
}