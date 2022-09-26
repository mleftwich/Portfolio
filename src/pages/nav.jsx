import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ContactIcon from '@mui/icons-material/PhoneAndroid';
import HomeIcon from "@mui/icons-material/Home";
import AboutIcon from '@mui/icons-material/PersonPin';
import ProjectsIcon from '@mui/icons-material/Filter';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{
        width: { xs: 300, sm: 400, md: 500, lg: 590, xl: 670 },
        borderRadius: 3,
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        label="About"
        value="About"
        icon={<AboutIcon />}
      />
      <BottomNavigationAction
        label="Projects"
        value="Projects"
        icon={<ProjectsIcon />}
      />
      <BottomNavigationAction
        label="Contact"
        value="contact"
        icon={<ContactIcon />}
      />
    </BottomNavigation>
  );
}
