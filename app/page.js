"use client";
import React from "react";
import {
  Box,
  Typography,
  Paper,
  Container,
  Avatar,
  CardMedia,
  Card,
  CardContent,
  Button,
  CardHeader,
} from "@mui/material";

import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

{
  /*Navbar Icons*/
}
import HomeIcon from "@mui/icons-material/Home";
import FolderIcon from "@mui/icons-material/Folder";
import BuildIcon from "@mui/icons-material/Build";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";

{
  /*Images and Image Stuff*/
}
import Image from "next/image";
import github_cool from "../public/github_cool.jpg";
import smart_study_logo from "../public/smart_study_logo.png";
import smart_translate_logo from "../public/smart_translate_logo.png";
import html_logo from "../public/html_logo.png";

{
  /*Icons for Fixed Column on Left*/
}
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";
import { height } from "@mui/system";

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

              <Card
                sx={(theme) => ({
                  marginTop: theme.spacing(4),
                  borderRadius: theme.spacing(2),
                  transition: "0.3s",
                  boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
                  position: "relative",
                  maxWidth: "100%",
                  overflow: "initial",
                  background: "#ffffff",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingBottom: theme.spacing(2),
                  [theme.breakpoints.up("md")]: {
                    flexDirection: "row",
                    paddingTop: theme.spacing(2),
                  },
                  width: "73%",
                  height: "300px",
                })}
              >
                <Box
                  sx={(theme) => ({
                    width: "88%",
                    maxWidth: 300,
                    position: "relative",
                    marginTop: theme.spacing(-3),
                    aspectRatio: "1/1",
                    [theme.breakpoints.up("md")]: {
                      width: 300,
                      marginLeft: theme.spacing(-3),
                      marginTop: 0,
                      flexShrink: 0,
                    },
                  })}
                >
                  {/*Image here*
                  <Box>
                    <Image
                      src={smart_study_logo}
                      alt="Smart Study Logo"
                      fill
                      sizes="(max-width: 768px) 88vw, 300px"
                      style={{
                        objectFit: "cover",
                        borderRadius: "16px",
                        background: "transparent",
                      }}
                    />
                  </Box>
                  */}
                </Box>
                <CardContent>
                  <Typography
                    variant="overline"
                    sx={{
                      letterSpacing: "1px",
                      fontSize: 12,
                      marginBottom: "0.875em",
                      display: "inline-block",
                    }}
                  >
                    CURRENT PROJECT | JavaScript, Next.JS, React, MUI, OpenAI,
                    Firebase
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      marginBottom: "0.35em",
                      fontFamily: "Kanit",
                    }}
                  >
                    Smart Study
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      marginBottom: 2,
                      letterSpacing: "0.00938em",
                      fontFamily: "Kanit",
                    }}
                  >
                    Smart Study is a project that I began working on in August.
                    The purpose of this project is to serve as a study website
                    strictly for engineering students. Users will be able to
                    create flashcards, generate cards using AI, watch videos,
                    take quizzes, and much more. The waitlist for Smart Study is
                    live, click the button to join!
                  </Typography>
                  <Button
                    sx={{
                      backgroundColor: "red",
                      borderRadius: 100,
                      paddingLeft: 3,
                      paddingRight: 3,
                      color: "#ffffff",
                      fontFamily: "Kanit",
                      marginLeft: "-5px",
                    }}
                  >
                    Read more
                  </Button>
                </CardContent>
              </Card>

              {/*Second Card*/}
              <Card
                sx={(theme) => ({
                  marginTop: theme.spacing(4),
                  borderRadius: theme.spacing(2),
                  transition: "0.3s",
                  boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
                  position: "relative",
                  maxWidth: "100%",
                  overflow: "initial",
                  background: "#ffffff",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingBottom: theme.spacing(2),
                  [theme.breakpoints.up("md")]: {
                    flexDirection: "row",
                    paddingTop: theme.spacing(2),
                  },
                  width: "73%",
                  height: "300px",
                })}
              >
                <Box
                  sx={(theme) => ({
                    width: "88%",
                    maxWidth: 300,
                    position: "relative",
                    marginTop: theme.spacing(-3),
                    aspectRatio: "1/1",
                    [theme.breakpoints.up("md")]: {
                      width: 300,
                      marginLeft: theme.spacing(-3),
                      marginTop: 0,
                      flexShrink: 0,
                    },
                  })}
                >
                  {/*Image here*
                  <Box>
                    <Image
                      src={smart_study_logo}
                      alt="Smart Study Logo"
                      fill
                      sizes="(max-width: 768px) 88vw, 300px"
                      style={{
                        objectFit: "cover",
                        borderRadius: "16px",
                        background: "transparent",
                      }}
                    />
                  </Box>
                  */}
                </Box>
                <CardContent>
                  <Typography
                    variant="overline"
                    sx={{
                      letterSpacing: "1px",
                      fontSize: 12,
                      marginBottom: "0.875em",
                      display: "inline-block",
                    }}
                  >
                    CURRENT PROJECT | JavaScript, Next.JS, React, MUI, Google
                    APIs
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      marginBottom: "0.35em",
                      fontFamily: "Kanit",
                    }}
                  >
                    Smart Translate
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      marginBottom: 2,
                      letterSpacing: "0.00938em",
                      fontFamily: "Kanit",
                    }}
                  >
                    Smart Translate is a project that I began working on very
                    recently. The purpose of this project is to serve as a
                    translation website for text, speech, and videos. Users will
                    be able to enter text, use their mic, or input a YouTube
                    video and then select a language for it to be translated.
                    There is no site or waitlist for this project yet.
                  </Typography>
                  <Button
                    sx={{
                      backgroundColor: "red",
                      borderRadius: 100,
                      paddingLeft: 3,
                      paddingRight: 3,
                      color: "#ffffff",
                      fontFamily: "Kanit",
                      marginLeft: "-5px",
                    }}
                  >
                    Read more
                  </Button>
                </CardContent>
              </Card>

              {/*Third Card*/}
              <Card
                sx={(theme) => ({
                  marginTop: theme.spacing(4),
                  borderRadius: theme.spacing(2),
                  transition: "0.3s",
                  boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
                  position: "relative",
                  maxWidth: "100%",
                  overflow: "initial",
                  background: "#ffffff",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingBottom: theme.spacing(2),
                  [theme.breakpoints.up("md")]: {
                    flexDirection: "row",
                    paddingTop: theme.spacing(2),
                  },
                  width: "73%",
                  height: "300px",
                })}
              >
                <Box
                  sx={(theme) => ({
                    width: "88%",
                    maxWidth: 300,
                    position: "relative",
                    marginTop: theme.spacing(-3),
                    aspectRatio: "1/1",
                    [theme.breakpoints.up("md")]: {
                      width: 300,
                      marginLeft: theme.spacing(-3),
                      marginTop: 0,
                      flexShrink: 0,
                    },
                  })}
                >
                  {/*Image here*
                  <Box>
                    <Image
                      src={smart_study_logo}
                      alt="Smart Study Logo"
                      fill
                      sizes="(max-width: 768px) 88vw, 300px"
                      style={{
                        objectFit: "cover",
                        borderRadius: "16px",
                        background: "transparent",
                      }}
                    />
                  </Box>
                  */}
                </Box>
                <CardContent>
                  <Typography
                    variant="overline"
                    sx={{
                      letterSpacing: "1px",
                      fontSize: 12,
                      marginBottom: "0.875em",
                      display: "inline-block",
                    }}
                  >
                    August 2024 | JavaScript, Next.JS, React, MUI, OpenAI
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      marginBottom: "0.35em",
                      fontFamily: "Kanit",
                    }}
                  >
                    Chronicle AI
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      marginBottom: 2,
                      letterSpacing: "0.00938em",
                      fontFamily: "Kanit",
                    }}
                  >
                    ChronicleAI is a project that me and my friends worked on in
                    August 2024, a lot of the project was completed in August
                    and we made minor tweaks after. The purpose of this project
                    is to serve as an AI chatbot for Computer Science students.
                    Users can ask anything CS related . The project is
                    completed, click the button to check it out!
                  </Typography>
                  <Button
                    sx={{
                      backgroundColor: "red",
                      borderRadius: 100,
                      paddingLeft: 3,
                      paddingRight: 3,
                      color: "#ffffff",
                      fontFamily: "Kanit",
                      marginLeft: "-5px",
                    }}
                  >
                    Read more
                  </Button>
                </CardContent>
              </Card>

              {/*Fourth Card*/}
              <Card
                sx={(theme) => ({
                  marginTop: theme.spacing(4),
                  borderRadius: theme.spacing(2),
                  transition: "0.3s",
                  boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
                  position: "relative",
                  maxWidth: "100%",
                  overflow: "initial",
                  background: "#ffffff",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingBottom: theme.spacing(2),
                  [theme.breakpoints.up("md")]: {
                    flexDirection: "row",
                    paddingTop: theme.spacing(2),
                  },
                  width: "73%",
                  height: "300px",
                })}
              >
                <Box
                  sx={(theme) => ({
                    width: "88%",
                    maxWidth: 300,
                    position: "relative",
                    marginTop: theme.spacing(-3),
                    aspectRatio: "1/1",
                    [theme.breakpoints.up("md")]: {
                      width: 300,
                      marginLeft: theme.spacing(-3),
                      marginTop: 0,
                      flexShrink: 0,
                    },
                  })}
                >
                  {/*Image here*
                  <Box>
                    <Image
                      src={smart_study_logo}
                      alt="Smart Study Logo"
                      fill
                      sizes="(max-width: 768px) 88vw, 300px"
                      style={{
                        objectFit: "cover",
                        borderRadius: "16px",
                        background: "transparent",
                      }}
                    />
                  </Box>
                  */}
                </Box>
                <CardContent>
                  <Typography
                    variant="overline"
                    sx={{
                      letterSpacing: "1px",
                      fontSize: 12,
                      marginBottom: "0.875em",
                      display: "inline-block",
                    }}
                  >
                    January 2023 | Python, Discord.py
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      marginBottom: "0.35em",
                      fontFamily: "Kanit",
                    }}
                  >
                    Blizzard Bot
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      marginBottom: 2,
                      letterSpacing: "0.00938em",
                      fontFamily: "Kanit",
                    }}
                  >
                    Blizzard Bot is a Discord based bot that I worked on early
                    2023 very frequently. The purpose of this project was to
                    allow users in Discord servers to convert shoe sizes, check
                    websites for bot security, give information about which
                    companies are the best. This project is completed, click the
                    button to check it out!
                  </Typography>
                  <Button
                    sx={{
                      backgroundColor: "red",
                      borderRadius: 100,
                      paddingLeft: 3,
                      paddingRight: 3,
                      color: "#ffffff",
                      fontFamily: "Kanit",
                      marginLeft: "-5px",
                    }}
                  >
                    Read more
                  </Button>
                </CardContent>
              </Card>
            </Box>

            {/*Third Section on the Right Side*/}
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
                Experience
              </Typography>

              {/*First Card*/}
              <Card
                sx={(theme) => ({
                  marginTop: theme.spacing(4),
                  borderRadius: theme.spacing(2),
                  transition: "0.3s",
                  boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
                  position: "relative",
                  maxWidth: "100%",
                  overflow: "initial",
                  background: "#ffffff",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingBottom: theme.spacing(2),
                  [theme.breakpoints.up("md")]: {
                    flexDirection: "row",
                    paddingTop: theme.spacing(2),
                  },
                  width: "73%",
                  height: "250px",
                })}
              >
                <Box
                  sx={(theme) => ({
                    width: "88%",
                    maxWidth: 300,
                    position: "relative",
                    marginTop: theme.spacing(-3),
                    aspectRatio: "1/1",
                    [theme.breakpoints.up("md")]: {
                      width: 300,
                      marginLeft: theme.spacing(-3),
                      marginTop: 0,
                      flexShrink: 0,
                    },
                  })}
                >
                  {/*Image here*
                  <Box>
                    <Image
                      src={smart_study_logo}
                      alt="Smart Study Logo"
                      fill
                      sizes="(max-width: 768px) 88vw, 300px"
                      style={{
                        objectFit: "cover",
                        borderRadius: "16px",
                        background: "transparent",
                      }}
                    />
                  </Box>
                  */}
                </Box>
                <CardContent>
                  <Typography
                    variant="overline"
                    sx={{
                      letterSpacing: "1px",
                      fontSize: 12,
                      marginBottom: "0.875em",
                      display: "inline-block",
                    }}
                  >
                    July 2024 - Present | NYC Department of Records
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      marginBottom: "0.35em",
                      fontFamily: "Kanit",
                    }}
                  >
                    Software Engineer Intern
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      marginBottom: 2,
                      letterSpacing: "0.00938em",
                      fontFamily: "Kanit",
                    }}
                  >
                    Filler text here.
                  </Typography>
                </CardContent>
              </Card>

              {/*Second Card*/}
              <Card
                sx={(theme) => ({
                  marginTop: theme.spacing(4),
                  borderRadius: theme.spacing(2),
                  transition: "0.3s",
                  boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
                  position: "relative",
                  maxWidth: "100%",
                  overflow: "initial",
                  background: "#ffffff",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingBottom: theme.spacing(2),
                  [theme.breakpoints.up("md")]: {
                    flexDirection: "row",
                    paddingTop: theme.spacing(2),
                  },
                  width: "73%",
                  height: "250px",
                })}
              >
                <Box
                  sx={(theme) => ({
                    width: "88%",
                    maxWidth: 300,
                    position: "relative",
                    marginTop: theme.spacing(-3),
                    aspectRatio: "1/1",
                    [theme.breakpoints.up("md")]: {
                      width: 300,
                      marginLeft: theme.spacing(-3),
                      marginTop: 0,
                      flexShrink: 0,
                    },
                  })}
                >
                  {/*Image here*
                  <Box>
                    <Image
                      src={smart_study_logo}
                      alt="Smart Study Logo"
                      fill
                      sizes="(max-width: 768px) 88vw, 300px"
                      style={{
                        objectFit: "cover",
                        borderRadius: "16px",
                        background: "transparent",
                      }}
                    />
                  </Box>
                  */}
                </Box>
                <CardContent>
                  <Typography
                    variant="overline"
                    sx={{
                      letterSpacing: "1px",
                      fontSize: 12,
                      marginBottom: "0.875em",
                      display: "inline-block",
                    }}
                  >
                    June 2023 - Oct 2023 | NYC Department of Design and
                    Construction
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      marginBottom: "0.35em",
                      fontFamily: "Kanit",
                    }}
                  >
                    Software Engineer & Information Technology Intern
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      marginBottom: 2,
                      letterSpacing: "0.00938em",
                      fontFamily: "Kanit",
                    }}
                  >
                    Filler text here.
                  </Typography>
                </CardContent>
              </Card>

              {/*Third Card*/}
              <Card
                sx={(theme) => ({
                  marginTop: theme.spacing(4),
                  borderRadius: theme.spacing(2),
                  transition: "0.3s",
                  boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
                  position: "relative",
                  maxWidth: "100%",
                  overflow: "initial",
                  background: "#ffffff",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingBottom: theme.spacing(2),
                  [theme.breakpoints.up("md")]: {
                    flexDirection: "row",
                    paddingTop: theme.spacing(2),
                  },
                  width: "73%",
                  height: "250px",
                })}
              >
                <Box
                  sx={(theme) => ({
                    width: "88%",
                    maxWidth: 300,
                    position: "relative",
                    marginTop: theme.spacing(-3),
                    aspectRatio: "1/1",
                    [theme.breakpoints.up("md")]: {
                      width: 300,
                      marginLeft: theme.spacing(-3),
                      marginTop: 0,
                      flexShrink: 0,
                    },
                  })}
                >
                  {/*Image here*
                  <Box>
                    <Image
                      src={smart_study_logo}
                      alt="Smart Study Logo"
                      fill
                      sizes="(max-width: 768px) 88vw, 300px"
                      style={{
                        objectFit: "cover",
                        borderRadius: "16px",
                        background: "transparent",
                      }}
                    />
                  </Box>
                  */}
                </Box>
                <CardContent>
                  <Typography
                    variant="overline"
                    sx={{
                      letterSpacing: "1px",
                      fontSize: 12,
                      marginBottom: "0.875em",
                      display: "inline-block",
                    }}
                  >
                    July 2021 - June 2023 | Trademark Services
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      marginBottom: "0.35em",
                      fontFamily: "Kanit",
                    }}
                  >
                    Sneaker Information Developer
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      marginBottom: 2,
                      letterSpacing: "0.00938em",
                      fontFamily: "Kanit",
                    }}
                  >
                    Filler text here.
                  </Typography>
                </CardContent>
              </Card>

              {/*Fourth Card*/}
              <Card
                sx={(theme) => ({
                  marginTop: theme.spacing(4),
                  borderRadius: theme.spacing(2),
                  transition: "0.3s",
                  boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
                  position: "relative",
                  maxWidth: "100%",
                  overflow: "initial",
                  background: "#ffffff",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingBottom: theme.spacing(2),
                  [theme.breakpoints.up("md")]: {
                    flexDirection: "row",
                    paddingTop: theme.spacing(2),
                  },
                  width: "73%",
                  height: "250px",
                })}
              >
                <Box
                  sx={(theme) => ({
                    width: "88%",
                    maxWidth: 300,
                    position: "relative",
                    marginTop: theme.spacing(-3),
                    aspectRatio: "1/1",
                    [theme.breakpoints.up("md")]: {
                      width: 300,
                      marginLeft: theme.spacing(-3),
                      marginTop: 0,
                      flexShrink: 0,
                    },
                  })}
                >
                  {/*Image here*
                  <Box>
                    <Image
                      src={smart_study_logo}
                      alt="Smart Study Logo"
                      fill
                      sizes="(max-width: 768px) 88vw, 300px"
                      style={{
                        objectFit: "cover",
                        borderRadius: "16px",
                        background: "transparent",
                      }}
                    />
                  </Box>
                  */}
                </Box>
                <CardContent>
                  <Typography
                    variant="overline"
                    sx={{
                      letterSpacing: "1px",
                      fontSize: 12,
                      marginBottom: "0.875em",
                      display: "inline-block",
                    }}
                  >
                    Oct 2020 - Feb 2021 | Fyllan
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      marginBottom: "0.35em",
                      fontFamily: "Kanit",
                    }}
                  >
                    Web Development Intern
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      marginBottom: 2,
                      letterSpacing: "0.00938em",
                      fontFamily: "Kanit",
                    }}
                  >
                    Filler text here.
                  </Typography>
                </CardContent>
              </Card>
            </Box>

            {/*Fourth Section - Tech Stack*/}
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
                Tech Stack
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 15,
                }}
              >
                <Box>
                  <Image
                    src={html_logo}
                    alt="Hello world"
                    style={{
                      objectFit: "cover",
                      borderRadius: "50px",
                      height: "250px",
                      width: "200px",
                    }}
                  ></Image>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "Kanit",
                      fontWeight: 700,
                      textAlign: "center",
                      paddingTop: "20px",
                    }}
                  >
                    HTML
                  </Typography>
                </Box>

                <Box>
                  <Image
                    src={html_logo}
                    alt="Hello world"
                    style={{
                      objectFit: "cover",
                      borderRadius: "50px",
                      height: "250px",
                      width: "200px",
                    }}
                  ></Image>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "Kanit",
                      fontWeight: 700,
                      textAlign: "center",
                      paddingTop: "20px",
                    }}
                  >
                    CSS
                  </Typography>
                </Box>

                <Box>
                  <Image
                    src={html_logo}
                    alt="Hello world"
                    style={{
                      objectFit: "cover",
                      borderRadius: "50px",
                      height: "250px",
                      width: "200px",
                    }}
                  ></Image>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "Kanit",
                      fontWeight: 700,
                      textAlign: "center",
                      paddingTop: "20px",
                    }}
                  >
                    JavaScript
                  </Typography>
                </Box>
              </Box>

              {/*Second Row*/}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 15,
                  paddingTop: "75px",
                }}
              >
                <Box>
                  <Image
                    src={html_logo}
                    alt="Hello world"
                    style={{
                      objectFit: "cover",
                      borderRadius: "50px",
                      height: "250px",
                      width: "200px",
                    }}
                  ></Image>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "Kanit",
                      fontWeight: 700,
                      textAlign: "center",
                      paddingTop: "20px",
                    }}
                  >
                    Next.JS
                  </Typography>
                </Box>

                <Box>
                  <Image
                    src={html_logo}
                    alt="Hello world"
                    style={{
                      objectFit: "cover",
                      borderRadius: "50px",
                      height: "250px",
                      width: "200px",
                    }}
                  ></Image>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "Kanit",
                      fontWeight: 700,
                      textAlign: "center",
                      paddingTop: "20px",
                    }}
                  >
                    React
                  </Typography>
                </Box>

                <Box>
                  <Image
                    src={html_logo}
                    alt="Hello world"
                    style={{
                      objectFit: "cover",
                      borderRadius: "50px",
                      height: "250px",
                      width: "200px",
                    }}
                  ></Image>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "Kanit",
                      fontWeight: 700,
                      textAlign: "center",
                      paddingTop: "20px",
                    }}
                  >
                    MUI
                  </Typography>
                </Box>
              </Box>

              {/*Third Row*/}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 15,
                  paddingTop: "75px",
                }}
              >
                <Box>
                  <Image
                    src={html_logo}
                    alt="Hello world"
                    style={{
                      objectFit: "cover",
                      borderRadius: "50px",
                      height: "250px",
                      width: "200px",
                    }}
                  ></Image>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "Kanit",
                      fontWeight: 700,
                      textAlign: "center",
                      paddingTop: "20px",
                    }}
                  >
                    Python
                  </Typography>
                </Box>

                <Box>
                  <Image
                    src={html_logo}
                    alt="Hello world"
                    style={{
                      objectFit: "cover",
                      borderRadius: "50px",
                      height: "250px",
                      width: "200px",
                    }}
                  ></Image>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "Kanit",
                      fontWeight: 700,
                      textAlign: "center",
                      paddingTop: "20px",
                    }}
                  >
                    Flask
                  </Typography>
                </Box>

                <Box>
                  <Image
                    src={html_logo}
                    alt="Hello world"
                    style={{
                      objectFit: "cover",
                      borderRadius: "50px",
                      height: "250px",
                      width: "200px",
                    }}
                  ></Image>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "Kanit",
                      fontWeight: 700,
                      textAlign: "center",
                      paddingTop: "20px",
                    }}
                  >
                    Docker
                  </Typography>
                </Box>
              </Box>

              {/*Fourth Row*/}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 15,
                  paddingTop: "75px",
                }}
              >
                <Box>
                  <Image
                    src={html_logo}
                    alt="Hello world"
                    style={{
                      objectFit: "cover",
                      borderRadius: "50px",
                      height: "250px",
                      width: "200px",
                    }}
                  ></Image>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "Kanit",
                      fontWeight: 700,
                      textAlign: "center",
                      paddingTop: "20px",
                    }}
                  >
                    OpenAI
                  </Typography>
                </Box>

                <Box>
                  <Image
                    src={html_logo}
                    alt="Hello world"
                    style={{
                      objectFit: "cover",
                      borderRadius: "50px",
                      height: "250px",
                      width: "200px",
                    }}
                  ></Image>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "Kanit",
                      fontWeight: 700,
                      textAlign: "center",
                      paddingTop: "20px",
                    }}
                  >
                    Firebase
                  </Typography>
                </Box>

                <Box>
                  <Image
                    src={html_logo}
                    alt="Hello world"
                    style={{
                      objectFit: "cover",
                      borderRadius: "50px",
                      height: "250px",
                      width: "200px",
                    }}
                  ></Image>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "Kanit",
                      fontWeight: 700,
                      textAlign: "center",
                      paddingTop: "20px",
                    }}
                  >
                    SQL
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}