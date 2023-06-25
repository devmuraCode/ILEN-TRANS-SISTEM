import { Dialog } from "@mui/material";
import Form from "./Form";
import { User } from "types/user";

const ModalDialog = (props: {
  open: boolean;
  handleClose: () => void;
  user: User | undefined;
}) => {
  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <Form handleClose={props.handleClose} user={props.user} />
    </Dialog>
  );
};

export default ModalDialog;
