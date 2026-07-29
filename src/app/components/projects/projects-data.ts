import type { StaticImageData } from "next/image";
import users from "../../assets/users.png";
import cargo from "../../assets/cargo.png";
import coffeepoint from "../../assets/coffeepoint.png";

export interface Project {
  id: number;
  name: string;
  image?: StaticImageData;
  codePreview?: string[];
  url: string;
  githubUrl: string;
  liveUrl?: string;
  narrative: string;
  tags: string[];
  type: "web" | "mobile";
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Cargo Webapp",
    image: cargo,
    url: "speedypk.com",
    githubUrl: "https://github.com/yourusername/cargo-webapp",
    liveUrl: "https://speedypk.com",
    narrative:
      "A web platform for local businesses to handle worldwide parcel delivery and order tracking. Features full authentication and an immutable logistics tracking ledger.",
    tags: ["Next.js", "Supabase", "Auth", "Logistics"],
    type: "web",
  },
  {
    id: 2,
    name: "HMC Society",
    codePreview: [
      "interface Member {",
      "  id: string;",
      "  role: 'admin' | 'member';",
      "  name: string;",
      "  joinDate: Date;",
      "}",
      "",
      "async function getMembers(): Promise<Member[]> {",
      "  const { data, error } = await supabase",
      "    .from('members')",
      "    .select('*');",
      "  if (error) throw error;",
      "  return data;",
      "}",
    ],
    url: "hmc-society.vercel.app",
    githubUrl: "https://github.com/yourusername/project-one",
    narrative:
      "A role-based access management platform with secure authentication, member data management, event coordination, and real-time announcements.",
    tags: ["React", "Node.js", "Auth", "Real-time"],
    type: "web",
  },
  {
    id: 3,
    name: "CoffeePoint",
    image: coffeepoint,
    url: "coffeepoint.vercel.app",
    githubUrl: "https://github.com/yourusername/coffeepoint",
    liveUrl: "https://coffeepoint.vercel.app",
    narrative:
      "A modern coffee ordering and discovery platform — browse specialty coffee menus, find nearby branches, and place orders seamlessly. Built with a focus on fast load times and a smooth mobile-first experience.",
    tags: ["Next.js", "Tailwind", "Vercel", "UI/UX"],
    type: "web",
  },
  {
    id: 4,
    name: "POKO",
    image: users,
    url: "poko-app",
    githubUrl: "https://github.com/yourusername/project-four",
    narrative:
      "A data dashboard that consumes a public API to display users, visualize counts with interactive charts, and present detailed data in a structured table.",
    tags: ["Expo", "RTK", "API", "Charts"],
    type: "web",
  },
];
