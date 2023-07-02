import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { dashboardTool } from "@sanity/dashboard";
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify";
import { visionTool } from "@sanity/vision";
import deskStructure from "./deskStructure";
import schema from "./schemas/schema";
import { colorInput } from "@sanity/color-input";
import { table } from '@sanity/table';

export default defineConfig({
  title: "Holly Gallagher Portfolio",
  projectId: "y1me6emd",
  dataset: "production",
  plugins: [
    deskTool({
      structure: deskStructure,
    }),
    dashboardTool({
      widgets: [
        netlifyWidget({
            title: 'Website deployment',
            sites: [
              {
                title: 'Website',
                apiId: '5fd09942-0cb5-43bb-84f6-bbf20b89f70d',
                buildHookId: '61f2845f4a49e2b11453747d',
                name: 'holly-gallagher-portfolio',
                url: 'https://holly-gallagher-portfolio.netlify.app',
              },
            ],
        })
      ],
    }),
    visionTool(),
    colorInput(),
    table(),
  ],
  tools: (prev) => {
    if (import.meta.env.DEV) {
      return prev
    }
    return prev.filter((tool) => tool.name !== 'vision')
  },
  schema: {
    types: schema,
  },
  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === 'global') {
        return prev.filter((templateItem) => templateItem.templateId != 'siteSettings')
      }
      return prev
    },
    actions: (prev, { schemaType }) => {
      if (schemaType === 'siteSettings') {
        return prev.filter(({ action }) => !['unpublish', 'delete','duplicate'].includes(action))
      }
      return prev
    },
  },
});