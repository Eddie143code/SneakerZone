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

const sidebar = () => {
  const [category, setCategory] = useState<any>();

  const handleChange = (e: any) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <Box
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
    >
      <button onClick={() => console.log(category)}></button>
      <FormControl onSubmit={handleSubmit}>
        <FormLabel>Brand</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue=""
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="Nike"
            control={<Radio onChange={handleChange} />}
            label="Nike"
          />
          <FormControlLabel
            value="Adidas"
            control={<Radio onChange={handleChange} />}
            label="Adidas"
          />
          <FormControlLabel
            value="Converse"
            control={<Radio onChange={handleChange} />}
            label="Converse"
          />
          <FormControlLabel
            value="Reebok"
            control={<Radio onChange={handleChange} />}
            label="Reebok"
          />
          <FormControlLabel
            value=""
            control={<Radio onChange={handleChange} />}
            label="none"
          />
        </RadioGroup>
      </FormControl>
      <FormControl sx={{ marginLeft: "10em" }}>
        <FormLabel>Category</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue=""
          name="radio-buttons-group"
        >
          <FormControlLabel value="Men" control={<Radio />} label="Men" />
          <FormControlLabel value="Women" control={<Radio />} label="Women" />
          <FormControlLabel
            value="children"
            control={<Radio />}
            label="Children"
          />
          <FormControlLabel value="" control={<Radio />} label="none" />
        </RadioGroup>
      </FormControl>
      <Button type="submit">Submit</Button>
    </Box>
  );
};

export default sidebar;
