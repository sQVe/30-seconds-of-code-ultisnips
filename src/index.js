const fetch = require('node-fetch');
const fs = require('fs');
const util = require('util');

const FILENAME = '30secondsofcode.snippets';
const NEWLINE = '\n';
const URL =
  'https://raw.githubusercontent.com/30-seconds/30-seconds-of-code/master/snippet_data/snippets.json';

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

(async () => {
  let res;
  let snippets;

  try {
    res = await fetch(URL);

    if (!res.ok)
      throw Error(`Fetch failed with: ${res.status} (${res.statusText})`);
    snippets = (await res.json()).data;
  } catch (err) {
    return console.log(err); // eslint-disable-line no-console
  }

  await writeFile(
    `UltiSnips/${FILENAME}`,
    snippets.map(createUltiSnipsSnippet).join(NEWLINE + NEWLINE)
  );

  return console.log(`Successfully created ${FILENAME} file.`); // eslint-disable-line no-console
})();
