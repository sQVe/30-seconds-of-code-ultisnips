const fs = require('fs');
const path = require('path');

const commaRe = /,+/g;
const identifierKeyRe = /^(title|tags):\s+/;
const newlineRe = /\n+/g;
const sectionRe = /---|```(?:js)?/g;
const surroundingWhitespaceRe = /^\s+|\s+$/g;
const parsableCharsRe = /(\${|`)/g;

const parseSections = (content) =>
  content
    .split(sectionRe)
    .map((x) => x.replace(surroundingWhitespaceRe, ''))
    .filter(Boolean);

const sanitizeIdentifiers = (identifiers) => {
  const [id, tags] = identifiers
    .split(newlineRe)
    .map((x) => x.replace(identifierKeyRe, ''));

  return [id, tags.split(commaRe)];
};

const sanitizeCode = (code) => code.replace(parsableCharsRe, '\\$1');

const sourceDirectory = path.join(
  __dirname,
  '../submodules/30-seconds-of-code/snippets'
);
const outputPath = path.join(__dirname, '../dist/snippets.json');

const sourceFiles = fs
  .readdirSync(sourceDirectory)
  .map((x) => path.join(sourceDirectory, x));

const snippets = sourceFiles.reduce((acc, file) => {
  const sections = parseSections(fs.readFileSync(file, { encoding: 'utf8' }));

  const [identifiers, description, code, example] = sections;
  const [id, tags] = sanitizeIdentifiers(identifiers);

  return [...acc, { code: sanitizeCode(code), description, example, id, tags }];
}, []);

fs.writeFileSync(outputPath, JSON.stringify(snippets, null, 2));
