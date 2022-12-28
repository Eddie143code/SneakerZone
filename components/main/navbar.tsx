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
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/link";

const Navbar = () => {
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
      <AppBar position="static" style={{ background: "#850000" }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/">SneakerZone</Link>
          </Typography>

          {isMobile ? (
            <>
              <IconButton>
                <Link href="/cart">
                  <ShoppingCartIcon />
                </Link>
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
                <MenuItem onClick={handleClose}>
                  <Link href="/products">Products</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link href="#">About us</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link href="#">Contact us</Link>
                </MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Stack direction="row" spacing={4}>
                <Link href="/cart">
                  <ShoppingCartIcon />
                </Link>
                <Link href="/products">Products</Link>
                <Link href="#">About us</Link>
                <Link href="#">Contact us</Link>
              </Stack>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

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
