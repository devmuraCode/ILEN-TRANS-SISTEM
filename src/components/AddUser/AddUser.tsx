import { useState, FC, FormEvent, ChangeEvent } from "react";
import { FormControl, TextField, Box, Typography, Button } from "@mui/material";
import { styles } from "./style";
import Stack from "@mui/material/Stack";
import { UserAdd } from "../../types/user";
import { getUsers, postUser } from "../../services/userServices";
import { useAppDispatch } from "../../hooks/hooks";

const AddUser: FC = () => {
  const [data, setData] = useState<UserAdd>({
    company: "",
    email: "",
    name: "",
    password: "",
    admin: false,
  });

  const { company, email, name, password, admin } = data;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const dispatch = useAppDispatch();

  const handleUserButtonClick = () => {
    setData((prevData) => ({ ...prevData, admin: false }));
  };

  const handleAdminButtonClick = () => {
    setData((prevData) => ({ ...prevData, admin: true }));
  };

  const onFinish = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newUser: UserAdd = {
      company,
      email,
      name,
      password,
      admin,
    };

    await dispatch(postUser(newUser));
    dispatch(getUsers());
  };

  return (
    <Box>
      <Typography sx={styles.title} variant="h5">
        Add Customer
      </Typography>
      <form onSubmit={onFinish}>
        <Box sx={{ display: "flex", gap: 2 }}>
          <FormControl fullWidth margin="normal">
            <Typography sx={styles.label} htmlFor="name" component="label">
              First Name
            </Typography>
            <TextField
              value={name}
              onChange={handleInputChange}
              id="name"
              name="name"
              sx={styles.input}
              required
            />
          </FormControl>
        </Box>
        <FormControl fullWidth margin="normal">
          <Typography sx={styles.label} htmlFor="company" component="label">
            Company
          </Typography>
          <TextField
            id="company"
            value={company}
            onChange={handleInputChange}
            fullWidth
            name="company"
            sx={{ marginTop: "8px" }}
            required
          />
        </FormControl>
        <Box>
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
        </Box>
        <Box>
          <FormControl fullWidth margin="normal">
            <Typography sx={styles.label} htmlFor="email" component="label">
              Email
            </Typography>
            <TextField
              id="email"
              value={email}
              onChange={handleInputChange}
              fullWidth
              name="email"
              sx={{ marginTop: "8px" }}
              required
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <Typography sx={styles.label} htmlFor="password" component="label">
              Password
            </Typography>
            <TextField
              value={password}
              onChange={handleInputChange}
              id="password"
              name="password"
              type="password"
              sx={{ marginTop: "8px" }}
              required
            />
            <Button type="submit" fullWidth sx={styles.btn} variant="contained">
              Submit
            </Button>
          </FormControl>
        </Box>
      </form>
    </Box>
  );
};

export default AddUser;
