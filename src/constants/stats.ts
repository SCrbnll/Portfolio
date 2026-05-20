import JobIcon from "../components/icons/JobIcon.astro";
import LanguageIcon from "../components/icons/LanguageIcon.astro";
import SchoolIcon from "../components/icons/SchoolIcon.astro";

export const STATS = {
  es: [
    {
      icon: JobIcon,
      title: "< 1 año de experiencia",
      align: "center",
      items: [
        { title: "Desarrollador Frontend", value: "8 meses" },
        { title: "Próximamente", value: "..." },
      ],
    },
    {
      icon: SchoolIcon,
      title: "Graduado",
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
        { title: "Español", value: "Nativo", img: "/flags/es.svg" },
        { title: "Inglés", value: "B2", img: "/flags/en.svg" },
      ],
    },
  ],
  en: [
    {
      icon: JobIcon,
      title: "< 1 year of experience",
      align: "center",
      items: [
        { title: "Frontend Developer", value: "8 months" },
        { title: "Coming soon", value: "..." },
      ],
    },
    {
      icon: SchoolIcon,
      title: "Graduated",
      align: "end",
      items: [
        {
          title: "Higher Vocational Training in Web Application Development",
          value: "2024-2025",
        },
        {
          title: "Higher Vocational Training in Multiplatform Application Development",
          value: "2022-2024",
        },
      ],
    },
    {
      icon: LanguageIcon,
      title: "Languages",
      align: "center",
      items: [
        { title: "Spanish", value: "Native", img: "/flags/es.svg" },
        { title: "English", value: "B2", img: "/flags/en.svg" },
      ],
    },
  ],
};
