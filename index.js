/*jshint node:true */

'use strict';

var exec = require('child_process').exec;

module.exports = function (command, opts) {

  command = command || './vendor/bin/php-cs-fixer';
  opts = opts || {};

  opts = {

    // Main Settings
    silent:         opts.silent         || false,
    dryRun:         opts.dryRun         || false,
    fixers:         opts.fixers         || '',
    level:          opts.level          || '',
    configFile:     opts.configFile     || '',
    path:           opts.path           || ''

  };

  var cmd = command + ' fix';

  if (opts.silent)      { cmd += ' --quiet'; }
  if (opts.dryRun)      { cmd += ' --dry-run'; }
  if (opts.fixers)      { cmd += ' --fixers=' + opts.fixers; }
  if (opts.level)       { cmd += ' --level=' + opts.level; }
  if (opts.configFile)  { cmd += ' --config-file=' + opts.configFile; }

  if (opts.path) { cmd += ' ' + opts.path; }

  exec(cmd, function (error, stdout, stderr) {
      // Should probably do something with the output
  });

};