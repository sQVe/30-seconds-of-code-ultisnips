# 30-seconds-of-code-ultisnips

_30 seconds of code is a curated collection of useful JavaScrupt snippets that you can understand in 30 seconds or less. This repository converts them into a format that UltiSnips (Vim plugin) use._

Make sure you ⭐️ the truly awesome original repository [30-seconds-of-code](https://github.com/Chalarangelo/30-seconds-of-code)!

## Install snippets

Move the file [30secondsofcode.snippets](https://raw.githubusercontent.com/sQVe/30-seconds-of-code-ultisnips/master/UltiSnips/30secondsofcode.snippets) to your _UltiSnips_ directory. Make sure to extend it by adding `extends 30secondsofcode.snippets` to your `javascript.snippets` and `typescript.snippets` files.

## Build

The repository [30-seconds-of-code](https://github.com/Chalarangelo/30-seconds-of-code) is updated quite frequently so the snippets here may be out-of-date at times. To parse and create a fresh fully up-to-date snippets file you need to recursively clone this repository by running:

```sh
git clone --recursive git@github.com:sQVe/30-seconds-of-code-ultisnips.git
```

And when the repository and its' submodules are cloned we run the following commands with Node.js:

```sh
npm install && npm run build
```

This writes a new file at `UltiSnips/30secondsofcode.snippets`. **If you find the snippets out-of-date, please do create an PR or issue.**

## Thanks

Many thanks to the core team and all the contributers at [30-seconds-of-code](https://github.com/Chalarangelo/30-seconds-of-code) and [UltiSnips](https://github.com/SirVer/ultisnips) for creating a indispensable resource and plugin.

## License

```
Creative Commons License
CC0 1.0 Universal
```
