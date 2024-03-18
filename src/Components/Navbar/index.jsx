import { AiFillBell } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineMenuFold } from "react-icons/ai";
import { styled, useTheme } from "@mui/material/styles";
import { AiOutlineQuestion } from "react-icons/ai";
import { AiOutlineChrome } from "react-icons/ai";
import { AiOutlineAntDesign } from "react-icons/ai";
import { AiOutlineBarcode } from "react-icons/ai";
import { MdFormatColorFill } from "react-icons/md";
import { TbTextSize } from "react-icons/tb";
import { CgList } from "react-icons/cg";
import { AiOutlineLogin } from "react-icons/ai";
import { AiOutlineDashboard } from "react-icons/ai";
import Homes from "../../Pages/Home";
import Color from "../../Pages/Color";
import Sample from "../../Pages/Sample";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import "./style.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Rasm from "./download.png";
import React, { useState } from "react";
import Shadow from "../../Pages/Shadow";
import { Avatar, Badge } from "@mui/material";
import Rasm2 from "../Charts/download (1).png";
import AntIcons from "../../Pages/Icon";
import Typogrpahy from "../../Pages/Typhography";
import Login from "../../Pages/Login";
import Register from "../../Pages/Register";

function Navbar() {
  const drawerWidth = 259.2;
  const theme = useTheme();
  const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    })
  );

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

  const [open, setOpen] = useState(true);

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };
  // const navigate = useNavigate();
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          open={open}
          sx={{
            background: "#fff",
            zIndex: "999",
            boxShadow: "0",
            border: "1px solid gainsboro",
          }}
        >
          <Toolbar style={{ width: "100%" }}>
            <div>
              <DrawerHeader>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    gap: "610px",
                    alignItems: "center",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <IconButton
                      sx={{ borderRadius: "5px" }}
                      onClick={() => setOpen(!open)}
                    >
                      {open ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
                    </IconButton>

                    <input
                      type="text"
                      style={{
                        width: "224px",
                        height: "35px",
                        borderRadius: "5px",
                        border: "1px solid gainsboro",
                        paddingLeft: "14%",
                      }}
                      placeholder="Ctrl + K"
                    />
                    <IconButton
                      style={{
                        zIndex: "999",
                        position: "absolute",
                        marginLeft: "3.5%",
                        cursor: "pointer",
                      }}
                    >
                      <BiSearch size={15} />
                    </IconButton>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "3%",
                      position: "absolute",
                      right: "5%",
                    }}
                  >
                    <IconButton style={{ borderRadius: "5px" }}>
                      <AiOutlineGithub />
                    </IconButton>
                    <IconButton style={{ borderRadius: "5px" }}>
                      <Badge color="primary" badgeContent={4}>
                        <AiFillBell />
                      </Badge>
                    </IconButton>
                    <IconButton
                      style={{ fontSize: "14px", borderRadius: "5px" }}
                    >
                      <Avatar
                        sx={{
                          position: "relative",
                          zIndex: "5",
                          border: "2px solid white",
                        }}
                        alt="Remy Sharp"
                        src={Rasm2}
                      />
                      Jhon Doe
                    </IconButton>
                  </div>
                </div>
              </DrawerHeader>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,

            flexShrink: 0,
            "& .MuiDrawer-paper": {
              paddingLeft: "0.2%",
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          className="drawer"
          variant="persistent"
          anchor="left"
          open={open}
        >
          <Divider />
          <List style={{ paddingLeft: "3%" }}>
            <svg
              width="118"
              height="35"
              viewBox="0 0 118 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.63564 15.8644L6.94797 13.552L6.95038 13.5496H11.3006L9.56969 15.2806L9.12278 15.7275L7.35024 17.5L7.56977 17.7201L17.5 27.6498L27.6498 17.5L25.8766 15.7275L25.7518 15.602L23.6994 13.5496H28.0496L28.052 13.552L29.8644 15.3644L32 17.5L17.5 32L3 17.5L4.63564 15.8644ZM17.5 3L25.8784 11.3784H21.5282L17.5 7.35024L13.4718 11.3784H9.12158L17.5 3Z"
                fill="#0958d9"
              ></path>
              <path
                d="M7.35025 17.5L9.1228 15.7275L9.5697 15.2805L7.83937 13.5496H6.95039L6.94798 13.552L4.63564 15.8644L6.8551 18.073L7.35025 17.5Z"
                fill="url(#paint0_linear)"
              ></path>
              <path
                d="M25.8767 15.7275L27.6498 17.5L27.4743 17.6755L27.4749 17.6761L29.8644 15.3644L28.0521 13.552L28.0497 13.5496H27.8736L25.7518 15.602L25.8767 15.7275Z"
                fill="url(#paint1_linear)"
              ></path>
              <path
                d="M6.94549 13.5496L6.9479 13.552L9.12272 15.7275L17.4999 24.1041L28.0544 13.5496H6.94549Z"
                fill="#1677ff"
              ></path>
              <path
                d="M46.5781 10V26H49.3594V14.9844H49.5078L53.9297 25.9531H56.0078L60.4297 15.0078H60.5781V26H63.3594V10H59.8125L55.0625 21.5937H54.875L50.125 10H46.5781ZM69.8438 26.2422C71.7266 26.2422 72.8516 25.3594 73.3672 24.3516H73.4609V26H76.1797V17.9687C76.1797 14.7969 73.5937 13.8438 71.3047 13.8438C68.7813 13.8438 66.8437 14.9687 66.2188 17.1562L68.8594 17.5312C69.1406 16.7109 69.9375 16.0078 71.3203 16.0078C72.6328 16.0078 73.3516 16.6797 73.3516 17.8594V17.9062C73.3516 18.7188 72.5 18.7578 70.3828 18.9844C68.0547 19.2344 65.8281 19.9297 65.8281 22.6328C65.8281 24.9922 67.5547 26.2422 69.8438 26.2422ZM70.5781 24.1641C69.3984 24.1641 68.5547 23.625 68.5547 22.5859C68.5547 21.5 69.5 21.0469 70.7656 20.8672C71.5078 20.7656 72.9922 20.5781 73.3594 20.2812V21.6953C73.3594 23.0312 72.2813 24.1641 70.5781 24.1641ZM81.8516 18.9687C81.8516 17.2344 82.8984 16.2344 84.3906 16.2344C85.8516 16.2344 86.7266 17.1953 86.7266 18.7969V26H89.5547V18.3594C89.5625 15.4844 87.9219 13.8438 85.4453 13.8438C83.6484 13.8438 82.4141 14.7031 81.8672 16.0391H81.7266V14H79.0234V26H81.8516V18.9687ZM98.4219 14H96.0547V11.125H93.2266V14H91.5234V16.1875H93.2266V22.8594C93.2109 25.1172 94.8516 26.2266 96.9766 26.1641C97.7813 26.1406 98.3359 25.9844 98.6406 25.8828L98.1641 23.6719C98.0078 23.7109 97.6875 23.7812 97.3359 23.7812C96.625 23.7812 96.0547 23.5312 96.0547 22.3906V16.1875H98.4219V14ZM100.787 26H103.615V14H100.787V26ZM102.209 12.2969C103.107 12.2969 103.842 11.6094 103.842 10.7656C103.842 9.91406 103.107 9.22656 102.209 9.22656C101.303 9.22656 100.568 9.91406 100.568 10.7656C100.568 11.6094 101.303 12.2969 102.209 12.2969ZM116.008 17.1719C115.617 15.1406 113.992 13.8438 111.18 13.8438C108.289 13.8438 106.32 15.2656 106.328 17.4844C106.32 19.2344 107.398 20.3906 109.703 20.8672L111.75 21.2969C112.852 21.5391 113.367 21.9844 113.367 22.6641C113.367 23.4844 112.477 24.1016 111.133 24.1016C109.836 24.1016 108.992 23.5391 108.75 22.4609L105.992 22.7266C106.344 24.9297 108.195 26.2344 111.141 26.2344C114.141 26.2344 116.258 24.6797 116.266 22.4062C116.258 20.6953 115.156 19.6484 112.891 19.1562L110.844 18.7188C109.625 18.4453 109.141 18.0234 109.148 17.3281C109.141 16.5156 110.039 15.9531 111.219 15.9531C112.523 15.9531 113.211 16.6641 113.43 17.4531L116.008 17.1719Z"
                fill="#000"
                fill-opacity="0.85"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="8.62526"
                  y1="14.0888"
                  x2="5.56709"
                  y2="17.1469"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#002c8c"></stop>
                  <stop
                    offset="0.9637"
                    stop-color="#0958d9"
                    stop-opacity="0"
                  ></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear"
                  x1="26.2675"
                  y1="14.1279"
                  x2="28.7404"
                  y2="16.938"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#002c8c"></stop>
                  <stop offset="1" stop-color="#0958d9" stop-opacity="0"></stop>
                </linearGradient>
              </defs>
            </svg>
          </List>
          <Divider />
          <List>
            <h4
              style={{
                fontSize: "12px",
                paddingLeft: "7%",
                height: "45px",
                display: "flex",
                alignItems: "center",
              }}
            >
              Navigation
            </h4>
            <ListItem disablePadding style={{ height: "45px" }}>
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "active "
                    : "text-black flex gap-5 items-center"
                }
                to={"/"}
                style={{ textDecoration: "none", width: "100%", color: "#000" }}
              >
                <ListItemButton style={{ display: "flex", gap: "5%" }}>
                  <AiOutlineDashboard /> Dashboard
                </ListItemButton>
              </NavLink>
            </ListItem>
            <h4
              style={{
                fontSize: "12px",
                paddingLeft: "7%",
                height: "45px",
                display: "flex",
                alignItems: "center",
              }}
            >
              Authetation
            </h4>
            <ListItem disablePadding style={{ height: "45px" }}>
              <NavLink className={"link"} to={"/login"}>
                <ListItemButton style={{ display: "flex", gap: "5%" }}>
                  <AiOutlineLogin /> Login
                </ListItemButton>
              </NavLink>
            </ListItem>
            <ListItem disablePadding style={{ height: "45px" }}>
              <NavLink className={"link"} to={"/register"}>
                <ListItemButton style={{ display: "flex", gap: "5%" }}>
                  <CgList /> Register
                </ListItemButton>
              </NavLink>
            </ListItem>
            <h4
              style={{
                fontSize: "12px",
                paddingLeft: "7%",
                height: "45px",
                display: "flex",
                alignItems: "center",
              }}
            >
              Navigation
            </h4>
            <ListItem disablePadding style={{ height: "45px" }}>
              <NavLink to={"/typography"} className={"link"}>
                <ListItemButton style={{ display: "flex", gap: "5%" }}>
                  <TbTextSize /> Typography
                </ListItemButton>
              </NavLink>
            </ListItem>
            <ListItem disablePadding style={{ height: "45px" }}>
              <NavLink className={"link"} to={"/color"}>
                <ListItemButton style={{ display: "flex", gap: "5%" }}>
                  <MdFormatColorFill /> Color
                </ListItemButton>
              </NavLink>
            </ListItem>
            <ListItem disablePadding style={{ height: "45px" }}>
              <NavLink className={"link"} to={"/shadow"}>
                <ListItemButton style={{ display: "flex", gap: "5%" }}>
                  <AiOutlineBarcode /> shadow
                </ListItemButton>
              </NavLink>
            </ListItem>
            <ListItem disablePadding style={{ height: "45px" }}>
              <NavLink to={"/icons"} className={"link"}>
                <ListItemButton style={{ display: "flex", gap: "5%" }}>
                  <AiOutlineAntDesign /> Ant Icons
                </ListItemButton>
              </NavLink>
            </ListItem>
          </List>
          <h4
            style={{
              fontSize: "12px",
              paddingLeft: "7%",
              height: "45px",
              display: "flex",
              alignItems: "center",
            }}
          >
            Navigation
          </h4>
          <ListItem disablePadding style={{ height: "45px" }}>
            <NavLink to={"/sample"} className={"link"}>
              <ListItemButton style={{ display: "flex", gap: "5%" }}>
                <AiOutlineChrome /> Sample Page
              </ListItemButton>
            </NavLink>
          </ListItem>
          <ListItem disablePadding style={{ height: "45px" }}>
            <NavLink
              className={"link"}
              to="https://codedthemes.gitbook.io/mantis"
            >
              <ListItemButton style={{ display: "flex", gap: "5%" }}>
                <AiOutlineQuestion /> Documentation
              </ListItemButton>
            </NavLink>
          </ListItem>
          <br />
          <Box
            sx={{
              textAlign: "center",
              width: "209px",
              height: "500px",
              borderRadius: "6px",
              border: "1px solid gainsboro",
              margin: "auto",
            }}
          >
            <div>
              <img src={Rasm} alt="" />
            </div>
            <div>
              <h5 style={{ fontSize: "16px", color: "#262626" }}>Mantis Pro</h5>
              <h6 style={{ fontSize: "14px", color: "#8c8c8c" }}>
                Checkout pro features
              </h6>
            </div>
            <div>
              <button
                style={{
                  width: "64px",
                  height: "30px",
                  background: "#52c41a",
                  border: "none",
                  borderRadius: "5px",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#fff",
                  cursor: "pointer",
                }}
                target="_blank"
                href="https://mantisdashboard.io"
              >
                Pro
              </button>
            </div>
          </Box>
          <br />
        </Drawer>
        <Main open={open}>
          <div>
            <Routes
              style={{
                mr: 2,
                marginInline: 10,
                ...(open && { marginInline: "20%" }),
              }}
            >
              <Route path="/" element={<Homes />} />
              <Route path="/color" element={<Color />} />
              <Route path="/sample" element={<Sample />} />
              <Route path="/shadow" element={<Shadow />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/typography" element={<Typogrpahy />} />
              <Route path="/icons" element={<AntIcons />} />
            </Routes>
          </div>
          <DrawerHeader />
        </Main>
      </Box>
    </div>
  );
}

export default Navbar;
