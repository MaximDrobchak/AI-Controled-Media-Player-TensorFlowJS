import React, { useEffect } from 'react';
import {
  FileChangeWithPreview,
  Slider,
  TagButton,
  ModelPopup,
} from '../../../../components';
import { useStyles } from './styles';
import { MDBCol } from 'mdbreact';

export default ({ src, refImg, inputID, heightImg = 240, dispatch }) => {
  const classes = useStyles({ inputID });

  const settings =

      inputID !== 'style-img' ? [
        {
          id: '11',
          title: 'Random',
          type: 'RANDOM_CONTENT',
          icon: 'random',
        },
      ] :
      [
        {
          id: '1',
          title: 'Random',
          type: 'RANDOM_IMAGE',
          icon: 'random',
        },
      ];
  return (
    <MDBCol
      xl='6'
      md='10'
      className='mb-r'
      style={{ border: '1px solid black' }}>
      <div className={classes.mainRow}>
        <FileChangeWithPreview
          img={refImg}
          src={src}
          inputID={inputID}
          heightImg={heightImg}
        />
        <div>
          {settings.map(item => (
            <TagButton
              key={item.id}
              {...item}
              type={item.type}
              className={classes.tagButton}
              dispatch={dispatch}
            />
          ))}
          <ModelPopup
            className={classes.tagButton}
            lableButton='Camera'
            title='Title'
          />
        </div>
      </div>
      <Slider />
    </MDBCol>
  );
};
