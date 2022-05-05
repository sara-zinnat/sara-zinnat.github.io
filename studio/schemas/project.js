export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "date",
      type: "datetime",
    },
    {
      name: "place",
      type: "string",
    },
    {
      name: "description",
      type: "blockContent",
    },
    {
      name: "projectType",
      title: "Project type",
      type: "string",
      options: {
        list: [
          { value: "Personal", title: "Personal" },
          { value: "Thesis", title: "Thesis" },
          { value: "Course Project", title: "Course Project" },
          { value: "Research", title: "Research" },
        ],
      },
    },
    {
      name: "link",
      type: "url",
    },
    {
      name: "tags",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        layout: "tags",
      },
    },
  ],
};
