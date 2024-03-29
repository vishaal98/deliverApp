const swagger = {
  openapi: "3.0.1",
  info: {
    description: "An API for backend for the delivery application",
    title: "Delivery App",
    // license: {
    //   name: "MIT License",
    //   url: "https://opensource.org/licenses/MIT",
    // },
    version: "v1",
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
  },
  paths: {
    "/v1/price/calculate ": {
      post: {
        tags: ["Pricing"],
        summary: "calculate the price",
        operationId: "calculatePrice",
        parameters: [],
        responses: {
          200: {
            description: "",
            headers: {},
          },
        },
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "json",
                example: {
                  zone: "downtown",
                  organization_id: 4,
                  total_distance: 10,
                  item_type: "perishable",
                },
              },
              example:
                '{"zone":"downtown","organization_id":4,"total_distance": 10,"item_type":"perishable"}',
            },
          },
        },
      },
    },
    "/v1/price/getAllPricings ": {
      get: {
        tags: ["Pricing"],
        summary: "get all the existing pricing",
        operationId: "getAllPricing",
        parameters: [],
        responses: {
          200: {
            description: "",
            headers: {},
          },
        },
      },
    },
    "/v1/org/getAllorgs ": {
      get: {
        tags: ["Organizaions"],
        summary: "get all the existing organization",
        operationId: "getAllorgs",
        parameters: [],
        responses: {
          200: {
            description: "",
            headers: {},
          },
        },
      },
    },
    "/v1/org/addOrg ": {
      post: {
        tags: ["Organizaions"],
        summary: "add new organization",
        operationId: "addOrgs",
        parameters: [],
        responses: {
          200: {
            description: "",
            headers: {},
          },
        },
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "json",
                example: {
                  name: "new Restaurant",
                },
              },
              example: '{"name":"New Retaurant"}',
            },
          },
        },
      },
    },
    "/v1/org/deleteOrg/{id}": {
      delete: {
        tags: ["Organizaions"],
        summary: "delete the Organization by id",
        operationId: "deleteOrg",
        parameters: [
          {
            require: true,
            name: "id",
            in: "path",
            description: "the id of the org that you want to delete",
            schema: {
              type: "",
              example: "10",
            },
          },
        ],
        responses: {
          200: {
            description: "",
            headers: {},
          },
        },
      },
    },
    "/v1/item/getAllitems ": {
      get: {
        tags: ["Items"],
        summary: "get all the existing items",
        operationId: "getAllItems",
        parameters: [],
        responses: {
          200: {
            description: "",
            headers: {},
          },
        },
      },
    },
    "/v1/item/addItem": {
      post: {
        tags: ["Items"],
        summary: "Add new Items",
        operationId: "additems",
        parameters: [],
        responses: {
          200: {
            description: "",
            headers: {},
          },
        },
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "json",
                example: {
                  name: "Bakery Products",
                },
              },
              example: '{"type":"perishable", "description":"Bakery Products"}',
            },
          },
        },
      },
    },
    "/v1/org/deleteItem/{id}": {
      delete: {
        tags: ["Items"],
        summary: "delete the item by id",
        operationId: "deleteItem",
        parameters: [
          {
            require: true,
            name: "id",
            in: "path",
            description: "the id of the item that you want to delete",
            schema: {
              type: "",
              example: "10",
            },
          },
        ],
        responses: {
          200: {
            description: "",
            headers: {},
          },
        },
      },
    },
  },
};

module.exports = swagger;
