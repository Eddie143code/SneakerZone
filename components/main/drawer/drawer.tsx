import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Checkbox from "@mui/material/Checkbox";
import { FormGroup } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import Sidebar from "../sidebar/sidebar";

type Anchor = "top" | "left" | "bottom" | "right";

function TemporaryDrawer() {
  // FORM CONTROL:

  const [category, setCategory] = useState<any>({
    Men: false,
    Women: false,
    Children: false,
  });
  const [brand, setBrand] = useState<any>({
    Nike: false,
    Adidas: false,
    Converse: false,
    Reebok: false,
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  // DRAWER LOGIC:

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      onSubmit={handleSubmit}
    >
      <FormControl>
        <FormLabel>Brand</FormLabel>
        <FormGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue=""
        >
          <FormControlLabel
            value="Nike"
            control={
              <Checkbox
                onChange={() => setBrand({ ...brand, Nike: !brand.Nike })}
              />
            }
            label="Nike"
          />
          <FormControlLabel
            value="Adidas"
            control={
              <Checkbox
                onChange={() => setBrand({ ...brand, Adidas: !brand.Adidas })}
              />
            }
            label="Adidas"
          />
          <FormControlLabel
            value="Converse"
            control={
              <Checkbox
                onChange={() =>
                  setBrand({ ...brand, Converse: !brand.Converse })
                }
              />
            }
            label="Converse"
          />
          <FormControlLabel
            value="Reebok"
            control={
              <Checkbox
                onChange={() => setBrand({ ...brand, Reebok: !brand.Reebok })}
              />
            }
            label="Reebok"
          />
        </FormGroup>
      </FormControl>
      <Divider />
      <FormControl>
        <FormLabel>Category</FormLabel>
        <FormGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue=""
        >
          <FormControlLabel
            value="Men"
            control={
              <Checkbox
                onChange={() => {
                  setCategory({ ...category, Men: !brand.Men });
                }}
              />
            }
            label="Men"
          />
          <FormControlLabel
            value="Women"
            control={
              <Checkbox
                onChange={() => {
                  setCategory({ ...category, women: !brand.Women });
                }}
              />
            }
            label="Women"
          />
          <FormControlLabel
            value="children"
            control={
              <Checkbox
                onChange={() => {
                  setCategory({ ...category, children: !brand.Children });
                }}
              />
            }
            label="Children"
          />
        </FormGroup>
      </FormControl>
    </Box>
  );

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <button onClick={() => console.log(category)}>show category</button>
          <button onClick={() => console.log(brand)}>show brand</button>
          {isMobile ? (
            <>
              <Button onClick={toggleDrawer(anchor, true)}>filter</Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </>
          ) : (
            <Sidebar
              category={category}
              setCategory={setCategory}
              setBrand={setBrand}
              brand={brand}
              onSubmit={handleSubmit}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default TemporaryDrawer;

/*

        <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Brands:", "Nike", "Adidas", "Converse", "Reebok"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      <Divider />
      <List>
        {["Categories:", "Men", "Women", "Children"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
              <Button >Radio</Button>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>

    */
