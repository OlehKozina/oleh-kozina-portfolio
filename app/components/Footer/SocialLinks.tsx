import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { buildSocialLinks } from "./utils";
import clsx from "clsx";

const SocialLinks = ({
  socialLinks: _socialLinks,
  classNames,
}: {
  socialLinks?: string[];
  classNames?: {
    root?: string;
    link?: string;
  };
}) => {
  const socialLinks = buildSocialLinks(_socialLinks);
  return (
    <div className={clsx("flex space-x-4 justify-center", classNames?.root)}>
      {socialLinks?.length &&
        socialLinks?.map((link) => (
          <a
            key={link.label}
            href={link.href}
            aria-label={link.label}
            className="hover:opacity-50 transition-opacity flex items-center"
          >
            {link.icon && (
              <FontAwesomeIcon
                icon={link.icon}
                className={clsx("text-2xl", classNames?.link)}
              />
            )}
          </a>
        ))}
    </div>
  );
};

export default SocialLinks;
