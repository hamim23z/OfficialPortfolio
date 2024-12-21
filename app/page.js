"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import HomeIcon from '@mui/icons-material/Home';
import FolderIcon from '@mui/icons-material/Folder';
import BuildIcon from '@mui/icons-material/Build';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

export default function HomePage() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx = {{
            background: "#151312"
          }}
        >
          <BottomNavigationAction
            icon = {<HomeIcon
              sx = {{
                color: "white"
              }}
            >
            </HomeIcon>}
          >
          </BottomNavigationAction>

          <BottomNavigationAction
            icon = {<FolderIcon
              sx = {{
                color: "white"
              }}
            >
            </FolderIcon>}
          >
          </BottomNavigationAction>

          <BottomNavigationAction
            icon = {<WorkHistoryIcon
              sx = {{
                color: "white"
              }}
            >
            </WorkHistoryIcon>}
          >
          </BottomNavigationAction>

          <BottomNavigationAction
            icon = {<BuildIcon
              sx = {{
                color: "white"
              }}
            >
            </BuildIcon>}
          >
          </BottomNavigationAction>

          <BottomNavigationAction
            icon = {<ConnectWithoutContactIcon
              sx = {{
                color: "white"
              }}
            >
            </ConnectWithoutContactIcon>}
          >
          </BottomNavigationAction>

        </BottomNavigation>
      </Box>
    </>
  );
}
