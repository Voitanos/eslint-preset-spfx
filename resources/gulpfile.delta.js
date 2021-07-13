// disable tslint
build.tslintCmd.enabled = false;
// add eslint
const eslintPrefix = require('./config/update-gulpfile-eslint');
eslintPrefix.updateGulpfile(build);

build.initialize(require('gulp'));