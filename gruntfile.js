const sass = require('node-sass');
module.exports = function(grunt) {
    grunt.initConfig({
     sass:{
        dist:{
            files:{
                "src/style.css":"src/style.scss"
            },
            options: {
              implementation: sass,
              /* outputStyle: 'compact',
              sourceComments: false,
              sourceMap: true */
          },
        }
     },
      watch: {
        css:{
            files:'src/**/*.scss',
            tasks:['sass'],
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-sass');
   grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);
  
  };