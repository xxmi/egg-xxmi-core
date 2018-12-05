'use strict';

/**
 * egg-xxmi-core default config
 * @member Config#xxmiCore
 * @property {String} SOME_KEY - some description
 */
exports.xxmiCore = {
  auth: {
    whiteList: [
      '/no-auth-api',
      /^\/reset-password(\/.+)?/,
      '/401', '/403', '/404', '/login', '/authSuccess', '/authFailed', '/logout', '/captcha'
    ],
    url: '/login',
    safe: true // true: redirect 模式；false: unsafeRedirect 模式
  }
};
