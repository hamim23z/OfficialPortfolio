"use client";
import React from "react";
import { Box, Typography, Paper, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import HomeIcon from "@mui/icons-material/Home";
import FolderIcon from "@mui/icons-material/Folder";
import BuildIcon from "@mui/icons-material/Build";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

import Image from "next/image";
import github_cool from "../public/github_cool.jpg";

{
  /*Icons for Fixed Column on Left*/
}
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

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
          sx={{
            background: "#151312",
          }}
        >
          <BottomNavigationAction
            icon={
              <HomeIcon
                sx={{
                  color: "white",
                }}
              ></HomeIcon>
            }
          ></BottomNavigationAction>

          <BottomNavigationAction
            icon={
              <FolderIcon
                sx={{
                  color: "white",
                }}
              ></FolderIcon>
            }
          ></BottomNavigationAction>

          <BottomNavigationAction
            icon={
              <WorkHistoryIcon
                sx={{
                  color: "white",
                }}
              ></WorkHistoryIcon>
            }
          ></BottomNavigationAction>

          <BottomNavigationAction
            icon={
              <BuildIcon
                sx={{
                  color: "white",
                }}
              ></BuildIcon>
            }
          ></BottomNavigationAction>

          <BottomNavigationAction
            icon={
              <ConnectWithoutContactIcon
                sx={{
                  color: "white",
                }}
              ></ConnectWithoutContactIcon>
            }
          ></BottomNavigationAction>
        </BottomNavigation>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid size={4}>
            <Container fixed>
              <Box
                sx={{
                  backgroundColor: "#151312",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 500,
                  width: 300,
                  flexDirection: "column",
                  borderRadius: "10px",
                  marginTop: "100px",
                  marginLeft: "100px",
                }}
              >
                <Image
                  src={github_cool}
                  alt="Description"
                  width={200}
                  height={200}
                  style={{
                    borderRadius: "100%",
                  }}
                />

                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "white",
                      textTransform: "uppercase",
                      textAlign: "center",
                      fontFamily: "Kanit",
                      fontWeight: 900,
                      paddingTop: "20px",
                    }}
                  >
                    <br></br>
                    Hamim Choudhury
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "white",
                      fontFamily: "Kanit",
                      textAlign: "center",
                      fontWeight: 400,
                      marginTop: "10px",
                    }}
                    style={{
                      lineHeight: "24px",
                    }}
                  >
                    A software engineer with a passion to develop projects, big
                    or small.
                  </Typography>
                </Box>

                <Box
                  sx={{
                    gap: 10,
                  }}
                >
                  <Link
                    href="https://www.linkedin.com/in/hamimc/"
                    target="_blank"
                    passHref
                    style={{
                      color: "white",
                      textDecoration: "none",
                      marginRight: "15px",
                    }}
                  >
                    <br></br>
                    <br></br>
                    <LinkedInIcon sx={{ fontSize: "30px" }}></LinkedInIcon>
                  </Link>

                  <Link
                    href="https://github.com/hamim23z"
                    target="_blank"
                    passHref
                    style={{
                      color: "white",
                      textDecoration: "none",
                      marginRight: "15px",
                    }}
                  >
                    <GitHubIcon sx={{ fontSize: "30px" }}></GitHubIcon>
                  </Link>

                  <Link
                    href="https://drive.google.com/file/d/1NiHdoMVGo45BGcapCoLROxAfw0i7f7Uq/view?usp=sharing"
                    target="_blank"
                    passHref
                    style={{
                      color: "white",
                      textDecoration: "none",
                      marginRight: "15px",
                    }}
                  >
                    <FileCopyIcon sx={{ fontSize: "30px" }}></FileCopyIcon>
                  </Link>

                  <Link
                    href="mailto:hamimc232@gmail.com"
                    target="_blank"
                    passHref
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    <EmailIcon sx={{ fontSize: "30px" }}></EmailIcon>
                  </Link>
                </Box>
              </Box>
            </Container>
          </Grid>

          <Grid size={8}>
            <Typography></Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}