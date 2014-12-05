# Basic blog functionality for Meteor.js applications

At this point the package provides read-only functionality (a list of posts and
single post pages).

## Installation

`meteor add bredikhin:posts`

## Configuration (Iron Router)

```javascript
var basePath = '/my-blog';
Router.plugin('posts', {basePath: '/fashion-blog'});
```

`basePath` defaults to `/blog`.

## Exports

The package exposes templates `posts` (post list), `postsItem`
(post list item) and `post` (single post page), as well as `Posts` collection
and `posts` plugin for Iron Router.

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2014 [Ruslan Bredikhin](http://ruslanbredikhin.com/)
