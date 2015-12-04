/**
 * Compile TS files to JS.
 *
 * @see https://github.com/TypeStrong/grunt-ts
 */
module.exports = function(grunt) {
    grunt.initConfig({
        tsd: {
            refresh: {
                options: {
                    // execute a command
                    command: 'reinstall',

                    //optional: always get from HEAD
                    latest: true,

                    // specify config file
                    config: '../tsd.json',

                    // experimental: options to pass to tsd.API
                    opts: {
                        // props from tsd.Options
                    }
                }
            }
        }
    })
};
