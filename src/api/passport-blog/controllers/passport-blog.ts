import { factories } from "@strapi/strapi";

export default factories.createCoreController("api::passport-blog.passport-blog", ({ strapi }) => ({
  async findBySlug(ctx) {
    const { slug } = ctx.params;

    const blog = await strapi.entityService.findMany("api::passport-blog.passport-blog", {
      filters: { slug },
      populate: {
        author: { populate: "photo" },
        mainPhoto: true,
        photos: true,
      },
    });

    if (!blog || blog.length === 0) {
      return ctx.notFound("Blog not found");
    }

    return blog[0]; 
  },
}));
