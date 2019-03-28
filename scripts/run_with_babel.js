#!/usr/bin/env node
require('babel-register');
const path = require('path');
const loadDir = process.argv[2];
const filesPatterns = process.argv.slice(3);
const BUILD_ID = process.env.BUILD_ID;
const BUILD_ENV = process.env.BUILD_ENV;
const currentWorkingDir = process.cwd();
const func = require(path.resolve(currentWorkingDir, loadDir));

func(filesPatterns, currentWorkingDir, { BUILD_ID, BUILD_ENV })
.then(() => {
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});
