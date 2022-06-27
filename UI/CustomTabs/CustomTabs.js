import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import { Typography } from "@mui/material";

import s from "./tabs.module.scss";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const CustomTabs = (props) => {
  const { titles = [], components = [] } = props;

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box className={s.nav}>
        <Tabs value={value} onChange={handleChange} indicatorColor="none">
          {titles.map((title, index) => (
            <Tab
              label={title}
              {...a11yProps(index)}
              disableFocusRipple={false}
              classes={{
                root: s.root,
                selected: s.selected,
              }}
            />
          ))}
        </Tabs>
      </Box>
      {components.map((component, index) => (
        <TabPanel value={value} index={index}>
          {component}
        </TabPanel>
      ))}
    </Box>
  );
};

export default CustomTabs;
