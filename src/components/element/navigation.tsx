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

// types
interface type_navLink {
    label: string;
    url: string;
    target?: HTMLAttributeAnchorTarget | undefined;
}
interface type_navigation_contents {
    type: 'one' | 'group';
    label: string;
    url?: string;
    target?: HTMLAttributeAnchorTarget | undefined;
    links?: type_navLink[]
}

const navigation_contents: type_navigation_contents[] = [
    {
        type: 'one',
        label: 'Home',
        url: '/',
    },
    {
        type: 'one',
        label: 'About',
        url: '/about',
    },
    {
        type: 'group',
        label: 'Development',
        links: [
            {
                label: 'Author',
                url: 'https://fun117.vercel.app/',
                target: '_blank',
            },
            {
                label: 'Repository',
                url: 'https://github.com/Fun117/nextjs-base-template',
                target: '_blank',
            },
        ],
    },
]

export function Header() {
    const { language } = useLanguage();
    const { t } = useTranslation(language);

    return (
        <>
        <Navbar expand="lg" bg='primary' data-bs-theme="dark">
            <Container fluid>
                <Navbar.Brand href={LPass(`/`)}>
                    <Image
                    alt="Img"
                    src="/brand/vercel/vercel-icon-light.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top w-auto h-auto mr-2"
                    />
                    <span className='text-base font-bold'>{t(`Next.js base`)}</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        {navigation_contents.map((content, idx) => (
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
                            <div className='flex items-center text-white hover:text-blue-200 transition-all duration-300 ease-in-out'>
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