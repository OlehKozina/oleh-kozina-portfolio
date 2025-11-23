import {
  faGithub,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const platforms = {
  github: { icon: faGithub, label: "Github" },
  facebook: { icon: faFacebook, label: "Facebook" },
  linkedin: { icon: faLinkedin, label: "LinkedIn" },
  email: { icon: faEnvelope, label: "Email" },
};

export const buildSocialLinks = (urls?: string[]) =>
  urls?.map((url) => {
    if (url.includes("linkedin")) return { href: url, ...platforms.linkedin };
    if (url.includes("facebook")) return { href: url, ...platforms.facebook };
    if (url.includes("github")) return { href: url, ...platforms.github };
    if (url.startsWith("mailto:")) return { href: url, ...platforms.email };
    return { href: url, icon: null, label: "Unknown" };
  }) ?? [];
