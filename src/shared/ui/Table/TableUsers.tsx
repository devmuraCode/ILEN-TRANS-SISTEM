import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, Typography } from "@mui/material";
import { styles } from "./styles";
import { EditIcon, TrashIcon } from "../../../assets/icons";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { selectUsers, selectLoading } from "../../../store/reducers/userSlice";
import { deleteUser, updateUser } from "../../../services/userServices";
import { User } from "../../../types/user";
import { useState } from "react";
import ModalDialog from "../Modal/ModalDialog";
const TableUsers = () => {
  const dispatch = useAppDispatch();

  const users = useAppSelector(selectUsers);
  //const usersLoader = useAppSelector(selectLoading)

  const handlerDeleteUser = async (id: number) => {
    dispatch(deleteUser(id));
  };

  const [open, setOpen] = useState(false);

  // EDITED
  const [user, setUser] = useState<User>();

  // EDITED
  const handleOpen = (el: User) => {
    setOpen(true);
    setUser(el);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Typography sx={styles.title} variant="h5">
        Customers
      </Typography>
      <Box>
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={styles.th}>Name</TableCell>
                <TableCell sx={styles.th} align="right">
                  Company
                </TableCell>
                <TableCell sx={styles.th} align="right">
                  Email
                </TableCell>
                <TableCell sx={styles.th} align="right">
                  Admin
                </TableCell>
                <TableCell sx={styles.th} align="right">
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((el) => (
                <TableRow key={el.name} sx={{ borderTop: "none" }}>
                  <TableCell component="th" scope="row" sx={styles.td}>
                    {el.name}
                  </TableCell>
                  <TableCell sx={styles.td} align="right">
                    {el.company}
                  </TableCell>
                  <TableCell sx={styles.td} align="right">
                    {el.email}
                  </TableCell>
                  <TableCell sx={styles.td} align="right">
                    <div
                      style={{
                        background: el.admin ? "#0EA5E9" : "#E2E8F0",
                        width: "49px",
                        height: "24px",
                        borderRadius: "4px",
                      }}
                    >
                      {el.admin ? true : false}
                    </div>
                  </TableCell>
                  <TableCell sx={styles.td} align="right">
                    <Box sx={{ display: "flex", gap: "8px" }}>
                      {/* EDITED */}
                      <div onClick={() => handleOpen(el)}>
                        <EditIcon />
                      </div>

                      <div onClick={() => handlerDeleteUser(el.id)}>
                        <TrashIcon />
                      </div>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* EDITED */}
      <ModalDialog open={open} handleClose={handleClose} user={user} />
    </Box>
  );
};

export default TableUsers;
