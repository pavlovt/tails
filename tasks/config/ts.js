/**
 * Compile TS files to JS.
 *
 * @see https://github.com/TypeStrong/grunt-ts
 */
module.exports = function(grunt) {
    grunt.config.set('ts', {
        dev: {
            files: [
                {
                    src: [
                        'ts_api/**/*.ts'
                    ],
                    dest: 'api'// Will generate at the exact same location as the source.
                }
            ],

            options: {
                module: 'commonjs',
                target: 'es5',
                fast: 'never',
                comments: true,
                sourceMap: false,// Useless on the server side.
                declaration: true,// Always useful to have declarations available.
                noEmitOnError: false,// Force log errors.
                failOnTypeErrors: false,// Force log grunt errors pipeline.
                verbose: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-ts');
};
