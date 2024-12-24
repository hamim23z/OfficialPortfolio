"use client";
import React from "react";
import {
  Box,
  Typography,
  Paper,
  Container,
  Avatar,
  CardMedia,
  Card, CardContent, Button,
  CardHeader
} from "@mui/material";

import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import HomeIcon from "@mui/icons-material/Home";
import FolderIcon from "@mui/icons-material/Folder";
import BuildIcon from "@mui/icons-material/Build";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

{/*Images and Image Stuff*/}
import Image from "next/image";
import github_cool from "../public/github_cool.jpg";
import smart_study_logo from "../public/smart_study_logo.png";
import smart_translate_logo from "../public/smart_translate_logo.png";

{/*Icons for Fixed Column on Left*/}
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

  const StyledRoot = styled("div")(() => ({
    position: "relative",
    borderRadius: "1rem",
    minWidth: 320,
    paddingTop: 60,
    "&:before": {
      transition: "0.2s",
      position: "absolute",
      width: "100%",
      height: "100%",
      content: '""',
      display: "block",
      borderRadius: "1rem",
      zIndex: 0,
      bottom: 0,
      backgroundColor: "#151312",
    },
    "&:hover": {
      "&:before": {
        bottom: -6,
      },
      "& .MuiAvatar-root": {
        transform: "scale(1.1)",
        boxShadow: "0 6px 20px 0 rgba(0,0,0,0.38)",
      },
    },
  }));

  const CardMediaCover = styled(Box)(() => ({
    borderRadius: "1rem",
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: 0,
    backgroundColor: "rgba(0, 0, 0, 0.08)",
  }));

  const StyledContent = styled("div")(() => ({
    position: "relative",
    zIndex: 1,
    padding: "1rem",
    borderRadius: "1rem",
    boxShadow: "0 6px 16px 0 rgba(0,0,0,0.5)",
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      left: 0,
      top: 1,
      zIndex: 0,
      width: "100%",
      height: "100%",
      clipPath:
        "polygon(0% 100%, 0% 35%, 0.3% 33%, 1% 31%, 1.5% 30%, 2% 29%, 2.5% 28.4%, 3% 27.9%, 3.3% 27.6%, 5% 27%,95% 0%,100% 0%, 100% 100%)",
      borderRadius: "1rem",
      background: "#151312",
    },
  }));

  const AvatarLogo = styled(Box)(() => ({
    transition: "0.3s",
    width: 100,
    height: 100,
    boxShadow: "0 4px 12px 0 rgba(0,0,0,0.24)",
    borderRadius: "1rem",
    position: "relative",
    overflow: "hidden",
  }));

  const ProjectCard = ({ cover, logo, title, brand, date }) => {
    return (
      <StyledRoot>
        <CardMediaCover>
          <Image
            src={cover}
            alt="Project Cover"
            fill
            style={{
              objectFit: "cover",
              borderRadius: "1rem",
            }}
          />
        </CardMediaCover>
        <StyledContent>
          <Box position={"relative"} zIndex={1}>
            <Box display="flex" p={0} gap={2} sx={{ flexWrap: "nowrap" }}>
              <Box>
                <AvatarLogo>
                  <Image
                    src={logo}
                    alt="Project Logo"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </AvatarLogo>
              </Box>
              <Box alignSelf="flex-end">
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Kanit",
                    fontWeight: 700,
                    color: "#fff",
                    margin: 0,
                  }}
                >
                  {title}
                </Typography>
              </Box>
            </Box>
            <Box display="flex" mt={4} alignItems={"center"}>
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: "Kanit",
                    color: "rgba(255, 255, 255, 0.8)",
                  }}
                >
                  {brand}
                </Typography>
              </Box>
              <Box ml="auto">
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: "Kanit",
                    color: "#fff",
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    padding: "0.25rem 0.5rem",
                    borderRadius: "12px",
                  }}
                >
                  {date}
                </Typography>
              </Box>
            </Box>
          </Box>
        </StyledContent>
      </StyledRoot>
    );
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
                  marginLeft: "150px",
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

          {/*First Section on the Right*/}
          <Grid size={8}>
            <Box sx={{ marginTop: "70px" }}>
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "Kanit",
                  fontWeight: 900,
                  textTransform: "uppercase",
                }}
              >
                Software
              </Typography>

              <Typography
                variant="h1"
                sx={{
                  fontFamily: "Kanit",
                  fontWeight: 900,
                  textTransform: "uppercase",
                }}
              >
                Engineer
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: "Kanit",
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}
              >
                Passionate about building projects that can make life easier in
                any way possible or solve real world problems.
              </Typography>

              <Box mt={4}>
                <Grid container spacing={4}>
                  <Grid
                    size={6}
                    sx={{
                      width: "400px",
                      maxHeight: "20px",
                    }}
                  >
                    <ProjectCard
                      brand={"Personal Project"}
                      date={"Currently Working On"}
                      cover={smart_study_logo}
                      logo={smart_study_logo}
                      title={"Smart Study"}
                    />
                  </Grid>

                  <Grid
                    size={6}
                    sx={{
                      width: "400px",
                    }}
                  >
                    <ProjectCard
                      brand={"Personal Project"}
                      date={"Currently Working On"}
                      cover={smart_translate_logo}
                      logo={smart_translate_logo}
                      title={"Smart Translate"}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Box>

            {/*Second Section on the Right Side*/}
            <Box>
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "Kanit",
                  fontWeight: 900,
                  textTransform: "uppercase",
                }}
              >
                <br></br>
                Projects
              </Typography>
            </Box>


            {/*Third Section on the Right Side*/}
            <Box>
              <Typography variant="h1" sx = {{fontFamily: "Kanit", fontWeight: 900, textTransform: "uppercase"}}>
                <br></br>
                Experience
              </Typography>
            </Box>

            <Box>
              <Typography variant="h1" sx = {{fontFamily: "Kanit", fontWeight: 900, textTransform: "uppercase"}}>
                <br></br>
                Tech Stack
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
