import { AiOutlineSetting } from "react-icons/ai";
import { BsFillChatDotsFill } from "react-icons/bs";
import { AiOutlineGift } from "react-icons/ai";
import { AiFillGift } from "react-icons/ai";
import Rasm from "./download (1).png";
import Rasm2 from "./download2.png";
import Rasm3 from "./download3.png";
import Rasm4 from "./download4.png";
import React from "react";
import "./chart";
import "./style.css";
import {
  Avatar,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { LineChart } from "@mui/x-charts";
import ApexChart from "./chart";
import ApexChart2 from "./chart2";
// import ApexChart from "./chart2";

function Chart() {
  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  const xLabels = ["Mo", "Tu", "We", "Page D", "Th", "Fr", "Sa", "Su"];

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData(159, "Frozen yoghurt", 6.0, 24, 4.0),
    createData(237, "Ice cream sandwich", 9.0, 37, 4.3),
    createData(262, "Eclair", 16.0, 24, 6.0),
    createData(305, "Cupcake", 3.7, 67, 4.3),
    createData(356, "Gingerbread", 16.0, 49, 3.9),
    createData(356, "Gingerbread", 16.0, 49, 3.9),
    createData(356, "Gingerbread", 16.0, 49, 3.9),
    createData(16.0, "Gingerbread", 356, 49, 3.9),
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto",
        justifyContent: "center",
        gap: "2%",
        marginTop: "4%",
        marginInline: "0",
      }}
      className="gridCard"
    >
      <Card className="card " style={{ width: "100%" }}>
        <CardContent className="carddd">
          <div id="#chart">
            <ApexChart />
          </div>
        </CardContent>
      </Card>
      <Card className="card" style={{ width: "100%" }}>
        <CardContent>
          <p>This week statistics</p>
          <p style={{ fontSize: "24px", fontWeight: "500" }}>$7,650</p>
          <div>
            <BarChart
              width={500}
              height={300}
              series={[
                { data: pData, id: "pvId" },
                { data: uData, id: "uvId" },
              ]}
              xAxis={[{ data: xLabels, scaleType: "band" }]}
            />
          </div>
        </CardContent>
      </Card>
      <Card
        className="card card2"
        style={{ display: "flex", alignItems: "center" }}
      >
        <TableContainer
          component={Paper}
          style={{ padding: "2%", paddingTop: "3.5%", paddingBottom: "3.5%" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Traking No</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      <Card className="card">
        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5],
              color: "#FBB937",
            },
          ]}
          width={500}
          height={300}
        />
      </Card>
      <Card className="card">
        <ApexChart2 />
      </Card>
      <div className="card">
        <Card>
          {" "}
          <Box
            sx={{
              width: "100%",
              maxWidth: "100%",
              bgcolor: "background.paper",
            }}
          >
            <nav style={{ width: "100%" }}>
              <List style={{ width: "100%" }}>
                <ListItem disablePadding style={{ width: "100%" }}>
                  <ListItemButton style={{ padding: "4%" }}>
                    <ListItemIcon>
                      <AiOutlineGift color="#52C41A" />
                    </ListItemIcon>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <div style={{ color: "#262626" }}>
                        <p style={{ fontSize: "14px" }}>Order #988784</p>
                        <p style={{ fontSize: "12px", color: "#8c8c8c" }}>
                          Toady 2:00 AM
                        </p>
                      </div>
                      <div style={{ color: "#262626", textAlign: "right" }}>
                        <p style={{ fontSize: "14px" }}>+$1430</p>
                        <p style={{ fontSize: "12px", color: "#8c8c8c" }}>
                          78%
                        </p>
                      </div>
                    </div>
                  </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding style={{ width: "100%" }}>
                  <ListItemButton style={{ padding: "4%" }}>
                    <ListItemIcon>
                      <BsFillChatDotsFill color="#1677FF" />
                    </ListItemIcon>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <div style={{ color: "#262626" }}>
                        <p style={{ fontSize: "14px" }}>Order #988784</p>
                        <p style={{ fontSize: "12px", color: "#8c8c8c" }}>
                          Toady 2:00 AM
                        </p>
                      </div>
                      <div style={{ color: "#262626", textAlign: "right" }}>
                        <p style={{ fontSize: "14px" }}>+$302</p>
                        <p style={{ fontSize: "12px", color: "#8c8c8c" }}>8%</p>
                      </div>
                    </div>
                  </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding style={{ width: "100%" }}>
                  <ListItemButton style={{ padding: "4%" }}>
                    <ListItemIcon>
                      <AiOutlineSetting color="#FF4D4F" />
                    </ListItemIcon>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <div style={{ color: "#262626" }}>
                        <p style={{ fontSize: "14px" }}>Order #988784</p>
                        <p style={{ fontSize: "12px", color: "#8c8c8c" }}>
                          Toady 2:00 AM
                        </p>
                      </div>
                      <div style={{ color: "#262626", textAlign: "right" }}>
                        <p style={{ fontSize: "14px" }}>+$682</p>
                        <p style={{ fontSize: "12px", color: "#8c8c8c" }}>
                          16%
                        </p>
                      </div>
                    </div>
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>
        </Card>
        <Card
          className="card"
          sx={{ height: "138px", mt: "6%", padding: "5%" }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <p
                style={{
                  fontSize: "15px",
                  color: "#262626",
                  fontWeight: "600",
                }}
              >
                Help & Support Chat
              </p>
              <p style={{ color: "#8c8c8c", fontSize: "12px" }}>
                Typical replay within 5 min
              </p>
            </div>
            <ButtonGroup
              style={{ display: "flex", gap: "5%", paddingRight: "9%" }}
            >
              <IconButton sx={{ p: 0 }}>
                <Avatar
                  sx={{
                    position: "relative",
                    zIndex: "5",
                    border: "2px solid white",
                  }}
                  alt="Remy Sharp"
                  src={Rasm}
                />
              </IconButton>
              <IconButton sx={{ p: 0 }}>
                <Avatar
                  sx={{
                    position: "absolute",
                    zIndex: "4",
                    border: "2px solid white",
                  }}
                  alt="Remy Sharp"
                  src={Rasm2}
                />
              </IconButton>
              <IconButton sx={{ p: 0 }}>
                <Avatar
                  sx={{
                    position: "relative",
                    zIndex: "3",
                    border: "2px solid white",
                  }}
                  alt="Remy Sharp"
                  src={Rasm3}
                />
              </IconButton>
              <IconButton sx={{ p: 0 }}>
                <Avatar
                  sx={{
                    position: "absolute",
                    zIndex: "2",
                    border: "2px solid white",
                  }}
                  alt="Remy Sharp"
                  src={Rasm4}
                />
              </IconButton>
            </ButtonGroup>
          </div>
          <br />
          <div>
            <IconButton
              style={{
                width: "100%",
                height: "30px",
                background: "#1677FF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "0",
                fontSize: "13px",
                color: "white",
              }}
            >
              Need Help?
            </IconButton>
          </div>
          <br />
        </Card>
      </div>
    </div>
  );
}

export default Chart;
