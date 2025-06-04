import CVIcon from "../components/icons/CVIcon.astro";
import GitHubIcon from "../components/icons/GitHubIcon.astro";
import JobIcon from "../components/icons/JobIcon.astro";
import LanguageIcon from "../components/icons/LanguageIcon.astro";
import LinkedInIcon from "../components/icons/LinkedInIcon.astro";
import SchoolIcon from "../components/icons/SchoolIcon.astro";

export const SITE_NAME = "Samuel Carbonell";
export const DEFAULT_LANG = "es";

export const LANGUAGES = [
  { code: "es", name: "Español", flag: "/flags/es.svg" },
  { code: "en", name: "English", flag: "/flags/en.svg" },
];

export const SOCIALS = [
  {
    name: "GitHub",
    url: "https://github.com/SCrbnll",
    icon: GitHubIcon,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/samuu-crbnll/",
    icon: LinkedInIcon,
  },
  {
    name: "CV",
    url: "https://github.com/SCrbnll/SCrbnllDev/blob/main/public/Curriculum%20Vitae.pdf",
    icon: CVIcon,
  }
];

export const STATS = [
  {
    icon: JobIcon,
    title: "< 1 year of experience",
    align: "center",
    items: [
      { title: "Frontend Developer", value: "4 months" },
      { title: "Coming soon", value: "..." },
    ],
  },
  {
    icon: SchoolIcon,
    title: "Graduated",
    align: "end",
    items: [
      {
        title: "FP Superior en Desarrollo de Aplicaciones Web",
        value: "2024-2025",
      },
      {
        title: "FP Superior en Desarrollo de Aplicaciones Multiplataforma",
        value: "2022-2024",
      },
    ],
  },
  {
    icon: LanguageIcon,
    title: "Idiomas",
    align: "center",
    items: [
      { title: "Spanish", value: "Native", img: "/flags/es.svg" },
      { title: "English", value: "B2", img: "/flags/en.svg" },
    ],
  },
];