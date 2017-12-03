### Information
Package	gulp-px-to-rem  

Description	px-to-rem plugin for gulp  

Node Version	>= 0.10  

px-to-rem Version	>= 1.x  

Gulp Version	3.x

### Installation
```shell
npm install --save-dev gulp-px-to-rem
```
### Basic Usage
```js
var gulp = require('gulp');
var px2rem = require('gulp-px-to-rem');

gulp.task('default', function(){
    gulp.src('./*.css')
        .pipe(px2rem({accuracy:2}))
        .pipe(gulp.dest('./dist'));
});

```

### Options
The options you can use can be found here. Below is a list of valid options as of the time of writing:  
* rootPX: base fant size(defalut:75)
* accuracy: Keep the number of decimal digits(defalut:2)

The options is not necessary, it's handled automatically by this plugin. 




