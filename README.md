##grunt-fail

[![Build Status](https://travis-ci.org/goalzen/grunt-fail.png)](https://travis-ci.org/goalzen/grunt-fail)

Stop grunt execution with an error message and exit code of choice.

###Installation

1. Change directories to the root directory of your project
2. ``npm install grunt-fail``
3. Add the following line to your ``Gruntfile.js``
   
```javascript
grunt.loadNpmTasks('grunt-fail');
```

###Usage

The simplest usage is without any arguments, e.g.

__from the command line__

```bash
grunt fail
```

__from within a Gruntfile__

```javascript
grunt.registerTask('default', ['fail']);
```

####Arguments

``grunt-fail`` takes an optional error message and an optional exit code as arguments.

For example

```bash
grunt "fail:Don't deploy:26"
```

If there is just one argument, it can be either a numerical exit code, or an error message.

The default message is "Failed on purpose."

The default exit code is 255.

####More examples

__command line__

```bash
grunt "fail:no thanks"
```

__Gruntfile__

```javascript
grunt.registerTask('test', ['vows', 'fail:99']);
```

###Exit codes

Exit codes between 1 and 255 work well on all systems.  Other codes may not work as expected.

Grunt doesn't consider an exit code of zero an error, so it won't fail.  Don't use it!

[Here are the exit codes used by grunt for reference.](http://gruntjs.com/api/exit-codes)

###Bugs, etc.

Please report any bugs, feature requests, etc. to [grunt-fail's github issue tracker](https://github.com/goalzen/grunt-fail/issues).
