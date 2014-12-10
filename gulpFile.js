var gulp = require('gulp');
var shell = require('gulp-shell');

// Current version: v0.11.2: (Nov 26, 2014, based off of Node v0.11.13, Chromium 38.0.2125.104)
// Previous version: v0.8.6: (Apr 18, 2014, based off of Node v0.10.22, Chrome 30.0.1599.66)
var nwVersion = '0.11.2';

// Run project
gulp.task('run', shell.task([
     //'node node_modules/node-webkit-builder/bin/nwbuild -v 0.10.4 --run ./'
     'node node_modules/node-webkit-builder/bin/nwbuild -v '+nwVersion+' --run ./'
]));

// Compile project
gulp.task('build-osx', shell.task([
	 'node node_modules/node-webkit-builder/bin/nwbuild -v '+nwVersion+' -p osx ./'
]));

// Compile project
gulp.task('build-win', shell.task([
	 'node node_modules/node-webkit-builder/bin/nwbuild -v '+nwVersion+' -p win ./'
]));

// Compile project
gulp.task('build-linux', shell.task([
	 'node node_modules/node-webkit-builder/bin/nwbuild -v '+nwVersion+' -p linux32,linux64 ./'
]));
