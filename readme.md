# Badgelino.io
> Better badges. Built with `oboe.js`, `koa` and `node-canvas`.

#### Very much work in progress
```js
$ node --harmony index.js
#=> listen on port 3000
```

#### Endpoints
1. `localhost:3000/(module|m)/node/(version|v)/module-name.(svg|json)`
  + module's Node version (**dynamic/auto** from `engines` object in package.json)
2. `localhost:3000/(module|m)/npm/(version|v)/module-name.(svg|json)`
  + module's NPM version (**dynamic/auto** from `engines` object in package.json)
3. `localhost:3000/(module|m)/package/(version|v)/module-name.(svg|json)`
  + module version (**dynamic/auto** from `version` in package.json)
  + version < 1 - orange color
  + version > 1 - blue color

#### Example 1 [gitcreate](https://npmjs.org/package/gitcreate)
```json
{
  "name": "gitcreate",
  "version": "0.0.4",
  "engines": {
    "node": ">= 0.10.0",
    "npm": ">= 1.4.28"
  }
}
```
#### Results 1, Live
`/module/node/version/gitcreate.svg` [![Node version][1badgelino-image-node]][1node-website-url]  
`/module/npm/version/gitcreate.svg` [![NPM version][1badgelino-image-npm]][1npm-website-url]  
`/module/package/version/gitcreate.svg` [![Package version][1badgelino-image-package]][1npm-package-url] or [![Package version][1badgelino-image-package2]][1npm-package-url]

[1badgelino-image-node]: http://95.87.211.169:3000/module/node/version/gitcreate.svg
[1node-website-url]: http://95.87.211.169:3000/module/node/version/gitcreate.svg
[1badgelino-image-npm]: http://95.87.211.169:3000/module/npm/version/gitcreate.svg
[1npm-website-url]: http://95.87.211.169:3000/module/npm/version/gitcreate.svg
[1badgelino-image-package]: http://95.87.211.169:3000/module/package/version/gitcreate.svg
[1badgelino-image-package2]: http://img.shields.io/badge/version-0.0.4-orange.svg
[1npm-package-url]: http://95.87.211.169:3000/module/package/version/gitcreate.svg

***

#### Example 2
```json
{
  "name": "prodrepo",
  "version": "3.8.11",
  "engines": {
    "node": ">= 0.11.14",
    "npm": ">= 2.1.0"
  }
}
```
#### Results 2
`https://badgelino.io/module/node/version/prodrepo.svg` [![Node version][2badgelino-image-node]][2node-website-url]  
`https://badgelino.io/module/npm/version/prodrepo.svg` [![NPM version][2badgelino-image-npm]][2npm-website-url]  
`https://badgelino.io/module/package/version/prodrepo.svg` [![Package version][2badgelino-image-package]][2npm-package-url]


[2badgelino-image-node]: http://img.shields.io/badge/node-%3E=%200.11.14-orange.svg
[2node-website-url]: https://nodejs.org/
[2badgelino-image-npm]: http://img.shields.io/badge/npm-%3E=%202.1.0-blue.svg
[2npm-website-url]: https://npmjs.org/
[2badgelino-image-package]: http://img.shields.io/badge/prodrepo-v3.8.11-blue.svg
[2npm-package-url]: https://npmjs.org/package/prodrepo









## Authors & Contributors

**Charlike Mike Reagent** [![author tips][author-gittip-img]][author-gittip]
+ [gittip/tunnckoCore][author-gittip]
+ [github/tunnckoCore][author-github]
+ [twitter/tunnckoCore][author-twitter]
+ [npmjs/tunnckoCore][author-npmjs]
+ [more ...][author-more]

## License [![MIT license][license-img]][license-url]
Copyright (c) 2014 [Charlike Mike Reagent][author-website], [contributors](https://github.com/tunnckoCore/coreflow-templates/graphs/contributors).  
Released under the [`MIT`][license-url] license.



[downloads-img]: http://img.shields.io/npm/dm/coreflow-templates.svg
[npm-required-version-img]: http://img.shields.io/badge/npm-%3E=%201.4.28-blue.svg
[node-required-version-img]: https://img.shields.io/node/v/coreflow-templates.svg
[node-required-version-url]: http://nodejs.org/download/

[npmjs-url]: http://npm.im/coreflow-templates
[npmjs-fury]: https://badge.fury.io/js/coreflow-templates.svg
[npmjs-shields]: https://img.shields.io/npm/v/coreflow-templates.svg
[npmjs-install]: https://nodei.co/npm/coreflow-templates.svg?mini=true

[coveralls-url]: https://coveralls.io/r/tunnckoCore/coreflow-templates?branch=master
[coveralls-shields]: https://img.shields.io/coveralls/tunnckoCore/coreflow-templates.svg

[license-url]: https://github.com/tunnckoCore/coreflow-templates/blob/master/license.md
[license-img]: http://img.shields.io/badge/license-MIT-blue.svg

[travis-url]: https://travis-ci.org/tunnckoCore/coreflow-templates
[travis-img]: https://travis-ci.org/tunnckoCore/coreflow-templates.svg?branch=master

[depstat-url]: https://david-dm.org/tunnckoCore/coreflow-templates
[depstat-img]: https://david-dm.org/tunnckoCore/coreflow-templates.svg

[ferver-img]: http://img.shields.io/badge/using-ferver-585858.svg
[ferver-url]: https://github.com/jonathanong/ferver

[author-gittip-img]: http://img.shields.io/gittip/tunnckoCore.svg
[author-gittip]: https://www.gittip.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-website]: http://www.whistle-bg.tk
[author-npmjs]: https://npmjs.org/~tunnckocore
[author-more]: http://j.mp/1stW47C

[cobody-url]: https://github.com/tj/co-body
[mocha-url]: https://github.com/tj/mocha
[rawbody-url]: https://github.com/stream-utils/raw-body
[multer-url]: https://github.com/expressjs/multer
[express-url]: https://github.com/strongloop/express
[formidable-url]: https://github.com/felixge/node-formidable
[co-url]: https://github.com/tj/co
[extend-url]: https://github.com/justmoon/node-extend
[csp-report]: https://mathiasbynens.be/notes/csp-reports
