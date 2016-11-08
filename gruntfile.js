module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
          options: {
            separator: ';'
          },
          js: {
            src: ['app/js/*.js'],
            dest: 'dist/js/script.min.js'
          },
          options: {
            separator: ''
          },
          css: {
            src: ['app/css/src/*.css'],
            dest: 'dist/css/style.min.css',
            src: ['app/css/normalize.css'],
            dest: 'dist/css/normalize.css'
          },
          html: {
            src: ['app/*.html'],
            dest: 'dist/index.html'
          },
        },
      uglify: {
          js: {
            src:['dist/js/script.min.js'],
            dest: 'dist/js/script.min.js'
          },
        },
        cssmin: {
            target: {
              files: [{
                expand: true,
                cwd: 'dist/css',
                src: ['*.css',],
                dest: 'dist/css',
              }]
            },
          },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};
