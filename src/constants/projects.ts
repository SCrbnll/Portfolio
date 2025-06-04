import GitHubIcon from "../components/icons/GitHubIcon.astro";
import RedirectIcon from "../components/icons/RedirectIcon.astro";
import YouTubeIcon from "../components/icons/YouTubeIcon.astro";

export const PROJECTS = [
    {
        img: "https://raw.githubusercontent.com/SCrbnll/BuzzSnap/refs/heads/main/buzzsnap.png",
        title: "BuzzSnap",
        description: "Aplicación web de mensajería instantánea con React y Spring Boot, desplegada en AWS con Docker.",
        badges: ["React", "TypeScript", "Tailwind", "Spring Framework", "Hibernate", "Node.js", "AWS", "Docker"],
        buttons: [
            { text: "GitHub", href: "https://github.com/SCrbnll/BuzzSnap", icon: GitHubIcon },
        ]
    },
    {
        img: "https://raw.githubusercontent.com/SCrbnll/RoadBeat/refs/heads/main/roadbeat.png",
        title: "RoadBeat",
        description: "App móvil de viajes compartidos con música en tiempo real. Desarrollada en React Native con Spring Boot y Spotify API.",
        badges: ["Expo", "JavaScript", "Java", "Spring Framework", "Hibernate", "Node.js"],
        buttons: [
            { "text": "GitHub", "href": "https://github.com/SCrbnll/RoadBeat", "icon": GitHubIcon },
            { "text": "Trailer", "href": "https://youtu.be/ZsJt--pIcPU", "icon": YouTubeIcon }
        ]
    },
    {
        img: "https://raw.githubusercontent.com/SCrbnll/Pokedex/main/pokedex.png",
      title: "Pokédex",
      description: "Pokédex web con Angular y PokeApi. Busca, filtra y descubre información detallada sobre los Pokémon de manera intuitiva.",
      badges: ["Angular", "TypeScript"],
      buttons: [
            { "text": "GitHub", "href": "https://github.com/SCrbnll/Pokedex", "icon": GitHubIcon },
            { "text": "Live Demo", "href": "https://scrbnll-pokedex.netlify.app/", "icon": RedirectIcon }
        ]
    },
    {
        img: "https://raw.githubusercontent.com/SCrbnll/KnightFate/refs/heads/main/knight_fate_new.png",
      title: "Knight Fate",
      description: "Knight Fate es un juego de plataformas 2D en Unity, desarrollado en equipo, donde un caballero debe superar retos y enemigos en una mazmorca.",
      badges: ["Unity", "C#"],
      buttons: [
            { "text": "GitHub", "href": "https://github.com/SCrbnll/KnightFate", "icon": GitHubIcon },
            { "text": "Trailer", "href": "https://youtu.be/rqjld6bgV-k", "icon": YouTubeIcon }
        ]
    }
  ]
  