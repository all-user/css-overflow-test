// @flow
const fs = require('fs');
const path = require('path');
const glob = require('glob');
const pug = require('pug');

class BundlePug {
  filesPatterns: string[];
  CURRENT_WORKING_DIR: string;
  BUILD_ID: string | void;
  PUG_OPTIONS: Object;

  constructor(filesPatterns: string[], currentWorkingDir: string, env: { BUILD_ENV?: string, BUILD_ID?:string } = {}) {
    this.filesPatterns = filesPatterns;
    this.BUILD_ID = env.BUILD_ID;
    this.CURRENT_WORKING_DIR = currentWorkingDir;
    this.PUG_OPTIONS = {
      pretty: true,
      basedir: currentWorkingDir
    };
  }

  get localValiables() {
    return require(path.resolve(this.CURRENT_WORKING_DIR, 'src/json/bundle.json'));
  }

  freezeLocalValiables(): any {
    //$FlowFixMe
    Object.defineProperty(this, 'localValiables', {
      configurable: false,
      writable: false,
      value: this.localValiables
    });
    return this.localValiables;
  }

  compile(dir, localValiables, options) {
    return pug.compileFile(dir, options)(localValiables);
  }

  promiseAllFilesWithPattern(pattern, cb) {
    return new Promise((done, reject) => {
      glob(pattern, (err, files) => {
        if (err) { return reject(err); }
        if (!files.length) { return done(); }
        Promise.all(cb(files)).then(done);
      });
    });
  }

  waitJsonBundledIfBuildIdEnv(p) {
    return p.then(dir => {
      if (this.BUILD_ID && /\.json$/.test(dir)) {
        return this.waitJsonBundled(dir);
      } else {
        return dir;
      }
    });
  }

  waitJsonBundled(dir) {
    return new Promise((done, reject) => {
      let count = 0;
      const tryLimit = 10;
      const poling = () => {
        if (count++ >= tryLimit) { reject(new Error('ポーリングのカウントが上限に達しました')); }
        if (this.localValiables.BUILD_ID !== this.BUILD_ID) {
          setTimeout(() => {
            poling();
          }, 500);
        } else {
          this.freezeLocalValiables();
          done(dir);
        }
      };
    });
  }

  mapToPromiseResolve(v) {
    return Promise.resolve(v);
  }

  ensurePugEntry(p) {
    return p.then(dir => {
      if (path.basename(dir) !== 'index.pug') {
        return dir.replace(/data\/([\w\-._]+\/)*[\w\-._]+\.(pug|json)$/, 'index.pug');
      } else {
        return dir;
      }
    });
  }

  compileAndWriteFile(p) {
    return p.then(dir => {
      const html = this.compile(dir, this.localValiables, this.PUG_OPTIONS);
      return new Promise((done, reject) => {
        const outPath = path.resolve(this.CURRENT_WORKING_DIR, dir.replace(/\.pug$/, '.html'));
        fs.writeFile(outPath, html, (err, data) => {
          if (err) {
            reject(err);
          } else {
            console.log(`${ path.basename(__filename) }: compiled ${ outPath }`);
            done(data);
          }
        });
      });
    });
  }

  execute() {
    return Promise.all(
      this.filesPatterns.map(pattern => {
        return this.promiseAllFilesWithPattern(pattern, files => {
          return files
          .map(dir => this.mapToPromiseResolve(dir))
          .map(p => this.waitJsonBundledIfBuildIdEnv(p))
          .map(p => this.ensurePugEntry(p))
          .map(p => this.compileAndWriteFile(p));
        });
      })
    );
  }
}

module.exports = function(filesPatterns: string[], currentWorkingDir: string, env: { BUILD_ENV?: string, BUILD_ID?: string }) {
  const bundlePug = new BundlePug(filesPatterns, currentWorkingDir, env);
  return bundlePug.execute();
};
