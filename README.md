# web-workflow

web-workflow is the structure and workflow that i like to use when i start a new web project using Sass and Jade.
Compiles scss & jade files with Gulp and use: browser-sync to live reload, sourcemaps to see scss routes on inspect, google-webfonts to import Google Fonts and autoprefixer to autoinsert prefixs.
## Gulp
Just go to your project path with the console and write ```$gulp```, everything will be automated.
(HTML) Write your html in ```web/src/jade/index.jade``` and this will compile into ```web/build/index.html```.
(CSS) Write your styles in any files inside ```web/src/scss/*.scss``` and they will compile into ```web/build/css/style.css``` wich is already linked in the ```index.jade```.
(JS) Write your scripts in ```web/src/app```, this file will compile in  ```web/build/js/``.
###How?
You need to have Node and npm installed in your pc.
```
$ git clone https://github.com/delvallejoni/web-workflow.git
$ cd web-workflow
$ ./install-dev.sh
$ gulp
```
./install-dev.sh will
Install global dependencies: sudo npm install -g bower, sudo npm install -g gulp.
and Install local dependencies: npm install, bower install.

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
