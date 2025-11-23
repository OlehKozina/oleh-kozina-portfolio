import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";
import { visionTool } from "@sanity/vision";

export default defineConfig({
  projectId: "k5hnh4x2",
  dataset: "production",
  title: "Oleh Kozina Website",
  apiVersion: "2025-11-21",
  basePath: "/admin",
  plugins: [
    deskTool({
      structure: (S) => {
        const singletons = ["header", "footer"];

        return S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Header")
              .id("header")
              .schemaType("header")
              .child(S.document().schemaType("header").documentId("header")),

            S.listItem()
              .title("Footer")
              .id("footer")
              .schemaType("footer")
              .child(S.document().schemaType("footer").documentId("footer")),
            ...S.documentTypeListItems().filter(
              (item) => !singletons.includes(item.getId() ?? "")
            ),
          ]);
      },
    }),
    visionTool(),
  ],
  schema: { types: schemas },
});
