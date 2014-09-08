require('./index.css');

require.ensure([], function (require) {
  require('dialog')();
});
