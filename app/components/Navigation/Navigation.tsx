import React, { useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { LineSvg } from "../Icons";

interface NavigationProps {
  navigation?: {
    title?: string;
  }[];
  classNames?: {
    root?: string;
    link?: string;
  };
  onClose?: () => void;
  isHeader?: boolean;
  activeSection?: string | null;
}

const Navigation = ({
  navigation,
  classNames,
  onClose,
  isHeader = false,
  activeSection,
}: NavigationProps) => {
  if (!navigation?.length) return null;
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);

  function generateId(title?: string) {
    if (title)
      return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
  }

  return (
    <motion.ul
      className={classNames?.root}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
          },
        },
      }}
      initial="hidden"
      animate="show"
    >
      {navigation?.map((link, index) => {
        const linkRef = React.useRef<HTMLAnchorElement | null>(null);

        return (
          <motion.li
            key={link.title}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            className={clsx(
              "relative flex flex-col justify-center items-center hover:shadow-lg bg-brand-orange rounded-xl transition-all p-2"
            )}
          >
            <a
              ref={linkRef}
              className={clsx(
                "no-underline",
                !isHeader && "hover:text-brand-default transition-all",
                classNames?.link
              )}
              href={`#${generateId(link?.title)}`}
              onClick={onClose}
            >
              {link.title}
            </a>
          </motion.li>
        );
      })}
    </motion.ul>
  );
};

export default Navigation;
