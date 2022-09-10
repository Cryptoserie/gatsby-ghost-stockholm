module.exports = {
  siteUrl: `https://cryptoserie.com`, // Do not include a trailing slash.
  siteRss: `https://cryptoserie.com/rss.xml`,
  siteMap: `https://cryptoserie.com/sitemap.xml`,
  siteAdminUrl: `https://cryptoserie.digitalpress.blog`,
  postsPerPage: 10, // Number of posts shown on paginated pages (changes this requires sometimes to delete the cache)
  siteTitleMeta: `Hackers and Slackers`, // This allows an alternative site title for metadata for pages.
  siteDescriptionMeta: `Community of hackers obsessed with data science, data engineering, and analysis. Openly pushing a pro-robot agenda.`, // This allows an alternative site description for meta data for pages.
  siteCopyright: `©2021 Hackers and Slackers, All Rights Reserved.`,
  shortTitle: `Hackers and Slackers`, // Used for App manifest e.g. Mobile Home Screen
  backgroundColor: `#ecf1f9`, // Used for Offline Manifest
  themeColor: `#0297f6`, // Used for Offline Manifest
  siteIcon: `favicon.png`,
  introVideo: `https://vimeo.com/265866802`, // OPTIONAL: Video URL to be used in "about" page
  categories: [
    `software`,
    `engineering`,
    `data`,
    `data science`,
    `data engineering`,
  ],
  lang: `en-US`,
  images: {
    buyMeACoffee: `/images/buymeacoffee.svg`,
    shareImage: `/images/share.png`,
    shareImageWidth: 1000, // Change to the width of your default share image
    shareImageHeight: 523, // Change to the height of your default share image
  },
  lambda: {
    scrape: `https://cryptoserie.com/.netlify/functions/scrape?url=`,
    auth: `https://cryptoserie.com/.netlify/functions/auth`,
  },
  creator: {
    name: `Todd Birchard`,
    twitter: `@toddrbirchard`,
  },
  links: {
    twitter: `https://twitter.com/hackersslackers`,
    buyMeACoffee: `https://buymeacoff.ee/hackersslackers/`,
    githubOrg: `https://github.com/hackersandslackers/`,
  },
}
