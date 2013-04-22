# grunt-booty

> Adds the bootstrap to your project from a bower install - (optionally includes font-awesome)

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-booty --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-booty');
```

## The "booty" task

### Overview
In your project's Gruntfile, add a section named `booty` to the data object passed into `grunt.initConfig()`, it's a
multitask so you'll need to add a task identier (e.g. `dev`):

```js
grunt.initConfig({
  booty: {
    dev: {
      options: {
        componentPath: '/path/to/bower/components/',
        dest: '/path/to/styles/directory/'
      }
    }
  }
})
```

### Options

#### options.componentPath
The location of the bower installs

#### options.dest
The stylesheet destination for all of the bootstrap and font-awesome goodness

### Usage Examples
The plugin is designed to be able to be integrated easily into a number of projects although the initial use case is
to include bootstrap and font-awesome-more into a yeoman angular scaffold ( _using yeoman 1.0_ ).  These are the
steps to do that:

* Make sure __yeoman__, __bower__, __grunt__ and the __angular generator__ are installed ( _[more info](http://yeoman.io/)_ )
  ```bash
  npm install -g yo grunt-cli bower
  npm install -g generator-angular generator-karma
  ```

* Create a new directory and scaffold the project with yeoman.  Yeoman will ask for a number of setup options, just
hit `n` for everything ( _you can add the additional angular stuff if you need but no need for the Compass version of
bootstrap_ )
  ```bash
  mkdir bootilicious && cd $_
  yo angular
  ```

* Install the components we want from __bower__ and install the __grunt__ tasks we need to work with them
  ```bash
  bower install bootstrap font-awesome-more --save
  npm install grunt-booty grunt-contrib-less --save-dev
  ```

* Everything will be installed and ready to go but there is a quick bit of scaffolding before we can set up the tasks
to run - go ahead and create a `css` and a `less` folder in `styles`, we can also delete the pre-generated `main.css`
as we’ll be using a slightly different structure ( _grunt-booty will very soon take care of this step for you_ )
  ```bash
  mkdir -p app/styles/{css,less}
  rm app/styles/main.css
  ```

* Create `main.less` in `app/styles/less` and add these lines to import __bootstrap__ and __font-awesome-more__ ( _if
you want the extras in font-awesome-more then import them here_ ):
  ```bash
  vi app/styles/less/main.less
  ```
  ```less
  @import './../bootstrap/bootstrap';
  @import './../bootstrap/responsive';
  @import './../font-awesome-more/font-awesome';
  ```

* While we’re house keeping we should also update the link to the `main.css` file that will be created when the task
is run.  Replace line 14 in `index.html` with this ( _adds the css folder to the path for the css_ ):
  ```html
  <link rel="stylesheet" href="styles/css/main.css">
  ```

* Now it’s time to set up the tasks.  Add these tasks to your `Gruntfile.initConfig` object:
  ```js
  booty: {
    dev: {
      options: {
        componentPath: '<%= yeoman.app %>/components/',
        dest: '<%= yeoman.app %>/styles/'
      }
    }
  },
  less: {
    dev: {
      options: {
        paths: ['<%= yeoman.app %>/styles/less/']
      },
      files: {
        '<%= yeoman.app %>/styles/css/main.css': '<%= yeoman.app %>/styles/less/main.less'
      }
    }
  }
  ```
  ( _Booty is a one-time assembly task—unless you’re reassembling bootstrap and font-awesome-more after an update—but
  you'll probably want to compile your less more than once so you'll probably want to add the less task to the server
  task that is scaffolded from yeoman and additionally add your less to the watch task_ )

* Everything should be ready to rock so hit up your tasks
  ```bash
  grunt booty
  grunt less
  ```

* Now fire up the server to see the yeoman generated index page, complete with bootstrappy goodness
  ```bash
  grunt server
  ```

* To test that font-awesome-more has been also been included in your project go ahead and open up a new bash tab to
keep the watch task running and replace line 2 in `app/views/main.html` with this:
  ```bash
  vi app/views/main.html
  ```
  ```html
  <h1><i class="icon-github icon-large"></i> 'Allo, 'Allo!</h1>
  ```

* Now get to work creating awesome things


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
22.04.2013 v0.2.1 Corrections to vanilla test case - Detailed usage example using yeoman angular generator

20.04.2013 v0.2.0 Task ready to roll with test case - Initial deploy to npm

---

Task submitted by [Matt Styles](http://veryfizzyjelly.com) [@veryfizzyjelly](https://twitter.com/veryfizzyjelly)
