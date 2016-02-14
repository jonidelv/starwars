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
You need to have Node and npm installed in your pc.
```
$ git clone https://github.com/delvallejoni/web-workflow.git
$ cd web-workflow
$ ./install-dev.sh
$ gulp
```
./install-dev.sh will
Install global dependencies
sudo npm install -g bower
sudo npm install -g gulp
Install local dependencies
npm install
bower install

###Bower
The project contains a ```bower.json``` just install the framework or library you want to doing ```$ bower install bootstrap --save``` and will install Bootstrap or any other framework. The library or framework main files will be linked in the index.html automatically by Gulp.

###Google Fonts
```
# Tab-delimeted format
Oswald	400,700	latin,latin-ext

# Google format
Roboto:500,500italic&subset=greek
```
Change the name of the font you want to export from google fronts and thats it ej: ```Lato:400,800``` and they will link to the index. Then just font-family: 'Lato', font-weight:800;

###Dont like Jade?
Remove ```app/jade``` folder and write everything in ```app/index.html```.
Also from gulpfile.js remove line 8, 21, 45-57 and ```'jadeCompila'``` from line 14.
