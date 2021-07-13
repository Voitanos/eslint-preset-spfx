#!/usr/bin/env node

// bail on postinstall if this is a build
if (process.env.IS_BUILD) {
  console.log('skipping POSTINSTALL script');
  process.exit(0);
}

import * as fs from 'fs';
import * as path from 'path';

const CURR_DIR = path.resolve(__dirname);
// split directory path (non-windows)
let nestedDirs = CURR_DIR.split("/");
// split directory path (windows)
if (nestedDirs.length <= 1) {
  nestedDirs = CURR_DIR.split("\\");
}

// verify path
if (nestedDirs.length === 0) {
  console.error('ERROR: unexpected install path.')
}
// find the node_modules folder
const nmIndex = nestedDirs.indexOf('node_modules');
// verify node_modules found & get the path to one level up...
//  this should be the project root
if (nmIndex === -1) {
  console.error('ERROR: expected folder \'node_modules\' not found.');
}
const nest = nestedDirs.slice(nmIndex);
if (!nest || nest.length === 0) {
  console.error('ERROR: unexpected install path.')
}
const paths = nest.map(m => "..");
const projectPath = path.resolve(path.join(__dirname, paths.join('/')));

