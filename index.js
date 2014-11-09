/**
 * badgelino <https://github.com/tunnckoCore/badgelino>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

/**
 * Module dependencies.
 */
var fs = require('fs')
var mm = require('octet');
var app = require('koa')();
var cdn = require('koa-cdn');
var route = require('koa-path')();
var oboe = require('oboe');
var SVGO = require('svgo');
var semverRegex = require('semver-regex')

app.use(cdn())
app.use(route('/(module|m)/:service/(version|v)/:name.:format', handler))

function * handler(next) {
  this.response.set('X-Powered-By', 'Badgelino/1.0.0');
  this.response.set('Cache-Control', 'no-cache, no-store, must-revalidate');

  var reqTime = new Date();
  var date = (reqTime).toGMTString();

  this.response.set('Expires', date);  // Proxies, GitHub, see #221.
  this.response.set('Date', date);

  var self = this;
  var params = this.params;
  var pattern = 'version';

  if (params.service === 'node' || params.service === 'npm') {
    pattern = 'engines'
  }

  var data = yield request(pattern, params)

  if (data.format === 'json') {
    this.response.status = 200
    this.response.type = 'json'
    this.response.body = JSON.stringify(data, null, 2);
    return yield* next;
  }
  var left = '';
  var right = '';
  var body;

  this.response.type = 'image/svg+xml'

  if (data[data.name]) {
    left = data.name
    right = data[data.name]
    data = {};
    data.left_color = '#555'
    data.right_color = right.match(semverRegex())[0][0] > 0 ? '#007ec6' : '#fe7d37'
    data.left_text = left
    data.right_text = 'v'+right

    data.widths = [
      (canvasContext.measureText(data.left_text).width|0) + 15,
      (canvasContext.measureText(data.right_text).width|0) + 15,
    ];
    body = mm(fs.readFileSync(__dirname + '/default.minstache', 'utf8'), data)
    this.response.body = body.res
    return yield* next;
  }

  if (data.node) {
    left = 'node'
    right = data.node
    data = {};
    data.left_color = '#555'
    data.right_color = right.match(semverRegex())[0][0] > 0 ? '#007ec6' : '#fe7d37'
    data.left_text = left
    data.right_text = right

    data.widths = [
      (canvasContext.measureText(data.left_text).width|0) + 15,
      (canvasContext.measureText(data.right_text).width|0) + 15,
    ];
    body = mm(fs.readFileSync(__dirname + '/default.minstache', 'utf8'), data)
    this.response.body = body.res
    return yield* next;
  }

  if (data.npm) {
    left = 'npm'
    right = data.npm
    data = {};
    data.left_color = '#555'
    data.right_color = right.match(semverRegex())[0][0] > 0 ? '#007ec6' : '#fe7d37'
    data.left_text = left
    data.right_text = right

    data.widths = [
      (canvasContext.measureText(data.left_text).width|0) + 15,
      (canvasContext.measureText(data.right_text).width|0) + 15,
    ];
    body = mm(fs.readFileSync(__dirname + '/default.minstache', 'utf8'), data)
    this.response.body = body.res
    return yield* next;
  }

}

  //this.response.type = 'image/svg+xml'
function optimize(string, callback) {
  var svgo = new SVGO();
  svgo.optimize(string, callback);
}

function request(pattern, params) {
  return function(callback) {
    var result = {};
    var found = false;
    oboe({
      url: 'http://registry.npmjs.org/' + params.name + '/latest',
      method: 'GET',
      headers: {
        'user-agent': 'Badgelino/1.0.0',
        'accept': '*/*',
        'accept-encoding': 'gzip,deflate'
      }
    })
    .node(pattern, function(res) {
      result.npm = params.service === 'npm' ? res.npm : false
      result.node = params.service === 'node' ? res.node : false
      result[params.name] = typeof res === 'string' ? res : false
      found = true;
    })
    .done(function onDone() {
      result.name = params.name
      result.format = params.format
      if (!found) result.message = 'engines object not found in package.json'
      callback(null, result)
    })
    .fail(function onFail(err) {
      callback(null, {name: params.name, format: params.format, message: err.jsonBody.reason})
    })
  }
}



app.listen(3000)
