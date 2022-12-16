import * as React from "react";
import { useState } from "react";
import {
  Box,
  Drawer,
  Button,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  FormGroup,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import Sidebar from "../sidebar/sidebar";

import { useRouter } from "next/router";

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

  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("in handlesubmit");
    let brandChecked: any;
    let categoryChecked: any = false;

    const keys = Object.keys(brand);
    const values = Object.values(brand);

    values.forEach((item, index) => {
      if (item) {
        brandChecked = keys[index].toLowerCase();
      }
    });

    console.log(keys);
    console.log(values);
    if (brandChecked && !categoryChecked) {
      router.push(`/products?brand=${brandChecked}`);
      return;
    } else if (!brandChecked && categoryChecked) {
      router.push(`/products?category=${categoryChecked}`);
      return;
    } else if (brandChecked && categoryChecked) {
      router.push(
        `/products?brand=${brandChecked}&category=${categoryChecked}`
      );
      return;
    } else {
      return;
    }
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
                checked={category.Men}
                name="Men"
                onChange={(e) => {
                  setCategory({
                    Men: e.target.checked,
                    Women: false,
                    Children: false,
                  });
                }}
              />
            }
            label="Men"
          />
          <FormControlLabel
            value="Women"
            control={
              <Checkbox
                checked={category.Women}
                name="Women"
                onChange={(e) => {
                  setCategory({
                    Men: false,
                    Women: e.target.checked,
                    Children: false,
                  });
                }}
              />
            }
            label="Women"
          />
          <FormControlLabel
            value="children"
            control={
              <Checkbox
                checked={category.Children}
                name="Children"
                onChange={(e) => {
                  setCategory({
                    Men: false,
                    Women: false,
                    Children: e.target.checked,
                  });
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
