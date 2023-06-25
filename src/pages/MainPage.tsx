import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AddUser from "../components/AddUser/AddUser";
import Customers from "../components/Customers";

const MainPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={4} sx={{ padding: "40px" }}>
          <AddUser />
        </Grid>
        <Grid xs={8} sx={{ padding: "45px" }}>
          <Customers />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainPage;
