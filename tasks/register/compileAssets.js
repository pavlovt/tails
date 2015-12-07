module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
		'clean:dev',
        'ts:dev',
		'sass:dev',
		'copy:dev'
	]);
};
