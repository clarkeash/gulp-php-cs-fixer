/*jshint node:true */

'use strict';

var gutil = require('gulp-util');
var exec = require('child_process').exec;

module.exports = function (command, opts) {

  opts = opts || {};

  opts = {

    // Main Settings
    silent:         opts.silent         || false,
    dryRun:         opts.dryRun         || false,
    fixers:         opts.fixers         || '',
    level:          opts.level          || '',
    configFile:     opts.configFile     || '.php_cs',
    path:           opts.path           || ''

  };

  if (!command) {
    command = './vendor/bin/php-cs-fixer';
  }

  var cmd = command + ' fix';

  if (opts.silent) { cmd += ' --quiet'; }
  if (opts.dryRun) { cmd += ' --dry-run'; }
  if (opts.fixers) { cmd += ' --fixers=' + opts.fixers; }
  if (opts.level) { cmd += ' --level=' + opts.level; }

  if (opts.path) { cmd += ' ' + opts.path; }


  console.log(cmd);

  // exec(cmd, function (error, stdout, stderr) {

  // });

};