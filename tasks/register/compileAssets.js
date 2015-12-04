module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
		'clean:dev',
		'jst:dev',
        'ts:dev',
		'sass:dev',
		'copy:dev',
		'coffee:dev'
	]);
};
