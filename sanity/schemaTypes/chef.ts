export const chef = {
    name: "chef",
    title: "Chef",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
        description: "Name of the chef",
      },
      {
        name: "designation",
        title: "Designation",
        type: "string",
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: "alt",
            title: "Alt Text",
            type: "string",
          },
        ],
      },
    ],
  };
  