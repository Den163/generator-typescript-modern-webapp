'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-typescript-modern-webapp:vscode', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({vscode: true});
  });

  it('creates files when vscode is true', () => {
    assert.file('.vscode/launch.json');
  });
});

describe('generator-typescript-modern-webapp:alsatian', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({vscode: true, testfw: 'Alsatian'});
  });

  it('create alsatian testrunner', () => {
    assert.file('testrunner.ts');
  });
});

describe('generator-typescript-modern-webapp:novscode', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({vscode: false});
  });

  it('do not create file when vscode is false', () => {
    assert.noFile('.vscode/launch.json');
  });
});

describe('generator-typescript-modern-webapp:noalsatian', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({vscode: false, testfw: 'None'});
  });

  it('do not create alsatian testrunner', () => {
    assert.noFile('testrunner.ts');
  });
});