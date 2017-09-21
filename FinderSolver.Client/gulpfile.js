var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'main-bower-files'],
	replaceString: /\bgulp[\-.]/
});
var es = require('event-stream');

var paths = {
    scripts: "wwwroot/app/**/*.js",
    index: './wwwroot/index.html',
    lib: './wwwroot/lib',
    wwwroot: './wwwroot'
};

var scriptsToInclude = [
    './node_modules/vk-api-angular/dist/vk-api-angular.js'
]

var linesToIncludeIntoIndex = [
    '<script src="https://vk.com/js/api/openapi.js?146" type="text/javascript"></script>'
];

// == PIPES =============

var pipes = {};

pipes.orderAppScripts = function() {
    return gulp.src(paths.scripts)
        //.pipe(plugins.print())
        .pipe(plugins.angularFilesort());
};

pipes.orderVendorScripts = function() {
    return pipes.builtVendorScriptsDev()
        .pipe(plugins.naturalSort());
};

pipes.getNpmMainFiles = function(){
    return gulp.src(plugins.mainNpmFiles())
        .pipe(plugins.print());
};

pipes.builtVendorScriptsDev = function() {
    return es.merge(
            gulp.src(plugins.mainBowerFiles()),
            gulp.src(scriptsToInclude)
            //pipes.getNpmMainFiles()
        ).pipe(gulp.dest(paths.lib));
};

pipes.buildIndexDev = function() {
    return gulp.src(paths.index)
        //.pipe(plugins.print())
        .pipe(plugins.inject(pipes.orderVendorScripts(), { relative: true, name: 'bower' }))
        .pipe(plugins.inject(pipes.orderAppScripts(), { relative: true }))
        //.pipe(plugins.injectString.before('</body>', linesToIncludeIntoIndex))
        .pipe(gulp.dest(paths.wwwroot));
};

// == TASKS =============

gulp.task('build-index-dev', pipes.buildIndexDev);

gulp.task('default', ['build-index-dev']);