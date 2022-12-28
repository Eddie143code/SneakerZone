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
    let categoryChecked: any;

    const brandKeys = Object.keys(brand);
    const brandValues = Object.values(brand);

    brandValues.forEach((item, index) => {
      if (item) {
        brandChecked = brandKeys[index].toLowerCase();
      }
    });

    const categoryKeys = Object.keys(category);
    const categoryValues = Object.values(category);

    categoryValues.forEach((item, index) => {
      if (item) {
        categoryChecked = categoryKeys[index].toLowerCase();
      }
    });

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
      <form>
        <FormControl>
          <FormLabel>Brand</FormLabel>
          <FormGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue=""
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={brand.Nike}
                  name="Nike"
                  onChange={(e) =>
                    setBrand({
                      Nike: e.target.checked,
                      Adidas: false,
                      Converse: false,
                      Reebok: false,
                    })
                  }
                />
              }
              label="Nike"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={brand.Adidas}
                  name="Adidas"
                  onChange={(e) =>
                    setBrand({
                      Nike: false,
                      Adidas: e.target.checked,
                      Converse: false,
                      Reebok: false,
                    })
                  }
                />
              }
              label="Adidas"
            />
            <FormControlLabel
              value="Converse"
              control={
                <Checkbox
                  checked={brand.Converse}
                  name="Converse"
                  onChange={(e) =>
                    setBrand({
                      Nike: false,
                      Adidas: false,
                      Converse: e.target.checked,
                      Reebok: false,
                    })
                  }
                />
              }
              label="Converse"
            />
            <FormControlLabel
              value="Reebok"
              control={
                <Checkbox
                  checked={brand.Reebok}
                  name="Reebok"
                  onChange={(e) =>
                    setBrand({
                      Nike: false,
                      Adidas: false,
                      Converse: false,
                      Reebok: e.target.checked,
                    })
                  }
                />
              }
              label="Reebok"
            />
          </FormGroup>
        </FormControl>
        <FormControl>
          <FormLabel>Category</FormLabel>
          <FormGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue=""
          >
            <FormControlLabel
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
          <Button type="submit">Submit</Button>
        </FormControl>
      </form>
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
              <Button variant="contained" onClick={toggleDrawer(anchor, true)}>
                filter
              </Button>
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
