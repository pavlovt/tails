/**
 * Compile TS files to JS.
 *
 * @see https://github.com/TypeStrong/grunt-ts
 */
module.exports = function(grunt) {
    grunt.initConfig({
      // This is optional!
      notify_hooks: {
        options: {
          enabled: true,
          max_jshint_notifications: 5, // maximum number of notifications from jshint output
          title: "Tails", // defaults to the name in package.json, or will use project directory's name
          success: false, // whether successful grunt executions should be notified automatically
          duration: 3 // the duration of notification in seconds, for `notify-send only
        }
      }
    });

    // Load the task
    grunt.loadNpmTasks('grunt-notify');

    // This is required if you use any options.
    grunt.task.run('notify_hooks');
};
