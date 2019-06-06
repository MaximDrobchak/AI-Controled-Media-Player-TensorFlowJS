import { withSnackbar } from 'notistack';

const HandleError = ({ error, enqueueSnackbar }) =>
  error &&
  enqueueSnackbar(error.message, {
    persist: false,
    variant: 'Error', // 'default' Success' 'Error' 'Warning' 'Info'
    autoHideDuration: 1000,
  });

export default withSnackbar(HandleError);
