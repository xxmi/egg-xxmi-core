'use strict';

/**
 * 判断白名单中包含 path
 * @param {Array} whiteList 白名单
 * @param {String} path 路径
 * @return {Boolean} true: 匹配；false：不匹配
 * @private
 */
const _hasWhiteList = (whiteList, path) => {
  for (let i = 0; i < whiteList.length; i++) {
    if (whiteList[i] instanceof RegExp) {
      if (whiteList[i].test(path)) {
        return true;
      }
    } else if (whiteList[i] === path) {
      return true;
    }
  }
  return false;
};

module.exports = () => {
  return async function auth(ctx, next) {
    const { app: { config }, request, logger } = ctx;
    const { auth: { whiteList, safe, url } } = config.xxmiCore;
    const { path } = request;
    const isAuth = ctx.isAuthenticated && ctx.isAuthenticated(); // true 已经登录
    const hasWhite = _hasWhiteList(whiteList, path); // true 白名单
    logger.info('访问路径：', path);
    if (isAuth || hasWhite) {
      return await next();
    }
    const accept = ctx.accept;
    const headers = accept.headers;
    // Ajax 请求
    if (ctx.acceptJSON || (headers['content-type'] && headers['content-type'] === 'application/json')) {
      ctx.body = { code: 401, msg: '未登录' };
      ctx.status = 401;
      return;
    }
    safe ? ctx.redirect(url) : ctx.unsafeRedirect(url);
  };
};
