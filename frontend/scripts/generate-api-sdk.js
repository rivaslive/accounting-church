const generator = require('openapi-typescript-codegen');
const $RefParser = require('json-schema-ref-parser');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const fs = require('fs');
const jsonSwagger = require('../../backend/src/extensions/documentation/documentation/1.0.0/full_documentation.json');

// const parseJson = (text) => {
//   // Controllers names
//   text = text.replace(/[a-zA-Z0-9]+Controller/g, '')
//
//   return JSON.parse(text)
// }

const generateClientSdk = async (apiBaseUrl, clientName, outputPath = './') => {
  try {
    console.log(`Fetching Swagger from ${apiBaseUrl}/swagger-json...`);
    // const jsonSwagger = await fetch(`${apiBaseUrl}/swagger-json`)
    //   .then((r) => r.text())
    //   .then(parseJson)
    //   .catch((err) => console.error(err));

    if (!jsonSwagger) throw new Error('Swagger not found');
    console.log('Swagger Acquired. Generating SDK...');

    // const input = JSON.stringify(jsonSwagger);
    // const json = parseJson(input);

    // const parsed = await $RefParser.parse(json);
    await generator.generate({
      input: jsonSwagger,
      output: outputPath + '/__generated__',
      clientName: clientName,
      useUnionTypes: false,
      httpClient: 'axios',
      useOptions: true,
      exportSchemas: true,
    });
    console.log('SDK Generated. Updating package.json...');

    fs.writeFileSync(`${outputPath}/index.ts`, "export * from './__generated__';\n");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
  console.log('Done');
  process.exit(0);
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const argv = yargs(hideBin(process.argv))
  .command(
    'generate-sdk',
    'Generate the SDK',
    (yargs) => {
      yargs
        .option('url', {
          alias: 'u',
          description: 'Url to the App api swagger-json',
          type: 'string',
          demandOption: true,
        })
        .option('name', {
          alias: 'n',
          description: 'Client name',
          type: 'string',
          demandOption: true,
        })
        .option('output', {
          alias: 'o',
          description: 'Output directory for generated SDK',
          type: 'string',
          default: 'generated/rest-client',
        });
    },
    (argv) => {
      generateClientSdk(argv.url, argv.name, argv.output);
    },
  )
  .demandCommand(1, 'You need at least one command before moving on')
  .help()
  .alias('h', 'help').argv;

/**
 * example:
 * node tools/scripts/generateSdkApiClient.js generate-sdk --url $API_URL --name 'AppName' -o './libs/public/<app-name-sdk>/src'"
 */
