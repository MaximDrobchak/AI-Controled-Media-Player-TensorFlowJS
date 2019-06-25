import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(props => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainRow: {
    display: 'flex',
    flexDirection: ({ inputID }) =>

        inputID == 'style-img' ? 'row-reverse' :
        'row',

    justifyContent: 'space-between',
  },
  tagButton: { marginBottom: 10, cursor: 'pointer' },
}));
