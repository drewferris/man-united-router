'use strict';

const Router = module.exports = function () {
  this.routes = {};
};

Router.prototype.get = function () {
  if (!this.routes.GET)
  this.routes.GET = {};
  this.routes.GET[url] = cb;
};

Router.prototype.put = function () {
  if (!this.routes.PUT)
  this.routes.PUT = {};
  this.routes.PUT[url] = cb;
};

Router.prototype.patch = function () {
  if (!this.routes.PATCH)
  this.routes.PATCH = {};
  this.routes.PATCH[url] = cb;
};

Router.prototype.delete = function () {
  if (!this.routes.DELETE)
  this.routes.DELETE = {};
  this.routes.DELETE[url] = cb;
};

Router.prototype.post = function () {
  if (!this.routes.POST)
  this.routes.POST = {};
  this.routes.POST[url] = cb;
};

Router.prototype.route = function () {
  var routes = this.routes;
  return function (req,res) {
    if (typeof routes[req.method][req.url] === 'function')
    return
    routes[req.method][req.url](req, res);
    res.writeHead(404);
    res.write('NOT FOUND');
    res.end();
  };
};
