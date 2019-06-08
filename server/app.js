'use strict';

function microphoneStream (encoding, sampleRateHertz, languageCode){
  const record = require('node-record-lpcm16');
  const speech = require('@google-cloud/speech');

  const config = {
    encoding: encoding,
    sampleRateHertz: sampleRateHertz,
    languageCode: languageCode,
  };

  const request = {
    config,
    interimResults: false,
  };
  const client = new speech.SpeechClient();
  const recognizeStream = client
    .streamingRecognize(request)
    .on('error', console.error)
    .on('data', data =>
      process.stdout.write(

          data.results[0] &&
          data.results[0].alternatives[0] ? `Transcription: ${data.results[0]
            .alternatives[0].transcript}\n` :
          `\n\nReached transcription time limit, press Ctrl+C\n`,
      ),
    );

  record
    .start({
      sampleRateHertz: sampleRateHertz,
      threshold: 0, //silence threshold
      recordProgram: 'rec', // Try also "arecord" or "sox"
      silence: '5.0', //seconds of silence before ending
    })
    .on('error', console.error)
    .pipe(recognizeStream);

  console.log('Listening ...');
}

require(`yargs`)
  .demand(1)
  .command(
    `micStreamRecognize`,
    `Streams audio input from microphone, translates to text`,
    {},
    opts =>
      microphoneStream(opts.encoding, opts.sampleRateHertz, opts.languageCode),
  )
  .options({
    encoding: {
      alias: 'e',
      default: 'LINEAR16',
      global: true,
      requiresArg: true,
      type: 'string',
    },
    sampleRateHertz: {
      alias: 'r',
      default: 16000,
      global: true,
      requiresArg: true,
      type: 'number',
    },
    languageCode: {
      alias: 'l',
      default: 'ru',
      global: true,
      requiresArg: true,
      type: 'string',
    },
  })
  .example(`node $0 micStreamRecognize`)
  .wrap(120)
  .recommendCommands()
  .epilogue(`For more information, see https://cloud.google.com/speech/docs`)
  .help()
  .strict().argv;
