import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    padding: 0,
    maxWidth: 400,
    position: 'relative',
  },
  image: ({ inputID }) =>

      inputID == 'style-img' ? {
        // position: 'relative',
        zIndex: 100,
        height: 250,
      } :
      {
        // position: 'relative',
        zIndex: 100,
        height: 250,
      },
  styleImage: ({ inputID }) =>

      inputID == 'style-img' ? {
        position: 'absolute',
        // display: 'none',
        zIndex: -100,
        height: ({ heightImg }) => heightImg,
      } :
      {
        position: 'absolute',
        // visibility: 'hidden',
        // display: 'none',
        zIndex: -100,
        height: ({ heightImg }) => heightImg,
      },
});
