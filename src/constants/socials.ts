import CVIcon from "../components/icons/CVIcon.astro";
import GitHubIcon from "../components/icons/GitHubIcon.astro";
import LinkedInIcon from "../components/icons/LinkedInIcon.astro";
import { CV_URL, GITHUB_URL, LINKEDIN_URL } from "./global";

export const SOCIALS = [
  {
    name: "GitHub",
    url: GITHUB_URL,
    icon: GitHubIcon,
  },
  {
    name: "LinkedIn",
    url: LINKEDIN_URL,
    icon: LinkedInIcon,
  },
  {
    name: "CV",
    url: CV_URL,
    icon: CVIcon,
  }
];