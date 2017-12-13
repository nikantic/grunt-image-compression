# Grunt image compression

This is a simple Grunt setup to compress all images you drop in the folder using the imagemin plugin. There is a file support for many image files including the lossy compression for png and jpeg file formats. You can run it locally and tweak the maximum image quality factor. There is auto clean for folders and original image backup.

## Built with

- Node.js and npm
- Grunt
- [imagemin](https://github.com/gruntjs/grunt-contrib-imagemin) and plugins ([pngquant](https://www.npmjs.com/package/imagemin-pngquant) and [jpegoptim](https://www.npmjs.com/package/imagemin-jpegoptim))
- [grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean) and [grunt-contrib-copy](https://github.com/gruntjs/grunt-contrib-copy)

## Setup

Make sure you have Node.js, npm and Grunt globally installed. Clone/Download the repository and run `npm install`. Drop the images you want to compress in the *drop-images-here* folder. Open up the command line in the project directory and run:

- `grunt` - to compress all images
- `grunt watch` - to compress all images and auto compress new images as get added, as long as you keep the command line running
- `grunt clean:all` - to clean all image folders

Your compressed images will be in *compressed-images* folder and your original images in the *backup-images* folder. 

You can save up to 70% in file size with no visible reduction in image quality. For further tweaks, edit the *Gruntfile.js* `imageQuality` variable to control the final jpeg image quality factor (0-100).