module.exports = {
  async find(ctx) {
    const { pass, ...query } = ctx.query;

    const results = await strapi.query('user', 'users-permissions').find({
      ...query,
      pass
    });

    return results;
  }
};