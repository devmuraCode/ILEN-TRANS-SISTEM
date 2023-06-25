import {
  Box,
  Button,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { useAppDispatch } from "../../../hooks/hooks";
import { useState, ChangeEvent } from "react";
import { User } from "../../../types/user";
import { updateUser, getUsers } from "../../../services/userServices";
import { styles } from "./style";
const StyledTextField = styled(TextField)(({ theme }: any) => ({
  margin: "1rem",
  width: "300px",
}));

const Form = (props: { handleClose: () => void; user: User | undefined }) => {
  const dispatch = useAppDispatch();

  // EDITED
  const [data, setData] = useState<User>({
    admin: props.user!.admin,
    company: props.user!.company,
    email: props.user!.email,
    name: props.user!.name,
    id: props.user!.id, 
  });
  const { company, email, name, admin, id } = data;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUserButtonClick = () => {
    setData((prevData) => ({ ...prevData, admin: false }));
  };

  const handleAdminButtonClick = () => {
    setData((prevData) => ({ ...prevData, admin: true }));
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const updatedUser: User = {
      admin,
      company,
      email,
      name,
      id,
    };
    await dispatch(updateUser(updatedUser));
    dispatch(getUsers());
    props.handleClose();
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <StyledTextField
        label="name"
        variant="filled"
        name="name"
        required
        value={name}
        onChange={handleInputChange}
      />
      <StyledTextField
        label="company"
        variant="filled"
        name="company"
        required
        value={company}
        onChange={handleInputChange}
      />
      <StyledTextField
        label="Email"
        type="email"
        name="email"
        variant="filled"
        required
        value={email}
        onChange={handleInputChange}
      />
      <Box>
        <Typography sx={styles.label} htmlFor="" component="label">
          Status
        </Typography>
        <Stack sx={styles.btnGroupDiv} spacing={2} direction="row">
          <Button
            fullWidth
            sx={styles.btnGroup}
            variant="contained"
            onClick={handleUserButtonClick}
          >
            User
          </Button>
          <Button
            fullWidth
            sx={styles.btnGroup}
            variant="contained"
            onClick={handleAdminButtonClick}
          >
            Administrator
          </Button>
        </Stack>
      </Box>
      <div>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ margin: "2rem" }}
        >
          Save
        </Button>
      </div>
    </form>
  );
};

export default Form;
