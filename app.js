module.exports = app => {
  const middleware = ['access', 'auth', 'notFound', 'uploadFile'];
  app.config.appMiddleware.push(...middleware);
};