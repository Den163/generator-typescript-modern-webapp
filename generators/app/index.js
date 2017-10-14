'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the super ' + chalk.red('generator-typescript-modern-webapp') + ' generator!'
    ));

    const prompts = [
      {
        type: 'input',
        name: 'username',
        message: "What's your name user?",
        default: "user"
      },
      {
        type: 'confirm',
        name: 'vscode',
        message: "Are you using Visual Studio Code?",
        default: false
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath(), this.destinationPath()
    );

    if (this.props.vscode)
    {
      this.fs.copy(
        this.templatePath(".vscode"), this.destinationPath(".vscode")
      );
    }

    const pkg = this.fs.readJSON(this.destinationPath("package.json"), {});
    pkg.name = this.props.username;

    this.fs.writeJSON(this.destinationPath("package.json"), pkg);
  }

  install() {
    this.installDependencies({bower: false, yarn: false});
  }
};
