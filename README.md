# Simple Fake Model (synchronous version)

[![npm version][npmsemver-image]][npmsemver-url]
[![Build Status][ci-image]][ci-url]
[![Coverage Status][cv-image]][cv-url]
[![Code Climate][cq-image]][cq-url]
[![Dependencies][deps-image]][deps-url]
[![Dev Dependencies][dev-deps-image]][dev-deps-url]
[![License][license-image]][license-url]

> Simple fake model to avoid using real databases in teaching

## Table of Contents

* [Introduction](#introduction)
* [API](#api)
* [Installation](#installation)
* [NPM tasks](#npm-tasks)
* [Contributing and help](#contributing)
    * [Criticism](#criticism)
    * [Developing](#developing)
    * [Bug reports, feature requests and discussion](#contributing)
* [License](#license)
* [Frequently Asked Questions](#faq)


## <a name="introduction"></a> Introduction

This is a simple library which avoids using real database in my JavaScript teachings.

It is just a stupid wrapper around a array which provides a easy API for listing, adding, getting and removing items.

## <a name="api"></a> API
```
const FakeModel = require('simple-fake-model');

const model = new FakeModel();
```
Implemented features:

* `model.list()` which returns an array with all the items stored.
* `model.insert(object)` which accepts an object and stores it with an `id`. Inserted item is returned.
* `model.getById(id)` which accepts an id and returns the item stored with provided id.
* `model.deleteById(id)` which removes the item with provided id.
* `model.updateById(id, object)` which updates the item with provided id.

All the methods are synchronous

## <a name="installation"></a> Installation

Install using NPM
```
npm install --save simple-fake-model
```

## <a name="npm-tasks"></a> Useful npm tasks

The module has some `npm` scripts which could be useful for developing purpose:
* `npm test` runs the linter, all the tests and gives test coverage statistics
* `npm run test:unit` runs the unit testing. Using `npm run test:unit:watch` will watch for changes
* `npm run test:coverage` show coverage statistics
* `npm run lint` lints the code

## <a name="contributing"></a> Contributing and help

### <a name="criticism"></a> Criticism
I know the library is stupid as hell. It's probably a feature.

If you think something could be done better or simply sucks, bring up a issue on the [tracker](https://github.com/fcanela/simple-fake-model/issues). Don't be shy. I really love feedback and technical discussions.

### <a name="developing"></a> Developing
Pull requests are welcome (and will make me cry in joy) as long as they pass tests for included and old features.

Did I already say that I **love** technical discussions? Feel free to open a issue on the [tracker](https://github.com/fcanela/simple-fake-model/issues) if you have any doubt.

### <a name="bugs"></a> Bug reports, feature requests and discussion

Use the [GitHub issue tracker](https://github.com/fcanela/simple-fake-model/issues) to report any bugs or file feature requests. In case you found a bug and have no GitHub account, feel free to email me: fcanela.dev at gmail dot com.

## <a name="license"></a> License

Copyright (c) 2016 Francisco Canela. Licensed under the MIT license.

## <a name="faq"></a> Frequently Asked Questions

### Can I use it in production?

Never. This project has been created for teaching and not for production.


[npmsemver-image]: https://img.shields.io/badge/version-1.0.0-orange.svg
[npmsemver-url]: https://github.com/fcanela/simple-fake-model
[ci-image]: https://travis-ci.org/fcanela/simple-fake-model.svg?branch=master
[ci-url]: https://travis-ci.org/fcanela/simple-fake-model
[cv-image]: https://coveralls.io/repos/github/fcanela/simple-fake-model/badge.svg?branch=master
[cv-url]: https://coveralls.io/github/fcanela/simple-fake-model?branch=master
[cq-image]: https://codeclimate.com/github/fcanela/simple-fake-model/badges/gpa.svg
[cq-url]: https://codeclimate.com/github/fcanela/simple-fake-model
[deps-image]: https://david-dm.org/fcanela/simple-fake-model.svg
[deps-url]: https://david-dm.org/fcanela/simple-fake-model
[dev-deps-image]: https://david-dm.org/fcanela/simple-fake-model/dev-status.svg
[dev-deps-url]: https://david-dm.org/fcanela/simple-fake-model#info=devDependencies
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg
[license-url]: LICENSE
