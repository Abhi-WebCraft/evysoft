const menu_data = [
  {
    has_dropdown: false,
    title: "Home",
    link: "/",
  },

  {
    has_dropdown: true,
    title: "About Us",
    link: "/about-us",
  },
  {
    has_dropdown: true,
    title: "Our Services",
    link: "/our-services",
    // sub_menus: [
    //   { link: "/test-preparation-in-uae", title: "Test Preparation in UAE" },
    //   { link: "/ielts-test-prep-in-dubai", title: "IELTS Test Prep" },
    //   { link: "/sat-preparation-in-dubai", title: "SAT Preparation" },
    //   { link: "/ucat-preparation-in-dubai", title: "UCAT Preparation" },
      
    // ],
  },

  {
    has_dropdown: false,
    title: "Blog",
    link: "/blog/",
  },
  {
    has_dropdown: false,
    title: "Contact us",
    link: "/contact",
  },
];

export default menu_data;
