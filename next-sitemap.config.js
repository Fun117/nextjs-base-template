/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://nextjs-template.vercel.app",
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