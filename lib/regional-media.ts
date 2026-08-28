import type { RegionCode } from "./regions";

type RegionalImage = { src: string; alt: string };
export type RegionalMedia = {
  homePrimary: RegionalImage;
  homeSecondary: RegionalImage;
  responsibility: RegionalImage;
  career: RegionalImage;
  csrInclusive: RegionalImage;
  csrEnvironment: RegionalImage;
  csrCommunity: RegionalImage;
};

export const regionalMedia: Record<RegionCode, RegionalMedia> = {
  IN: {
    homePrimary: { src: "/media/regions/modules/in-home-primary-v2.jpg", alt: "Women coordinating textile operations with computers in India" },
    homeSecondary: { src: "/media/regions/modules/in-home-secondary-v2.jpg", alt: "Indian textile specialists using workplace technology" },
    responsibility: { src: "/media/regions/modules/in-responsibility-v2.jpg", alt: "Workers collaborating inside an industrial workplace in Punjab" },
    career: { src: "/media/regions/modules/in-career-v2.jpg", alt: "Indian business professional working at a laptop" },
    csrInclusive: { src: "/media/regions/modules/in-csr-inclusive-v2.jpg", alt: "Young professional carrying a laptop through an Indian neighbourhood" },
    csrEnvironment: { src: "/media/regions/modules/in-csr-environment-v2.jpg", alt: "A uniformed worker in a shaded Mumbai street" },
    csrCommunity: { src: "/media/regions/modules/in-csr-community-v2.jpg", alt: "A tailor working in a Mumbai small-business workshop" },
  },
  US: {
    homePrimary: { src: "/media/regions/modules/us-home-primary-v2.jpg", alt: "A diverse team discussing work in a New York office" },
    homeSecondary: { src: "/media/regions/modules/us-home-secondary-v2.jpg", alt: "Business professionals in a United States workplace discussion" },
    responsibility: { src: "/media/regions/modules/us-responsibility-v2.jpg", alt: "Women presenting business data in a United States office" },
    career: { src: "/media/regions/modules/us-career-v2.jpg", alt: "Colleagues working with laptops and tablets in New York" },
    csrInclusive: { src: "/media/regions/modules/us-csr-inclusive-v2.jpg", alt: "A multigenerational team collaborating in a United States workplace" },
    csrEnvironment: { src: "/media/regions/modules/us-csr-environment-v2.jpg", alt: "Professionals using public transit in New York's financial district" },
    csrCommunity: { src: "/media/regions/modules/us-csr-community-v2.jpg", alt: "Women in technology sharing ideas in a United States office" },
  },
  GB: {
    homePrimary: { src: "/media/regions/modules/gb-home-primary-v2.jpg", alt: "A diverse technology team meeting in a London workspace" },
    homeSecondary: { src: "/media/regions/modules/gb-home-secondary-v2.jpg", alt: "A professional working at a laptop in London" },
    responsibility: { src: "/media/regions/modules/gb-responsibility-v2.jpg", alt: "Two professionals planning work in a London office" },
    career: { src: "/media/regions/modules/gb-career-v2.jpg", alt: "A collaborative team session in a modern London workspace" },
    csrInclusive: { src: "/media/regions/modules/gb-csr-inclusive-v2.jpg", alt: "Professionals working together at a London street café" },
    csrEnvironment: { src: "/media/regions/modules/gb-csr-environment-v2.jpg", alt: "A multicultural group gathering in a London café" },
    csrCommunity: { src: "/media/regions/modules/gb-csr-community-v2.jpg", alt: "A London team joining a colleague by video call" },
  },
  AE: {
    homePrimary: { src: "/media/regions/modules/ae-home-primary-v2.jpg", alt: "A multicultural team meeting in a Dubai office" },
    homeSecondary: { src: "/media/regions/modules/ae-home-secondary-v2.jpg", alt: "Professionals collaborating over a laptop in Dubai" },
    responsibility: { src: "/media/regions/modules/ae-responsibility-v2.jpg", alt: "A professional using a smartphone at a Dubai business event" },
    career: { src: "/media/regions/modules/ae-career-v2.jpg", alt: "Businesswomen discussing work beside the Dubai skyline" },
    csrInclusive: { src: "/media/regions/modules/ae-csr-inclusive-v2.jpg", alt: "A traditional tea seller serving people at a Dubai gathering" },
    csrEnvironment: { src: "/media/regions/modules/ae-csr-environment-v2.jpg", alt: "A tree-lined route through Dubai's business district" },
    csrCommunity: { src: "/media/regions/modules/ae-csr-community-v2.jpg", alt: "People and small businesses on an active Dubai street" },
  },
  SG: {
    homePrimary: { src: "/media/regions/modules/sg-home-primary-v2.jpg", alt: "People gathering at Singapore's Chinatown Visitor Centre" },
    homeSecondary: { src: "/media/regions/modules/sg-home-secondary-v2.jpg", alt: "Singapore hawker-centre staff working in a food stall" },
    responsibility: { src: "/media/regions/modules/sg-responsibility-v2.jpg", alt: "People moving through a modern public space in central Singapore" },
    career: { src: "/media/regions/modules/sg-career-v2.jpg", alt: "People crossing Orchard Road in Singapore's business district" },
    csrInclusive: { src: "/media/regions/modules/sg-csr-inclusive-v2.jpg", alt: "Older adults gathering in Singapore's Chinatown" },
    csrEnvironment: { src: "/media/regions/modules/sg-csr-environment-v2.jpg", alt: "Travellers using digital services at Singapore Changi Airport" },
    csrCommunity: { src: "/media/regions/modules/sg-csr-community-v2.jpg", alt: "Commuters using Little India MRT station in Singapore" },
  },
};
