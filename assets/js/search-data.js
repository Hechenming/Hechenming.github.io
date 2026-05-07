// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-chenming-he",
    title: "Chenming He",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-our-paper-mmplace-was-accepted-by-ra-l-2024",
          title: 'Our paper mmPlace  was accepted by RA-L 2024!',
          description: "",
          section: "News",},{id: "news-our-paper-mmovd-was-accepted-by-mobicom-2024",
          title: 'Our paper mmOVD  was accepted by MobiCom 2024!',
          description: "",
          section: "News",},{id: "news-our-paper-mmtunnel-was-accepted-by-mobicom-2025",
          title: 'Our paper mmTunnel was accepted by MobiCom 2025!',
          description: "",
          section: "News",},{id: "news-our-paper-gr-fall-was-accepted-by-ubicomp-2025",
          title: 'Our paper GR-Fall  was accepted by UbiComp 2025!',
          description: "",
          section: "News",},{id: "news-our-paper-mmmuse-was-accepted-by-ubicomp-2026",
          title: 'Our paper mmMUSE  was accepted by UbiComp 2026!',
          description: "",
          section: "News",},{id: "news-our-paper-flowgait-and-feelwave-have-been-accepted-by-chi-2026",
          title: 'Our paper FlowGait and FeelWave  have been accepted by CHI 2026!',
          description: "",
          section: "News",},{id: "news-our-paper-bsense-has-been-accepted-by-mobisys-2026",
          title: 'Our paper BSense has been accepted by MobiSys 2026!',
          description: "",
          section: "News",},{id: "news-our-paper-mmovd-has-been-accepted-by-tmc",
          title: 'Our paper mmOVD+ has been accepted by TMC!',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project.html";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project.html";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project.html";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project.html";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project.html";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project.html";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
