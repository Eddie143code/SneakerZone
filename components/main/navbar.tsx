import React from "react";
import {
  Grid,
  Typography,
  Box,
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "red" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SneakerZone
          </Typography>

          {isMobile ? (
            <>
              <IconButton>
                <SearchIcon />
              </IconButton>
              <IconButton>
                <ShoppingCartIcon />
              </IconButton>
              <IconButton
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose}>Link</MenuItem>
                <MenuItem onClick={handleClose}>Link</MenuItem>
                <MenuItem onClick={handleClose}>Link</MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Typography>Link</Typography>
              <Typography>Link</Typography>
              <Typography>Link</Typography>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default navbar;

/* 


      <Grid container>
        <Grid item xs={9}>
          <Typography variant="h6">SneakerZone</Typography>
        </Grid>
        <Grid item xs={3}>
          <SearchIcon style={{ margin: 2 }} />
          <ShoppingCartIcon style={{ margin: 2 }} />
          <MenuIcon style={{ margin: 2 }} />
        </Grid>
      </Grid>

*/
