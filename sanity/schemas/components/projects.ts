import { defineType } from "sanity";
import { FaChartBar } from "react-icons/fa";
import { F } from "../tool";

export const projects = defineType(
  F.object({
    name: "projects",
    icon: FaChartBar,
    fields: [
      F.string({
        name: "heading",
      }),
      F.array({
        name: "projectCards",
        of: [
          F.object({
            name: "card",
            fields: [
              F.string({
                name: "name",
              }),
              F.string({
                name: "link",
              }),
              F.image({ name: "image", hotspot: true }),
              F.block({ name: "content" }),
            ],
          }),
        ],
      }),
    ],

    preview: {
      select: {
        heading: "heading",
      },
      prepare({ heading }: { heading?: string }) {
        return {
          title: heading || "My Projects",
          media: FaChartBar,
        };
      },
    },
  })
);
