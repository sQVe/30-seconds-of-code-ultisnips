const fs = require('fs');
const path = require('path');
const util = require('util');

const snippets = require('../submodules/30-seconds-of-code/snippet_data/snippets.json');

const FILENAME = '30secondsofcode.snippets';
const HEADER = `# Generated by 30-seconds-of-code-ultisnips
# (https://github.com/sQVe/30-seconds-of-code-ultisnips/)
# -------------------------------------------------------

`;
const NEWLINE = '\n';

const head = arr => arr[0];
const writeFile = util.promisify(fs.writeFile);

function createSafeUltiSnipsDescription(text) {
  return text.replace(/\s/g, ' ').replace(/"/g, '');
}

function createUltiSnipsSnippet({ id, attributes: { codeBlocks, text } }) {
  return [
    `snippet ${id} "${createSafeUltiSnipsDescription(text)}" b`,
    head(codeBlocks),
    'endsnippet',
  ].join(NEWLINE);
}

async function writeSnippetsFile() {
  await writeFile(
    path.resolve(__dirname, `../dist/UltiSnips/${FILENAME}`),
    HEADER + snippets.data.map(createUltiSnipsSnippet).join(NEWLINE + NEWLINE)
  );

  return console.log(`Successfully created ${FILENAME} file.`); // eslint-disable-line no-console
}

writeSnippetsFile();
