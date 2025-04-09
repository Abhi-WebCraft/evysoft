const menu_data = [
  {
    has_dropdown: false,
    title: "Home",
    link: "/",
  },

  {
    has_dropdown: true,
    title: "Our Services",
    link: "#",
    sub_menus: [
      { link: "/education-consultants-in-dubai", title: "Education Consultants in Dubai" },
      { link: "/college-admissions-consultant-in-uae", title: " College Admissions Consultant in UAE" },
      { link: "/medicine-college-consultant-in-dubai", title: "Medicine College Consultant in Dubai" },
      { link: "/engineering-college-consultant-in-dubai", title: "Engineering College Consultant in Dubai" },
      { link: "/canadian-college-consultant-in-dubai", title: "Canadian College Consultant in Dubai" },
      { link: "/us-college-consultant-in-uae", title: "US College Consultant in UAE" },
      { link: "/uk-college-admission-consultant-in-uae", title: "UK College Admissions Consultant in UAE" },
    ],
  },
  {
    has_dropdown: true,
    title: "Test Prep",
    link: "#",
    sub_menus: [
      { link: "/test-preparation-in-uae", title: "Test Preparation in UAE" },
      { link: "/ielts-test-prep-in-dubai", title: "IELTS Test Prep" },
      { link: "/sat-preparation-in-dubai", title: "SAT Preparation" },
      { link: "/ucat-preparation-in-dubai", title: "UCAT Preparation" },
      
    ],
  },

  {
    has_dropdown: false,
   title: "Subject Tutoring",
    link: "/subject-tutoring-in-uae-dubai",
    // sub_menus: [
    //   { link: "/social-media-marketing", title: "Social Media Marketing" },
    //   { link: "/e-commerce", title: "E-Commerce" },
    //   { link: "/general-trading", title: "General Trading" },
    // ],
  },
  {
    has_dropdown: true,
    title: "About",
    link: "/about",
    // sub_menus: [
    //   { link: "/about", title: "About us" },
    //   { link: "/our-team", title: "Our Team" },
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
