export default {
    routes: [
      {
        method: "GET",
        path: "/passport-blogs/slug/:slug",
        handler: "passport-blog.findBySlug",
        config: {
          auth: false,
        },
      },
    ],
  };
  