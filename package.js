Package.describe({
  summary: "Basic blog functionality for Meteor.js applications",
  version: "1.0.0",
  git: "https://github.com/bredikhin/meteor-posts"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');
  api.use(['templating'], 'client');
  api.use(['mongo', 'iron:router@1.0.3'], ['client', 'server']);
  api.addFiles(['client/views/posts.html',
    'client/views/posts_item.html',
    'client/views/post.html'
  ], 'client');
  api.addFiles(['posts.js', 'collections/posts.js'], ['client', 'server']);
  api.addFiles(['server/publications.js'], 'server');

  if (api.export) {
    api.export('Posts');
  }
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('bredikhin:posts');
  api.addFiles('posts_tests.js');
});
