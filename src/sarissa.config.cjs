export default {
  siteTitle: "Stephen Zhang's Blog",
  siteDescription: "My personal blog. Don't expect too much.",
  favicon: "/favicon.ico",
  siteImagePath: "/images/coolcat.png",
  footer: "© 1967 - 2022 Stephen Zhang's Blog",
  dateFormat: "dd.MM.yyyy HH:mm",
  socialMedia: {
    github: "grififth",
  },
  pageSize: 5,
  categories: [],
  categorySettings: {
    order: "name", // name | count
    layout: "card", //button | card
    image: "",
    color: "btn-primary",
    countVisibility: true,
  },
  searchOptions: {
    includeScore: true,
    includeMatches: true,
    keys: [
      { name: "title", weight: 3 },
      { name: "description", weight: 2 },
    ],
  },
  i18n: {
    search: {
      placeholder: "Search post title and description...",
    },
    archive: {
      select: "Select Year",
    },
    page: "Page",
    resultFound: " result(s) found",
  },
};
