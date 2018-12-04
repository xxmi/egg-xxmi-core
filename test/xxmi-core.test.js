'use strict';

const mock = require('egg-mock');

describe('test/xxmi-core.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/xxmi-core-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, xxmiCore')
      .expect(200);
  });
});
