module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-properties-to-json');

    grunt.initConfig({
        clean: {
            deploy: ['dist/*', 'src/shared/resources/ResourceManager.ts', 'src/shared/resources/*.json']
        },

        copy: {
            src: {
                files: [
                    { expand: true, cwd: 'src', src: '**/*.js', dest: 'dist'},
                    { expand: true, cwd: 'src', src: '**/*.html', dest: 'dist'},
                    { expand: true, cwd: 'src', src: '**/*.css', dest: 'dist'},
                    { expand: true, cwd: 'src', src: 'test/*.json', dest: 'dist' }
                ]
            },
            libs: {
                files: [
                    { expand: true, cwd: 'node_modules/bootstrap/fonts', src: '*', dest: 'dist/lib/fonts'},
                    { expand: true, cwd: 'node_modules/bootstrap/dist', src: '**/*', dest: 'dist/lib/bootstrap'},
                    { expand: true, cwd: 'node_modules/font-awesome', src: '**/*', dest: 'dist/lib/font-awesome'},
                    { expand: true, cwd: 'node_modules/\@angular', src: '**/*.umd.js', dest: 'dist/lib/\@angular'},
                    { expand: true, cwd: 'node_modules/rxjs', src: '**/*.js', dest: 'dist/lib/rxjs'},
                    { expand: true, cwd: 'node_modules/systemjs/dist', src: '**/*.js', dest: 'dist/lib/systemjs'},
                    { expand: true, cwd: 'node_modules/core-js', src: '**/*.js', dest: 'dist/lib/core-js'},
                    { expand: true, cwd: 'node_modules/reflect-metadata', src: '**/*.js', dest: 'dist/lib/reflect-metadata'},
                    { expand: true, cwd: 'node_modules/zone.js/dist', src: '**/*.js', dest: 'dist/lib/zone.js'},
                    { expand: true, cwd: 'node_modules/lodash', src: '**/*.js', dest: 'dist/lib/lodash'}
                ]
            },
            assets: {
                files: [
                    { expand: true, cwd: 'src', src: '**/*.ttf', dest: 'dist'},
                    { expand: true, cwd: 'src', src: '**/*.woff', dest: 'dist'},
                    { expand: true, cwd: 'src', src: '**/*.woff2', dest: 'dist'}
                ]
            }
        },

        propertiesToJSON: {
            main: {
                src: ['src/shared/resources/*.properties']
            }
        },

        ts: {
            base: {
                tsconfig: true
            }
        },

        sass: {
            dist: {
                files: {
                    'dist/main.css' : 'src/main.scss'
                }
            }
        }
    });

    grunt.registerTask('template', function () {
        grunt.task.requires('propertiesToJSON');
        var en_us = grunt.file.read('src/shared/resources/en-us.json');
        var links = grunt.file.read('src/shared/resources/links.json');
        var tpl = grunt.file.read('src/shared/resources/ResourceManager.service.ts.tpl');
        grunt.file.write('src/shared/resources/ResourceManager.service.ts', grunt.template.process(tpl, { 'data': { 'en_us': en_us, 'links': links }}));
    });
    grunt.registerTask('resourceManager', ['propertiesToJSON', 'template']);

    grunt.registerTask('fullCopy', ['copy:src', 'copy:libs', "copy:assets"]);
    grunt.registerTask('deploy', ['clean:deploy', 'resourceManager', 'ts', 'sass', 'fullCopy']);
    grunt.registerTask('liveDeploy', ['resourceManager', 'ts', 'sass', 'copy:src']);
};
