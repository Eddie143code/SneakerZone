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
      <Button type="submit">Submit</Button>
    </Box>
  );
};

export default sidebar;
