# web-workflow 
<img src="https://github.com/delvallejoni/web-workflow/blob/master/app/images/npm.png" width="32"/> &nbsp; <img src="https://github.com/delvallejoni/web-workflow/blob/master/app/images/gulp.png" width="32"/> &nbsp; <img src="https://github.com/delvallejoni/web-workflow/blob/master/app/images/jade.png" width="32"/> &nbsp; <img src="https://github.com/delvallejoni/web-workflow/blob/master/app/images/sass.png" width="32"/> &nbsp; <img src="https://github.com/delvallejoni/web-workflow/blob/master/app/images/autoprefixer.png" width="32"/>

web-workflow is the structure and workflow that i like to use when i start a new web project using Sass and Jade.
Compiles scss & jade files with Gulp and use: browser-sync to live reload, sourcemaps to see scss routes on inspect, google-webfonts to import Google Fonts and autoprefixer to autoinsert prefixs.
## Gulp
Just go to your project path with the console and write $gulp, everything will be automated for you.
(HTML) Write your html in 'app/jade/index.jade' and this will compile into 'app/index.html'.
(CSS) Write your styles in any files inside 'app/scss/*.scss' and they will compile into 'app/css/style.css' wich is already linked in the 'index.jade'.
(JS) Write your scripts in 'app/js/index.js', this file is already linked in the 'index.jade'.
