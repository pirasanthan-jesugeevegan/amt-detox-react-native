module.exports = {
  default: [
    './e2e/scripts',
    '--require ./e2e/**/*.js',
    '--require-module @babel/register',
    '--publish',
    '--format-options \'{"snippetInterface": "synchronous"}\'',
  ].join(' '),
};
