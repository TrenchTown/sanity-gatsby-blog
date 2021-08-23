export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61239cd755e46629baac869b",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-o33ne6vf",
                  apiId: "cac2918c-8024-4222-b9ed-7036f8ee357c",
                },
                {
                  buildHookId: "61239cd88839b62b95692896",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-31zszrx6",
                  apiId: "905d572d-0152-4767-aa7a-beea9fd1ece1",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/TrenchTown/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-31zszrx6.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
