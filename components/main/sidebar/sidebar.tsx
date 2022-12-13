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

const sidebar = ({ category, setCategory, setBrand, brand, onSubmit }: any) => {
  return (
    <Box
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
    >
      <FormControl onSubmit={onSubmit}>
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
      </FormControl>
      <Button type="submit">Submit</Button>
    </Box>
  );
};

export default sidebar;
