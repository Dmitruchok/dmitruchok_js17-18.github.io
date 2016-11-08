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
            dest: 'dist/css/style.min.css'
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
          css:{
            src: ['dist/css/style.min.css'],
            dest: 'dist/css/style.min.css'
          },
        },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concat', 'uglify']);

};
