export const shop = {
    name: "food",
    title: "Food",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
        description: "Name of the food item",
      },
      {
        name: "category",
        title: "Category",
        type: "string",
        options: {
          list: [
            { title: "Drink", value: "Drink" },
            { title: "Dessert", value: "Dessert" },
            { title: "Sandwich", value: "Sandwich" },
            { title: "Main Course", value: "Main Course" },
            { title: "Appetizer", value: "Appetizer" },
          ],
        },
      },
      {
        name: "price",
        title: "Price",
        type: "number",
      },
      {
        name: "originalPrice",
        title: "Original Price",
        type: "number",
      },
      {
        name: "tags",
        title: "Tags",
        type: "array",
        of: [{ type: "string" }],
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
      {
        name: "description",
        title: "Description",
        type: "text",
      },
      {
        name: "available",
        title: "Available",
        type: "boolean",
      },
    ],
  };
  