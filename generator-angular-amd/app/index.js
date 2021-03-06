/**
 * Created by Amit Thakkar on 05/05/15.
 */
(function (module, require) {
    'use strict';
    var generators = require('yeoman-generator').generators;
    var yosay = require('yosay');
    module.exports = generators.Base.extend({
        constructor: function () {
            generators.Base.apply(this, arguments);
            this.argument('appname', {type: String, required: false, desc: "Application Name"});
        },
        initializing: function () {
            this.pkg = require('../package.json');
        },
        prompting: function () {
            var done = this.async();
            this.log(yosay('Welcome to the Angular AMD with Browserify generator!'));
            if (this.appname) {
                done();
            } else {
                this.prompt({
                    type: 'input',
                    name: 'projectName',
                    message: 'Your project name',
                    default: this.appname
                }, function (answers) {
                    this.log("Project Name: ", answers.projectName);
                    done();
                }.bind(this));
            }
        },
        init: function () {
            this.helperMethod = function () {
                console.log('won\'t be called automatically');
            };
        },
        writing: {
            app: function () {
                this.fs.copy(
                    this.templatePath('angular-amd.js'),
                    this.destinationPath('app/angular-amd.js')
                );
                this.fs.copy(
                    this.templatePath('config.js'),
                    this.destinationPath('app/config.js')
                );
                this.fs.copy(
                    this.templatePath('index.html'),
                    this.destinationPath('index.html')
                );
                this.fs.copy(
                    this.templatePath('gulpfile.js'),
                    this.destinationPath('gulpfile.js')
                );
                this.fs.copy(
                    this.templatePath('sample/sample.controller.js'),
                    this.destinationPath('app/sample/sample.controller.js')
                );
                this.fs.copy(
                    this.templatePath('sample/sample.html'),
                    this.destinationPath('app/sample/sample.html')
                );
                this.fs.copy(
                    this.templatePath('sample/sample.main.js'),
                    this.destinationPath('app/sample/sample.main.js')
                );
                this.fs.copy(
                    this.templatePath('sample/sample.service.js'),
                    this.destinationPath('app/sample/sample.service.js')
                );
                this.fs.copy(
                    this.templatePath('sample/sample.spec.js'),
                    this.destinationPath('app/sample/sample.spec.js')
                );
                this.fs.copy(
                    this.templatePath('_package.json'),
                    this.destinationPath('package.json')
                );
            },
            projectfiles: function () {
                this.fs.copy(
                    this.templatePath('editorconfig'),
                    this.destinationPath('.editorconfig')
                );
                this.fs.copy(
                    this.templatePath('jshintrc'),
                    this.destinationPath('.jshintrc')
                );
            }
        },
        install: function () {
            this.npmInstall();
        }
    });
})(module, require);