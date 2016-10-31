module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
          options: {
            separator: ';'
          },
          dist: {
            src: ['app/js/src/*.js'],
            dest: 'app/js/dist/script.min.js'
          },
          options: {
            separator: ''
          },
          dist: {
            src: ['app/css/src/*.css' ],
            dest: 'app/css/dist/style.min.css'
          },
        },
        uglify: {
          dist:{
            src:['app/js/dist/script.min.js'],
            dest: 'app/js/dist/script.min.js'
          },
          dist:{
            src: ['app/css/dist/css.min.css'],
            dest: 'app/css/dist/css.min.css'
          }
        }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concat', 'uglify']);

};
