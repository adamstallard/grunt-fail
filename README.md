##grunt-fail

[![Build Status](https://travis-ci.org/goalzen/grunt-fail.png)](https://travis-ci.org/goalzen/grunt-fail)

Stop grunt execution with an error message and exit code of choice.

###Installation

1. Change directories to the root directory of your project
2. ``npm install grunt``
3. ``npm install grunt-fail``
4. Add the following line to your ``Gruntfile.js``
   
   ``grunt.loadNpmTasks('grunt-fail');``

The ``fail`` task is now available; for example

    grunt fail

###Usage

``grunt-fail`` takes an optional error message and an optional exit code as arguments.

For example

    grunt "fail:Don't deploy:26"

If there is just one argument, it can be either a numerical exit code, or an error message.

The default message is "Failed on purpose."

The default exit code is 255.

More examples

    grunt fail:6
    grunt "fail:no thanks"

You can use it in an alias task like this

    task('test', ['vows', 'fail:99']);

###Exit codes

Grunt seems to do best across platforms with exit codes between 1 and 255 inclusive.  Negative numbers might work,
but it adds them to 256 to make them positive on some platforms.

Grunt doesn't consider an exit code of zero an error, so it won't fail.  Don't use it!

[Here are the exit codes used by grunt for reference.](http://gruntjs.com/api/exit-codes)

###Bugs, etc.

Please report any bugs, feature requests, etc. to [grunt-fail's github issue tracker](https://github.com/goalzen/grunt-fail/issues).
