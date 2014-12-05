var basePath = '/posts';

Tinytest.add('Posts - Iron Router plugin - sets up the route for the index page', function (test) {
  var Router = new Iron.Router({autoRender: false, autoStart: false});
  Router.plugin('posts', {basePath: basePath});
  test.include(Object.keys(Router.routes), 'posts');
  test.equal(Router.routes.posts.path(), basePath);
});

Tinytest.add('Posts - Iron Router plugin - sets up the route for the individual posts', function (test) {
  var Router = new Iron.Router({autoRender: false, autoStart: false});
  Router.plugin('posts', {basePath: basePath});
  test.include(Object.keys(Router.routes), 'post');
  test.include(Router.routes.post.path({slug: 'a-slug'}), basePath);
});

Tinytest.add('Posts - Iron Router plugin - defaults the base path to `/blog`', function (test) {
  var Router = new Iron.Router({autoRender: false, autoStart: false});
  Router.plugin('posts');
  test.include(Object.keys(Router.routes), 'posts');
  test.equal(Router.routes.posts.path(), '/blog');
  test.include(Object.keys(Router.routes), 'post');
  test.include(Router.routes.post.path({slug: 'a-slug'}), '/blog');
});
