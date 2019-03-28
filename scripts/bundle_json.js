/* @flow */
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const { takeRight } = require('lodash');
const bundleJSON = (dir: string): Promise<?Object> => {
  return new Promise((done, reject) => {
    let [pageName, , fileName]: string[] = takeRight(dir.split('/'), 3);
    if (pageName === 'src') { pageName = 'index'; }
    const resolvedPath: string = path.resolve(process.cwd(), dir);
    const data: Object = require(resolvedPath);
    if (data) {
      done({ [`_${ pageName }_${ fileName.replace(/\.json$/, '') }`]: data });
    } else {
      reject();
    }
  });
};

module.exports = function(targetPatterns: string[], currentWorkingDir: string, env: { BUILD_ENV?: string, BUILD_ID?: string }) {
  return Promise
  .all(targetPatterns.map(pattern => {
    return new Promise((done, reject) => {
      glob(pattern, (err , files) => {
        if (err) { return reject(err); }
        if (!files.length) { return done(); }
        Promise
        .all(files.map(bundleJSON))
        .then(results => {
          done(Object.assign({}, ...results));
        });
      });
    });
  }))
  .then(results => {
    let base: Object;
    if (env.BUILD_ENV === 'watch') {
      base = require(path.resolve(process.cwd(), 'src/json/bundle.json'));
    } else {
      base = {};
    }
    const outPath = 'src/json/bundle.json';
    return new Promise((resolve, reject) => {
      fs.writeFile(outPath, JSON.stringify(Object.assign(base, ...results, { BUILD_ID: env.BUILD_ID }), null, 2), (err, data) => {
        if (err) {
          reject(err);
        } else {
          console.log(`${ path.basename(__filename) }: compiled ${ outPath }`);
          resolve(data);
        }
      });
    });
  });
};
