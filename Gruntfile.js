var pngquant = require('imagemin-pngquant');
var jpegoptim = require('imagemin-jpegoptim');
var imageQuality = 60; // maximum image quality factor (0-100)

module.exports = function(grunt) {
	grunt.initConfig({
		imagemin: {
			options: {
				use: [pngquant(), jpegoptim({
					max: imageQuality 
				})]
			},
			dynamic: {
	            files: [{
	                expand: true,
	                cwd: 'drop-images-here/',
	                src: ['**/*.{png,jpg,jpeg,svg}'],
	                dest: 'compressed-images'
	            }]
	        }
		},
		copy: {
			backup: {
				files: [{
						expand: true, 
						cwd: 'drop-images-here/', 
						src: ['**/*.{png,jpg,jpeg,svg}'], 
						dest: 'backup-images'
					}]
			}
		},
		clean: {
			drop: ['drop-images-here/*'],
			all: ['drop-images-here/*', 'backup-images/*', 'compressed-images/*']
		},
		watch: {
			images: {
				options: {
					event:  ['added'],
					atBegin: true
				},
				files: 'drop-images-here/**/*.{png,jpg,jpeg,svg}',
				tasks: ['imagemin', 'copy', 'clean:drop']
			}
		}
	});

	// Load tasks
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Register default task
	grunt.registerTask('default', ['imagemin', 'copy', 'clean:drop']);
};
