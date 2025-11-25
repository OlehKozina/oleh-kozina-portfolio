import { FaBars as icon } from "react-icons/fa";
import { F } from "../tool";

export const header = {
  name: "header",
  type: "document",
  title: "Header",
  icon,

  fields: [
    F.array({
      name: "navigation",
      of: [{ type: "link" }],
      title: "Navigation Links",
    }),
  ],

  preview: {
    select: {
      navigation: "navigation",
    },
    prepare({ navigation }: { navigation?: any[] }) {
      const navCount = Array.isArray(navigation) ? navigation.length : 0;
      return {
        title: "Header",
        media: icon,
      };
    },
  },
};
