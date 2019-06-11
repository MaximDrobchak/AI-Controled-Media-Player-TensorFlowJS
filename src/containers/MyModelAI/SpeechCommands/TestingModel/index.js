import 'babel-polyfill';
import * as tf from '@tensorflow/tfjs';
import * as speechCommands from '@tensorflow-models/speech-commands';
import React, { useEffect } from 'react';
// import '@tensorflow/tfjs-node';
let model, emodel;
(async function() {
    model = await tf.loadLayersModel('http://localhost:3001');
    // let outputs_ = [model.output, model.getLayer("attention_vector").output];

    emodel = tf.model({inputs: model.input, outputs: model.output});
})();
const MAX_SEQUENCE_LENGTH = 113;

function word_preprocessor(word) {
  word = word.replace(/[-|.|,|\?|\!]+/g, '');
  word = word.replace(/\d+/g, '1');
  word = word.toLowerCase();
  if (word != '') {
    return word;
  } else {
    return '.'
  }
};

// function make_sequences(words_array) {
//   let sequence = Array();
//   words_array.slice(0, MAX_SEQUENCE_LENGTH).forEach(function(word) {
//     word = word_preprocessor(word);
//     let id = words_vocab[word];
//     if (id == undefined) {
//       sequence.push(words_vocab['']);
//     } else {
//       sequence.push(id);
//     }
//   });

//   // pad sequence
//   if (sequence.length < MAX_SEQUENCE_LENGTH) {
//     let pad_array = Array(MAX_SEQUENCE_LENGTH - sequence.length);
//     pad_array.fill(words_vocab['']);
//     sequence = sequence.concat(pad_array);
//   }

//   return sequence;
// };
// async function predictWord (){
//   // Array of words that the recognizer is trained to recognize.
//   const words = await emodel.wordLabels();
//   await  emodel.listen(
//     ({ scores }) => {
//       // Turn scores into a list of (score,word) pairs.
//       scores = Array.from(scores).map((s, i) => ({ score: s, word: words[i] }));
//       // Find the most probable word.
//       scores.sort((s1, s2) => s2.score - s1.score);
//       // document.querySelector('#console').textContent = scores[0].word;
//     console.log(scores[0].word)
//     },
//     { probabilityThreshold: 0.85 },
//   );
// }
// predictWord()
// const getKey = (obj,val) => Object.keys(obj).find(key => obj[key] === val); // For getting tags by tagid

// $("#get_ner_button").click(async function() {
//   $(".results").html("word - tag - attention</br><hr&gt;");

//   let words = $('#input_text').val().split(' ');
//   let sequence = make_sequences(words);
//   let tensor = tf.tensor1d(sequence, dtype='int32').expandDims(0);
//   let [predictions, attention_probs] = await emodel.predict(tensor);
//   attention_probs = await attention_probs.data();

//   predictions = await predictions.argMax(-1).data();
//   let predictions_tags = Array();
//   predictions.forEach(function(tagid) {
//     predictions_tags.push(getKey(tags_vocab, tagid));
//   });

//   words.forEach(function(word, index) {
//     $(".results").append(word+' - '+predictions_tags[index]+' - '+attention_probs[index]+'');
//   });
// });

const App = () => {

  useEffect(() => {
     function predictWord (){
      // Array of words that the recognizer is trained to recognize.
     emodel.listen(
        ({ scores }) => {
          const words = emodel.wordLabels();
          // Turn scores into a list of (score,word) pairs.
          scores = Array.from(scores).map((s, i) => ({ score: s, word: words[i] }));
          // Find the most probable word.
          scores.sort((s1, s2) => s2.score - s1.score);
          // document.querySelector('#console').textContent = scores[0].word;
        console.log(scores[0].word)
        },
        { probabilityThreshold: 0.85 },
      );
    }
      setTimeout (()=>{
        predictWord()
      }, 1000)

  }, [])

    return (
     null
    );
  }


export default App;
