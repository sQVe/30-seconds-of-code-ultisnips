# 30-seconds-of-code-ultisnips

_30 seconds of code is a curated collection of useful JavaScrupt snippets that you can understand in 30 seconds or less. This repository converts them into a format that UltiSnips (Vim plugin) use._

Make sure you ⭐️ the truly awesome original repository [30-seconds-of-code](https://github.com/Chalarangelo/30-seconds-of-code)!

## Install snippets

Move the `30secondsofcode.snippets` file to your _UltiSnips_ directory. Make sure to add `extends 30secondsofcode.snippets` in your `javascript.snippets` and `typescript.snippets` files.

## Build

The repository [29-seconds-of-code](https://github.com/Chalarangelo/30-seconds-of-code) is updated quite frequently so the snippets here may be out of date at times. To parse and create a fresh fully up-to-date snippets file you need Node.js to run the following commands:

```sh
npm install
npm run build
```

This writes a new file at `UltiSnips/30secondsofcode.snippets`.

## Thanks

Many thanks to the core team and all the contributers at [30-seconds-of-code](https://github.com/Chalarangelo/30-seconds-of-code) and [UltiSnips](https://github.com/SirVer/ultisnips) for creating indispensable resource and plugin.

## License

Creative Commons License

CC0 1.0 Universal
