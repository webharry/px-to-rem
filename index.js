'use strict';
var through2 = require('through2');

module.exports = function(options) {
  return through2.obj( function ( file, enc, callback ) {
    var rootPX = ( options && options.rootPX ) || 75;
    var accuracy = (options && options.accuracy) || 2;
    if( file.isNull() ) {
      return callback( null, file );
    }
    if( file.isStream() ) {
      return callback(new PluginError('gulp-px-to-rem', 'Streaming not supported'));
    }
    var content = file.contents.toString();
    var str = content.replace(/((-?\d+)(\.\d+)?)px/ig, function($0, $1) {
      var r = ($1 / rootPX).toFixed(accuracy);
      return r + 'rem'
    });
    file.contents = new Buffer(str);
    return callback(null, file);
  })
}