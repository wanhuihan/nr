module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            less: {
                files: ['*.less'],
                tasks:['less:main'],
                options: {livereload:false}
            },
            css: {
                files: ['*.css'],
                options: {livereload:true}
            }
        },
        less: {
            main: {
                expand: true,
                cwd: '.',
                src: ['*.less'],
                dest: '.',
                ext: '.css'
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default',['watch']);
    grunt.registerTask('lessc',['less:main']);

};