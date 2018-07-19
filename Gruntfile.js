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
                files: [
                    {
                        expand: true,
                        cwd: 'src/',
                        src: ['**/*.{js,wasm}'],
                        flatten: true
                    }
                ]
            }
        }
    });

    grunt.registerTask("transpileAndDeploy", "Transpile with babel and deploy to screeps", ["babel", "screeps"])
};