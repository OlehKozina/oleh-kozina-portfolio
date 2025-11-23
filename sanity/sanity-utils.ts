import { createClient, groq } from "next-sanity";
import { componentsQuery } from "./queries/componentsQuery";

const client = createClient({
  apiVersion: "2025-11-21",
  dataset: "production",
  projectId: "k5hnh4x2",
  useCdn: false,
});

async function fetchNoCache(query: string, params: any = {}) {
  return client.fetch(query, params, { cache: "no-store" });
}

export function getPageHome() {
  return fetchNoCache(
    `*[_type == "pageHome"]{
    hero[0]{
      heading,
      jobName,
      content,
      "image": image.asset->url,
    },
      ${componentsQuery}
    }`
  );
}

export function getHeader() {
  return fetchNoCache(`*[_type == "header"][0]{
    navigation[]{ title, sectionId },
    "socialLinks": *[_type == "footer"][0].socialLinks
  }`);
}

export function getFooter() {
  return fetchNoCache(
    groq`*[_type == "footer"][0]{
    navigation[]{ title, sectionId },
    socialLinks,
  }`
  );
}
