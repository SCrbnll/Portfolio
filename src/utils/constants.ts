import CVIcon from "../components/icons/CVIcon.astro";
import GitHubIcon from "../components/icons/GitHubIcon.astro";
import LinkedInIcon from "../components/icons/LinkedInIcon.astro";

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