module.exports = function (grunt) {
    grunt.initConfig({

        clean: {
            app: ['src/build']
        },

        'angular-builder': {
            application: {
                options: {
                    mainModule: 'testApp',
                    externalModules: ['ui.router', 'oc.lazyLoad']
                },
                src: 'src/app/**/*.js',
                dest: 'src/build/app.js'

            },
            layout: {
                options: {
                    mainModule: 'testApp.layout'
                },
                src: 'src/app/modules/layout/**/*.js',
                dest: 'src/build/layout.js'
            },
            firstModule: {
                options: {
                    mainModule: 'testApp.firstModule'
                },
                src: 'src/app/modules/firstModule/**/*.js',
                dest: 'src/build/firstModule.js'
            },
            secondModule: {
                options: {
                    mainModule: 'testApp.secondModule'
                },
                src: 'src/app/modules/secondModule/**/*.js',
                dest: 'src/build/secondModule.js'
            }
        },
        bower_concat: {
            all: {
                dest: 'src/build/lib.js'
            }
        },
        watch: {
            options: {
                interrupt: true
            },
            app: {
                files: ['src/app/**/*.js'],
                tasks: ['clean','angular-builder', 'bower_concat:all']
            }
        }

    })
    ;

    grunt.loadNpmTasks('grunt-angular-builder');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-bower-concat');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('release', ['clean', 'angular-builder', 'bower_concat:all']);
    grunt.registerTask('debug', ['clean', 'angular-builder::debug', 'bower_concat:all']);

}
;