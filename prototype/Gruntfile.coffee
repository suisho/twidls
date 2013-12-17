module.exports = (grunt) ->
  grunt.loadNpmTasks 'grunt-contrib-jade'
  grunt.loadNpmTasks 'grunt-bower-task'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.initConfig
    jade:
      compile:
        files: [
          expand : true,
          src : [
            'jade/**/*.jade'
          ],
          dest : 'html/'
          ext : '.html'
          filter : (filepath) =>
            basename = require('path').basename(filepath)
            !basename.match(/^_/)
        ]
    bower :
      install :
        options :
          install : true
          cleanTargetDir : true
          cleanBowerDir : false
          layout : 'byType'
    watch :
      jade:
        files: 'jade/**/*.jade'
        tasks: ["jade"]
 
  grunt.registerTask 'default', ['bower', 'watch']