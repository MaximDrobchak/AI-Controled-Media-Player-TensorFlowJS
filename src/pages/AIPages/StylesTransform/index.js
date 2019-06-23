import { InputFile } from '../../../components';

import React, { useState } from 'react';

import { Layout, Loading, Error, Switches } from '../../../components';
import { useStyles } from './styles';

import { chicago } from './img';
export default () => {
  const classes = useStyles();
  const [ image, setImage ] = useState(false);

  return (
    <Layout>
      <div className={classes.inputFile}>
        <InputFile onChange={setImage} />
        <img className={classes.contentImg} src={chicago} />
      </div>
    </Layout>
  );
};
// this.contentSelect.onchange = evt =>
// this.setImage(this.contentImg, evt.target.value);
// const setImage = (element, selectedValue) => {
//   if (selectedValue === 'file') {
//     console.log('file selected');
//     this.fileSelect.onchange = evt => {
//       const f = evt.target.files[0];
//       const fileReader = new FileReader();
//       fileReader.onload = e => {
//         element.src = e.target.result;
//       };
//       fileReader.readAsDataURL(f);
//       this.fileSelect.value = '';
//     };
//     this.fileSelect.click();
//   }
//   else if (selectedValue === 'pic') {
//     this.openModal(element);
//   }
//   else if (selectedValue === 'random') {
//     const randomNumber = Math.floor(Math.random() * links.length);
//     element.src = links[randomNumber];
//   }
//   else {
//     element.src = 'images/' + selectedValue + '.jpg';
//   }
// };
