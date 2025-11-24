import { defineType } from "sanity";
import { FaBook } from "react-icons/fa";
import { F } from "../tool";

export const mediaWithText = defineType(
  F.object({
    name: "mediaWithText",
    icon: FaBook,
    fields: [
      F.string({
        name: "heading",
      }),
      F.image({
        name: "image",
        hotspot: true,
      }),
      F.array({
        name: "content",
        of: [{ type: "block" }],
      }),
      F.array({
        name: "skills",
        of: [F.string({ name: "skill" })],
      }),
      F.file({
        name: "pdf",
        title: "PDF File",
      }),
    ],

    preview: {
      select: {
        heading: "heading",
        image: "image",
      },
      prepare({ heading, image }: { heading?: string; image?: any }) {
        return {
          title: heading || "Media with Text section",
          media: image || FaBook,
        };
      },
    },
  })
);
