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
    <div className={clsx("flex space-x-6 justify-center", classNames?.root)}>
      {socialLinks?.length &&
        socialLinks?.map((link) => (
          <a
            key={link.label}
            href={link.href}
            aria-label={link.label}
            className="hover:shadow-lg hover:scale-105 transition-all flex items-center p-2 rounded-lg"
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
