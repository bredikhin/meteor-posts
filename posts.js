// Routing
Iron.Router.plugins.posts = function(router, options) {
  options = options || {};
  basePath = options['basePath']||'/blog';

  router.route(basePath, {
    name: 'posts',
    waitOn: function() {
      return Meteor.subscribe('posts');
    },
    data: function() {
      return {
        posts: Posts.find()
      };
    }
  });
  router.route(basePath + '/:slug', {
    name: 'post',
    action: function() {
      this.render('post', {
        data: function() {
          return Posts.findOne({
            slug: this.params.slug
          });
        }
      });
    }
  });
};
