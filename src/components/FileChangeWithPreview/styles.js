import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    padding: 0,
    maxWidth: 400,
    position: 'relative',
  },
  image: ({ inputID, heightImg }) =>

      inputID == 'style-img' ? {
        maxHeight: 400,
        minHeight: 100,
        height: heightImg,
      } :
      {
        maxHeight: 400,
        minHeight: 256,
        height: heightImg,
      },
});
