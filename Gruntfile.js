module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.loadNpmTasks('grunt-screeps');

    grunt.initConfig({
        babel: {
            options: {
                sourceMap: true,
                presets: ["env"]
            },
            dist: {
                files: [{
                    expand: true,
                    src: ['src/**/*.js'],
                    dest: 'dist',
                    ext: '.js'
                }]
            }
        },
        screeps: {
            options: {
                email: process.env.SCREEPS_EMAIL,
                password: process.env.SCREEPS_PASS,
                branch: 'default',
                ptr: false
            },
            dist: {
                src: ['dist/src/js/*.{js,wasm}'],
            }
        }
    });

    grunt.registerTask("build_deploy", "Transpile with babel and deploy to screeps", ["babel", "screeps"])
};