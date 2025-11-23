import { defineType } from "sanity";
import { FaCheckCircle as icon } from "react-icons/fa";
import { F } from "../tool";

export const marquee = defineType(
  F.object({
    name: "marquee",
    icon,

    fields: [
      F.array({
        name: "projects",
        of: [
          F.object({
            name: "project",
            fields: [F.image({ name: "image" }), F.string({ name: "link" })],
            preview: {
              select: {
                media: "image",
                title: "link",
              },
            },
          }),
        ],
      }),
    ],

    preview: {
      select: {},
      prepare() {
        return {
          title: "Projects Marquee",
          media: icon,
        };
      },
    },
  })
);
