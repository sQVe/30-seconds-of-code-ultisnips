# 30-seconds-of-code-ultisnips

_30 seconds of code is a curated collection of useful JavaScrupt snippets that you can understand in 30 seconds or less. This repository converts them into a format that UltiSnips (Vim plugin) use._

[![build status](https://travis-ci.org/sQVe/30-seconds-of-code-ultisnips.svg?branch=master)](https://travis-ci.org/sQVe/30-seconds-of-code-ultisnips) [![dependabot status](https://api.dependabot.com/badges/status?host=github&repo=sQVe/30-seconds-of-code-ultisnips)](https://dependabot.com) [![license](https://img.shields.io/badge/license-CC0--1.0-blue.svg)](https://github.com/sQVe/30-seconds-of-code-ultisnips/blob/develop/LICENSE)

Make sure you ⭐️ the truly awesome original repository [30-seconds-of-code](https://github.com/Chalarangelo/30-seconds-of-code)!

## Install snippets

Move the file [30secondsofcode.snippets](https://raw.githubusercontent.com/sQVe/30-seconds-of-code-ultisnips/master/dist/UltiSnips/30secondsofcode.snippets) to your _UltiSnips_ directory. Make sure to extend it by adding `extends 30secondsofcode.snippets` to your `javascript.snippets` and `typescript.snippets` files.

## Build

This repository automatically updates daily to grab changes made in [30-seconds-of-code](https://github.com/Chalarangelo/30-seconds-of-code). If you want to parse and create a fresh fully 100% up-to-date snippets file you need to recursively clone this repository by running:

```sh
git clone --recursive git@github.com:sQVe/30-seconds-of-code-ultisnips.git
```

When the cloning of the repository and its submodules finishes, we run the following commands with Node.js:

```sh
npm install && npm run build
```

This writes a new file at `dist/UltiSnips/30secondsofcode.snippets`. **If you find that the snippets are out-of-date, please do create an PR or issue.**

## Thanks

A big thank you to the core team and all the contributers at [30-seconds-of-code](https://github.com/Chalarangelo/30-seconds-of-code) and [UltiSnips](https://github.com/SirVer/ultisnips) for creating an indispensable resource and plugin.

## License

```
Creative Commons License
CC0 1.0 Universal
```
