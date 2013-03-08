##grunt-fail

Stop grunt execution with an error message and return code of choice.

###Installation

1. Change directories to the root directory of your project
2. ``npm install grunt``
3. ``npm install grunt-fail``
4. Add the following line to your ``Gruntfile.js``
   
   ``grunt.loadNpmTasks('grunt-fail');``

The ``fail`` task is now available; for example

    grunt fail

###Usage

``grunt-fail`` takes an optional error message and an optional return code as arguments.

For example

    grunt "fail:Don't deploy:-26"

If there is just one argument, it can be either a numerical return code, or an error message.

The default message is "Failed on purpose."

The default return code is -1.

More examples

    grunt fail:-6
    grunt "fail:no thanks"

You can use it in an alias task like this

    task('test', ['vows', 'fail:99']);

###Don't set the error code to zero
Grunt doesn't consider zero an error, so it won't fail.  Don't use it!

###Bugs, etc.

Please report any bugs, feature requests, etc. to [grunt-fails's github issue tracker](https://github.com/goalzen/grunt-fail/issues).
