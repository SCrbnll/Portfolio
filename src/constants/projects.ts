import GitHubIcon from "../components/icons/GitHubIcon.astro";
import RedirectIcon from "../components/icons/RedirectIcon.astro";
import YouTubeIcon from "../components/icons/YouTubeIcon.astro";

export const PROJECTS = {
    es:[
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
                { "text": "Demo", "href": "https://scrbnll-pokedex.netlify.app/", "icon": RedirectIcon }
            ]
    },
    {
        img: "https://raw.githubusercontent.com/SCrbnll/NightFlameBot/refs/heads/main/nightflamebot.png",
        title: "NightFlameBot",
        description: "NightFlameBot es un bot de Discord con comandos de diversión, gestión, información y respuestas automáticas.",
        badges: ["Node.js", "Discord"],
        buttons: [
                { "text": "GitHub", "href": "https://github.com/SCrbnll/NightFlameBot", "icon": GitHubIcon },
        ]
    },
    {
        img: "https://raw.githubusercontent.com/SCrbnll/KnightFate/refs/heads/main/knight_fate_new.png",
      title: "Knight Fate",
      description: "Knight Fate es un juego de plataformas 2D en Unity, desarrollado en equipo, donde un caballero debe superar retos y enemigos en una mazmorra.",
      badges: ["Unity", "C#"],
      buttons: [
            { "text": "GitHub", "href": "https://github.com/SCrbnll/KnightFate", "icon": GitHubIcon },
            { "text": "Trailer", "href": "https://youtu.be/rqjld6bgV-k", "icon": YouTubeIcon }
        ]
    }
    ],
    en: [
        {
        img: "https://raw.githubusercontent.com/SCrbnll/BuzzSnap/refs/heads/main/buzzsnap.png",
        title: "BuzzSnap",
        description: "Instant messaging app with React and Spring Boot, deployed on AWS with Docker.",
        badges: ["React", "TypeScript", "Tailwind", "Spring Framework", "Hibernate", "Node.js", "AWS", "Docker"],
        buttons: [
            { text: "GitHub", href: "https://github.com/SCrbnll/BuzzSnap", icon: GitHubIcon },
        ]
    },
    {
        img: "https://raw.githubusercontent.com/SCrbnll/RoadBeat/refs/heads/main/roadbeat.png",
        title: "RoadBeat",
        description: "Mobile app for shared trips with real-time music. Developed in React Native with Spring Boot and Spotify API.",
        badges: ["Expo", "JavaScript", "Java", "Spring Framework", "Hibernate", "Node.js"],
        buttons: [
            { "text": "GitHub", "href": "https://github.com/SCrbnll/RoadBeat", "icon": GitHubIcon },
            { "text": "Trailer", "href": "https://youtu.be/ZsJt--pIcPU", "icon": YouTubeIcon }
        ]
    },
    {
        img: "https://raw.githubusercontent.com/SCrbnll/Pokedex/main/pokedex.png",
        title: "Pokédex",
        description: "Pokédex web with Angular and PokeApi. Search, filter and discover detailed information about Pokémon in a user-friendly way.",
        badges: ["Angular", "TypeScript"],
        buttons: [
            { "text": "GitHub", "href": "https://github.com/SCrbnll/Pokedex", "icon": GitHubIcon },
            { "text": "Demo", "href": "https://scrbnll-pokedex.netlify.app/", "icon": RedirectIcon }
        ]
    },
    {
        img: "https://raw.githubusercontent.com/SCrbnll/NightFlameBot/refs/heads/main/nightflamebot.png",
        title: "NightFlameBot",
        description: "NightFlameBot is a Discord bot with fun commands, management, information and automatic responses.",
        badges: ["Node.js", "Discord"],
        buttons: [
            { "text": "GitHub", "href": "https://github.com/SCrbnll/NightFlameBot", "icon": GitHubIcon },
        ]
    },
    {
        img: "https://raw.githubusercontent.com/SCrbnll/KnightFate/refs/heads/main/knight_fate_new.png",
      title: "Knight Fate",
      description: "Knight Fate is a 2D platform game in Unity, developed in a team, where a knight must overcome challenges and enemies in a maze.",
      badges: ["Unity", "C#"],
      buttons: [
            { "text": "GitHub", "href": "https://github.com/SCrbnll/KnightFate", "icon": GitHubIcon },
            { "text": "Trailer", "href": "https://youtu.be/rqjld6bgV-k", "icon": YouTubeIcon }
        ]
    }
    ]
}
  