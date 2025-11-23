import { PortableTextBlock } from "next-sanity";

export type HeroType = {
  _id?: string;
  heading: string;
  jobName?: string;
  content?: PortableTextBlock;
  image?: string;
};
