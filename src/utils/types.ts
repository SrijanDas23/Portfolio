export enum SelectedPage {
  Home = "home",
  About = "about",
  Projects = "projects",
  Contact = "contact",
}

export interface ClassType {
  name: string;
  description: string;
  image: string;
  skills: string[];
  link?: string;
}