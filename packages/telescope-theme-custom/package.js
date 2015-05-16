Package.describe({
  summary: "Telescope custom theme",
  version: '0.1.0',
  name: "telescope-theme-custom"
});
Package.onUse(function (api) {

  api.use('fourseven:scss');
  api.use('telescope-base');
  api.use('templating');

  api.addFiles(
    [
      // sass
      'lib/client/scss/screen.scss',
      'lib/client/scss/style.css',

      // js
      'lib/client/custom.js',

      // html
      'lib/client/templates/new_posts_list.html',
      'lib/client/templates/newnav.html',
      'lib/client/templates/newuser_menu.html'
    ],
    'client'
  );

});
