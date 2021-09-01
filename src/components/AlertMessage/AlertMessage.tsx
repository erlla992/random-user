import React from 'react';
import { Alert, Color} from '@material-ui/lab';
import { IconButton } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';

interface AlertMessageProps {
  message: string,
  handleClose: () => void,
  severity?: Color,
}

export const AlertMessage = ({ message, handleClose, severity="error"}: AlertMessageProps) => {
  return(
      <Alert
        style={{margin: "8px", position: "absolute", top: "0px", right:"0px"}}
        variant="filled"
        severity={severity}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={handleClose}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
      >
        {message}
      </Alert>
  );
}