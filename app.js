module.exports = app => {
  const {xxmiCore} = app.config;
  const middleware = [];
  for (let key in xxmiCore) {
    const {name, enable} = xxmiCore[key];
    if (enable && name) {
      middleware.push(name);
    }
  }
  if (middleware.length > 0) {
    app.config.appMiddleware.push(...middleware);
  }
};