module.exports = function(grunt) {
  grunt.config.set('sass', {
    dev: {
			files: [{
                expand: true,
                cwd: 'assets/styles/',
                src: '**/*.scss',
                ext: '.css',
                dest: '.tmp/public/styles/'
            }
        ]
    }
   });
   
   grunt.loadNpmTasks('grunt-contrib-sass');
};