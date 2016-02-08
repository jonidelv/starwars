# web-workflow 
<img src="https://github.com/delvallejoni/web-workflow/blob/master/app/images/npm.png" width="32"/> &nbsp; <img src="https://github.com/delvallejoni/web-workflow/blob/master/app/images/gulp.png" width="32"/> &nbsp; <img src="https://github.com/delvallejoni/web-workflow/blob/master/app/images/jade.png" width="32"/> &nbsp; <img src="https://github.com/delvallejoni/web-workflow/blob/master/app/images/sass.png" width="32"/> &nbsp; <img src="https://github.com/delvallejoni/web-workflow/blob/master/app/images/autoprefixer.png" width="32"/> &nbsp; <img src="https://github.com/delvallejoni/web-workflow/blob/master/app/images/bs.png" width="32"/> 

web-workflow is the structure and workflow that i like to use when i start a new web project using Sass and Jade.
Compiles scss & jade files with Gulp and use: browser-sync to live reload, sourcemaps to see scss routes on inspect, google-webfonts to import Google Fonts and autoprefixer to autoinsert prefixs.
## Gulp
Just go to your project path with the console and write ```$gulp```, everything will be automated for you.
(HTML) Write your html in ```app/jade/index.jade``` and this will compile into ```app/index.html```.
(CSS) Write your styles in any files inside ```app/scss/*.scss``` and they will compile into ```app/css/style.css``` wich is already linked in the ```index.jade```.
(JS) Write your scripts in ```app/js/index.js```, this file is already linked in the ```index.jade```.
###How?
```
$ git clone https://github.com/delvallejoni/web-workflow.git 
$ cd web-workflow
$ npm install
$ gulp
```
###Bower
The project contains a ```bower.json``` but you have to install it globally first.
```$ npm install -g bower``` then just go to your project folder and  ```$ bower install bootstrap --save``` and will install Bootstrap or any other framework.
**You have to add manually the frameworks links to your ```index.jade```** go to ```bower_components/frameworkfolder/ ``` and link the ```.min.css``` & ```.min.js to the``` ```index.jade```.

###Google Fonts
```
# Tab-delimeted format
Oswald	400,700	latin,latin-ext

# Google format
Roboto:500,500italic&subset=greek
```
Change the name of the font you want to export from google fronts and thats it ej: ```Lato:400,800``` and they will link to the index. Then just font-family: 'Lato', font-weight:800;

###Dont like jade?
Remove ```app/jade``` folder and write everything in ```app/index.htm```.
Also from gulpfile.js remove line 8, 21, 45-57 and ```'jadeCompila'``` from line 14.

ENJOY!



