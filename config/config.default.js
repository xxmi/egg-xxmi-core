'use strict';

/**
 * egg-xxmi-core default config
 * @member Config#xxmiCore
 * @property {String} SOME_KEY - some description
 */
exports.xxmiCore = {
  access: {
    name: 'access',
    enable: true, // 是否开启这个中间件
  },
  auth: {
    name: 'auth',
    enable: true,
    whiteList: [
      /^\/reset-password(\/.+)?/,
      '/401', '/403', '/404', '/login', '/logout',
    ],
    url: '/login',
    safe: true, // true: redirect 模式；false: unsafeRedirect 模式
  },
  notFound: {
    name: 'notFound',
    enable: true,
  },
  uploadFile: {
    name: 'uploadFile',
    enable: true,
    baseDir: true, // true：需要 path.join(ctx.baseDir)
    tempPath: 'upload/temp',
  },
};
