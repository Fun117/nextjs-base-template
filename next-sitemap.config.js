/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://nextjs-base-template.vercel.app",
    generateRobotsTxt: true,
    sitemapSize: 5000,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api'],
            },
        ],
    },
};