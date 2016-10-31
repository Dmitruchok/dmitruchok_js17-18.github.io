module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
          options: {
            separator: ';'
          },
          dist: {
            src: ['app/js/src/*.js'],
            dest: 'app/js/dist/script.min.js'
          }
        },
        uglify: {
          dist:{
            src:['app/js/dist/script.min.js'],
            dest: 'app/js/dist/script.min.js'
          }
        }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concat', 'uglify']);

};
