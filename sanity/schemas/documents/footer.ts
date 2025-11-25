import { defineField } from "sanity";
import { FilterIcon as icon } from "@sanity/icons";
import { F } from "../tool";

export const footer = {
  name: "footer",
  type: "document",
  icon,
  fields: [
    F.array({
      name: "socialLinks",
      of: [{ type: "string" }],
    }),
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: "Footer",
      };
    },
  },
};
