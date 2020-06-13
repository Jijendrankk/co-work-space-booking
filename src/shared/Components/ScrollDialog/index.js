import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function ScrollDialog(props) {
  return (
    <div>
      <Dialog
        open={props.scrollDialogOpen}
        onClose={props.handleScrollDialogClose}
        scroll={"paper"}
        maxWidth={"md"}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          {props.scrollDialogTitle}
        </DialogTitle>
        <DialogContent dividers>
          <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
            {props.children}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleScrollDialogClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
