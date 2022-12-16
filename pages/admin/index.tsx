import React from "react";
import Drawer from "../../components/admin/drawerAdmin";
import {
  Grid,
  Typography,
  Box,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";

import Navbar from "../../components/admin/navbar";

const drawerWidth = 200;

const index = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <Grid container>
      <Box sx={{ display: "flex" }}>
        <Navbar
          drawerWidth={drawerWidth}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Drawer
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Typography paragraph>THIS IS THE HOME PAGE</Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default index;

index.getLayout = function PageLayout(page: any) {
  return <>{page}</>;
};
