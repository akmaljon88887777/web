import { Card, IconButton, Snackbar } from "@mui/material";
import { styled } from "@mui/material/styles";
import TerminalIcon from "@mui/icons-material/Terminal";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import "./style.css";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import React, { useState } from "react";

function Color() {
  const code = [
    `<No display Name>
    <h 
    bgcolor="warning.lighter"
    dark
    data={{
    color:'#434343'
    label:'Gold-1'
    }}
    title="warning.lighter"
    />
    <h 
    bgcolor="warning.light"
    dark
    data={{
    color:'#ffd666
    label:'Gold-4'
    }}
    title="warning.light"
    />
    <h 
    bgcolor="warning.light"
    data={{
    color:'#ffd666
    label:'Gold-4'
    }}
    main
    title="warning.main"
    />`,
  ];
  const [value, setValue] = useState(false);
  const [value2, setValue2] = useState(false);
  const [value3, setValue3] = useState(false);
  const [value4, setValue4] = useState(false);
  const [value5, setValue5] = useState(false);
  const [value6, setValue6] = useState(false);

  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(true);
    navigator.clipboard.writeText(code);
  };
  // const textAreaRef = useRef(null);
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);

  const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));

  const leftArrow = ["<"];
  const rightArrow = [">"];

  const closeTag = ["/>"];

  const leftObject = ["{{"];
  const rightObject = ["}}"];

  const pink = {
    color: "rgb(255, 160, 122)",
  };
  const green = {
    color: "#abe338",
  };
  const paddingLeft = {
    paddingLeft: "2%",
  };
  return (
    <div
      className="father"
      style={{
        marginTop: "20px",
        marginBottom: "120px",
        margin: "auto",
        display: "grid",
        zIndex: "999",
        justifyContent: "center",
      }}
    >
      <div style={{ marginLeft: "-2%" }}>
        <div style={{ fontSize: "14px", display: "flex", gap: "1%" }}>
          <p>Home</p>
          <p>/</p>
          <p style={{ fontWeight: "bold" }}>Color</p>
        </div>
        <h4 style={{ marginTop: "1%" }}>Color</h4>
      </div>
      <br />
      <div
        style={{
          display: "grid",
          gap: "2%",
          gridTemplateColumns: "auto auto auto",
          justifyContent: "center",
        }}
        className="grid"
      >
        <Card sx={{ width: 400, height: "1020px", padding: "3%" }}>
          <p>Primary Color</p>
          <br />
          <div>
            <div
              style={{
                width: "100%",
                height: "89px",
                background: "#e6f4ff",
                display: "flex",
                justifyContent: "space-between",
                paddingInline: "15%",
                alignItems: "center",
              }}
            >
              <div>
                <p>Blue-1</p>
                <p>#bae7ff</p>
              </div>
              <div>
                <p>succes.lighter</p>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "89px",
                background: "#bae7ff",
                display: "flex",
                justifyContent: "space-between",
                paddingInline: "15%",
                alignItems: "center",
              }}
            >
              <div>
                <p>Blue-1</p>
                <p>#91d5ff</p>
              </div>
              <div>
                <p>succes.lighter</p>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "89px",
                background: "#91d5ff",
                display: "flex",
                justifyContent: "space-between",
                paddingInline: "15%",
                alignItems: "center",
              }}
            >
              <div>
                <p>Blue-1</p>
                <p>#91d5ff</p>
              </div>
              <div>
                <p>succes.lighter</p>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "89px",
                background: "#69c0ff",
                display: "flex",
                justifyContent: "space-between",
                paddingInline: "15%",
                alignItems: "center",
              }}
            >
              <div>
                <p>Blue-1</p>
                <p>#69c0ff</p>
              </div>
              <div>
                <p>succes.lighter</p>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "89px",
                background: "#40a9ff",
                display: "flex",
                justifyContent: "space-between",
                paddingInline: "15%",
                alignItems: "center",
              }}
            >
              <div>
                <p>Blue-1</p>
                <p>#40a9ff</p>
              </div>
              <div>
                <p>succes.lighter</p>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "89px",
                background: "#1890ff",
                display: "flex",
                justifyContent: "space-between",
                paddingInline: "15%",
                alignItems: "center",
              }}
            >
              <div>
                <p>Blue-1</p>
                <p>#1890ff</p>
              </div>
              <div>
                <p>succes.lighter</p>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "89px",
                background: "#096dd9",
                display: "flex",
                justifyContent: "space-between",
                paddingInline: "15%",
                alignItems: "center",
              }}
            >
              <div>
                <p>Blue-1</p>
                <p>#096dd9</p>
              </div>
              <div>
                <p>succes.lighter</p>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "89px",
                background: "#0050b3",
                display: "flex",
                justifyContent: "space-between",
                paddingInline: "15%",
                alignItems: "center",
              }}
            >
              <div>
                <p>Blue-1</p>
                <p>#0050b3</p>
              </div>
              <div>
                <p>succes.lighter</p>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "89px",
                background: "#003a8c",
                display: "flex",
                justifyContent: "space-between",
                paddingInline: "15%",
                alignItems: "center",
              }}
            >
              <div>
                <p>Blue-1</p>
                <p>#003a8c</p>
              </div>
              <div>
                <p>succes.lighter</p>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "89px",
                background: "#002766",
                display: "flex",
                justifyContent: "space-between",
                paddingInline: "15%",
                alignItems: "center",
              }}
            >
              <div>
                <p>Blue-1</p>
                <p>#002766</p>
              </div>
              <div>
                <p>succes.lighter</p>
              </div>
            </div>
          </div>
          <div
            style={{ display: "flex", justifyContent: "end", paddingTop: "2%" }}
          >
            <div>
              <div placement="top" sx={{ zIndex: "999", position: "absolute" }}>
                <IconButton
                  aria-label="fingerprint1"
                  color="default"
                  sx={{ width: "35px", height: "35px" }}
                >
                  <BootstrapTooltip title="Copy the source" placement="top">
                    <ContentCopyIcon color="action" fontSize="small" />
                  </BootstrapTooltip>
                </IconButton>

                <IconButton
                  aria-label="fingerprint1"
                  onClick={() => setValue(!value)}
                  color="default"
                  sx={{ width: "35px", height: "35px" }}
                >
                  <BootstrapTooltip title="Copy the source" placement="top">
                    <TerminalIcon color="action" fontSize="small" />
                  </BootstrapTooltip>
                </IconButton>
              </div>
            </div>
            {value && (
              <pre
                style={{
                  background: "#2B2B2B",
                  width: "26.3%",
                  height: "915px",
                  zIndex: "999",
                  right: "853px",
                  marginTop: "4%",
                  position: "absolute",
                }}
              >
                <code style={{ color: "white" }}>
                  <div
                    id="copy"
                    style={{
                      padding: "5%",
                      paddingTop: "3%",
                      paddingBottom: "5%",
                      lineHeight: "1.58",
                    }}
                  >
                    <div style={{ fontSize: "12px" }}>
                      <span
                        style={{
                          textWrap: "nowrap",
                          display: "inline-block",
                          userSelect: "none",
                        }}
                      >
                        1.
                      </span>
                      <span style={{ paddingLeft: "3%" }}>
                        <span style={pink}>{leftArrow}</span>
                        <span style={pink}>No display Name</span>
                        <span style={pink}>{rightArrow}</span>
                      </span>
                    </div>

                    <div style={{ fontSize: "12px" }}>
                      <span
                        style={{
                          textWrap: "nowrap",
                          display: "inline-block",
                          userSelect: "none",
                        }}
                      >
                        2.
                      </span>
                      <span style={{ paddingLeft: "2%" }}>
                        <span style={{ paddingLeft: "5%" }}>
                          <span style={pink}>{leftArrow}</span>
                          <span style={pink}>
                            h <br />
                          </span>
                        </span>
                        <span>
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            3.
                          </span>
                          <span style={{ paddingLeft: "11%" }}>
                            <span style={({ paddingLeft: "2%" }, pink)}>
                              bgcolor=
                            </span>
                            <span style={green}>"warning.lighter"</span>
                            <br />
                          </span>
                        </span>
                        <span>
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            4.
                          </span>
                          <span style={{ paddingLeft: "11%" }}>
                            <span style={pink}>dark</span>
                          </span>
                          <br />
                        </span>
                        <span>
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            5.
                          </span>
                          <span style={{ paddingLeft: "11%" }}>
                            <span style={pink}>data=</span>
                            <span style={pink}>{leftObject}</span>
                          </span>
                          <br />
                        </span>
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          6
                        </span>
                        <span style={{ paddingLeft: "16%" }}>
                          <span style={pink}>color:</span>
                          <span style={{ paddingLeft: "2%" }}>
                            <span style={green}>'#434343'</span>
                            <br />
                          </span>
                        </span>
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          7.
                        </span>
                        <span style={{ paddingLeft: "16%" }}>
                          <span style={pink}>label:</span>
                          <span style={{ paddingLeft: "2%" }}>
                            <span style={green}>'Gold-1'</span>
                            <br />
                          </span>
                        </span>
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          8.
                        </span>
                        <span style={{ paddingLeft: "11%" }}>
                          <span style={pink}>{rightObject}</span>
                        </span>
                        <br />
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          9.
                        </span>
                        <span style={{ paddingLeft: "11%" }}>
                          <span style={pink}>title=</span>
                          <span style={green}>"warning.lighter"</span>
                        </span>
                        <br />
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          10.
                        </span>
                        <span style={{ paddingLeft: "5%" }}>
                          <span style={pink}>{closeTag}</span>
                        </span>
                      </span>
                      <br />
                      <span>
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          11.
                        </span>
                        <span style={{ paddingLeft: "2%" }}>
                          <span style={{ paddingLeft: "5%" }}>
                            <span style={pink}>{leftArrow}</span>
                            <span style={pink}>
                              h <br />
                            </span>
                          </span>
                          <span>
                            <span
                              style={{
                                textWrap: "nowrap",
                                display: "inline-block",
                                userSelect: "none",
                              }}
                            >
                              12.
                            </span>
                            <span style={{ paddingLeft: "11%" }}>
                              <span style={({ paddingLeft: "2%" }, pink)}>
                                bgcolor=
                              </span>
                              <span style={green}>"warning.light"</span>
                              <br />
                            </span>
                          </span>
                          <span>
                            <span
                              style={{
                                textWrap: "nowrap",
                                display: "inline-block",
                                userSelect: "none",
                              }}
                            >
                              13.
                            </span>
                            <span style={{ paddingLeft: "11%" }}>
                              <span style={pink}>dark</span>
                            </span>
                            <br />
                          </span>
                          <span>
                            <span
                              style={{
                                textWrap: "nowrap",
                                display: "inline-block",
                                userSelect: "none",
                              }}
                            >
                              14.
                            </span>
                            <span style={{ paddingLeft: "11%" }}>
                              <span style={pink}>data=</span>
                              <span style={pink}>{leftObject}</span>
                            </span>
                            <br />
                          </span>
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            15
                          </span>
                          <span style={{ paddingLeft: "16%" }}>
                            <span style={pink}>color:</span>
                            <span style={{ paddingLeft: "2%" }}>
                              <span style={green}>'#ffd666</span>
                              <br />
                            </span>
                          </span>
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            16.
                          </span>
                          <span style={{ paddingLeft: "16%" }}>
                            <span style={pink}>label:</span>
                            <span style={{ paddingLeft: "2%" }}>
                              <span style={green}>'Gold-4'</span>
                              <br />
                            </span>
                          </span>
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            17.
                          </span>
                          <span style={{ paddingLeft: "11%" }}>
                            <span style={pink}>{rightObject}</span>
                          </span>
                          <br />
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            18.
                          </span>
                          <span style={{ paddingLeft: "11%" }}>
                            <span style={pink}>title=</span>
                            <span style={green}>"warning.light"</span>
                          </span>
                          <br />
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            19.
                          </span>
                          <span style={{ paddingLeft: "5%" }}>
                            <span style={pink}>{closeTag}</span>
                            <br />
                          </span>
                        </span>
                      </span>

                      <span>
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          20.
                        </span>
                        <span style={{ paddingLeft: "2%" }}>
                          <span style={{ paddingLeft: "5%" }}>
                            <span style={pink}>{leftArrow}</span>
                            <span style={pink}>
                              h <br />
                            </span>
                          </span>
                          <span>
                            <span
                              style={{
                                textWrap: "nowrap",
                                display: "inline-block",
                                userSelect: "none",
                              }}
                            >
                              21.
                            </span>
                            <span style={{ paddingLeft: "11%" }}>
                              <span style={({ paddingLeft: "2%" }, pink)}>
                                bgcolor=
                              </span>
                              <span style={green}>"warning.light"</span>
                              <br />
                            </span>
                          </span>
                          <span>
                            <span
                              style={{
                                textWrap: "nowrap",
                                display: "inline-block",
                                userSelect: "none",
                              }}
                            >
                              22.
                            </span>
                            <span style={{ paddingLeft: "11%" }}>
                              <span style={pink}>data=</span>
                              <span style={pink}>{leftObject}</span>
                            </span>
                          </span>
                          <br />
                          <span>
                            <span
                              style={{
                                textWrap: "nowrap",
                                display: "inline-block",
                                userSelect: "none",
                              }}
                            >
                              23.
                            </span>
                            <span style={{ paddingLeft: "16%" }}>
                              <span style={pink}>color:</span>
                              <span style={{ paddingLeft: "2%" }}>
                                <span style={green}>'#ffd666</span>
                                <br />
                              </span>
                            </span>
                          </span>
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            24
                          </span>
                          <span style={{ paddingLeft: "16%" }}>
                            <span style={pink}>label:</span>
                            <span style={{ paddingLeft: "2%" }}>
                              <span style={green}>'Gold-4'</span>
                              <br />
                            </span>
                          </span>

                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            25.
                          </span>

                          <span style={{ paddingLeft: "16%" }}>
                            <span style={pink}>{rightObject}</span>
                          </span>
                          <br />
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            26.
                          </span>
                          <span style={{ paddingLeft: "11%" }}>
                            <span style={pink}>
                              <span>main</span>
                            </span>
                          </span>
                          <br />
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            27.
                          </span>
                          <span style={{ paddingLeft: "11%" }}>
                            <span style={pink}>title=</span>
                            <span style={green}>"warning.main"</span>
                          </span>
                          <br />
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            28.
                          </span>
                          <span style={{ paddingLeft: "6%" }}>
                            <span style={pink}>{closeTag}</span>
                            <br />
                          </span>
                        </span>
                      </span>
                      <span>
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          29.
                        </span>
                        <span style={{ paddingLeft: "2%" }}>
                          <span style={{ paddingLeft: "5%" }}>
                            <span style={pink}>{leftArrow}</span>
                            <span style={pink}>
                              h <br />
                            </span>
                          </span>
                          <span>
                            <span
                              style={{
                                textWrap: "nowrap",
                                display: "inline-block",
                                userSelect: "none",
                              }}
                            >
                              30.
                            </span>
                            <span style={{ paddingLeft: "11%" }}>
                              <span style={({ paddingLeft: "2%" }, pink)}>
                                bgcolor=
                              </span>
                              <span style={green}>"warning.light"</span>
                              <br />
                            </span>
                          </span>
                          <span>
                            <span
                              style={{
                                textWrap: "nowrap",
                                display: "inline-block",
                                userSelect: "none",
                              }}
                            >
                              31.
                            </span>
                            <span style={{ paddingLeft: "11%" }}>
                              <span style={pink}>data=</span>
                              <span style={pink}>{leftObject}</span>
                            </span>
                          </span>
                          <br />
                          <span>
                            <span
                              style={{
                                textWrap: "nowrap",
                                display: "inline-block",
                                userSelect: "none",
                              }}
                            >
                              32.
                            </span>
                            <span style={{ paddingLeft: "16%" }}>
                              <span style={pink}>color:</span>
                              <span style={{ paddingLeft: "2%" }}>
                                <span style={green}>'#ffd666</span>
                                <br />
                              </span>
                            </span>
                          </span>
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            33
                          </span>
                          <span style={{ paddingLeft: "16%" }}>
                            <span style={pink}>label:</span>
                            <span style={{ paddingLeft: "2%" }}>
                              <span style={green}>'Gold-4'</span>
                              <br />
                            </span>
                          </span>

                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            34.
                          </span>

                          <span style={{ paddingLeft: "16%" }}>
                            <span style={pink}>{rightObject}</span>
                          </span>
                          <br />
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            35.
                          </span>
                          <span style={{ paddingLeft: "11%" }}>
                            <span style={pink}>
                              <span>main</span>
                            </span>
                          </span>
                          <br />
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            36
                          </span>
                          <span style={{ paddingLeft: "11%" }}>
                            <span style={pink}>title=</span>
                            <span style={green}>"warning.main"</span>
                          </span>
                          <br />
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            37.
                          </span>
                          <span style={{ paddingLeft: "6%" }}>
                            <span style={pink}>{closeTag}</span>
                            <br />
                          </span>
                        </span>
                      </span>
                      <span>38.</span>
                      <span style={{ paddingLeft: "2%" }}>
                        <span style={{ paddingLeft: "5%" }}>
                          <span style={pink}>{leftArrow}</span>
                          <span style={pink}>
                            h <br />
                          </span>
                        </span>
                        <span>
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            39.
                          </span>
                          <span style={{ paddingLeft: "11%" }}>
                            <span style={({ paddingLeft: "2%" }, pink)}>
                              bgcolor=
                            </span>
                            <span style={green}>"warning.light"</span>
                            <br />
                          </span>
                        </span>
                        <span>
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            40.
                          </span>
                          <span style={{ paddingLeft: "11%" }}>
                            <span style={pink}>data=</span>
                            <span style={pink}>{leftObject}</span>
                          </span>
                        </span>
                        <br />
                        <span>
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            41.
                          </span>
                          <span style={{ paddingLeft: "16%" }}>
                            <span style={pink}>color:</span>
                            <span style={{ paddingLeft: "2%" }}>
                              <span style={green}>'#ffd666</span>
                              <br />
                            </span>
                          </span>
                        </span>
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          42
                        </span>
                        <span style={{ paddingLeft: "16%" }}>
                          <span style={pink}>label:</span>
                          <span style={{ paddingLeft: "2%" }}>
                            <span style={green}>'Gold-4'</span>
                            <br />
                          </span>
                        </span>

                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          43.
                        </span>

                        <span style={{ paddingLeft: "16%" }}>
                          <span style={pink}>{rightObject}</span>
                        </span>
                        <br />
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          44.
                        </span>
                        <span style={{ paddingLeft: "11%" }}>
                          <span style={pink}>
                            <span>main</span>
                          </span>
                        </span>
                        <br />
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          45.
                        </span>
                        <span style={{ paddingLeft: "11%" }}>
                          <span style={pink}>title=</span>
                          <span style={green}>"warning.main"</span>
                        </span>
                        <br />
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          46.
                        </span>
                        <span style={{ paddingLeft: "6%" }}>
                          <span style={pink}>{closeTag}</span>
                          <br />
                        </span>
                        <span>47.</span>
                        <span style={{ paddingLeft: "2%" }}>
                          <span>{leftArrow}</span>
                          <span>No display Name</span>
                          <span>{rightArrow}</span>
                        </span>
                      </span>
                    </div>
                  </div>
                </code>
              </pre>
            )}
          </div>
        </Card>
        <Card sx={{ width: 400, height: "1020px", padding: "3%" }}>
          <p>Primary Color</p>
          <br />
          <div>
            <div
              style={{
                width: "100%",
                height: "89px",
                background: "#fafafa",
                display: "flex",
                justifyContent: "space-between",
                paddingInline: "15%",
                alignItems: "center",
              }}
            >
              <div>
                <p>Blue-1</p>
                <p>#fafafa</p>
              </div>
              <div>
                <p>succes.lighter</p>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "89px",
                background: "#f5f5f5",
                display: "flex",
                justifyContent: "space-between",
                paddingInline: "15%",
                alignItems: "center",
              }}
            >
              <div>
                <p>Blue-1</p>
                <p>#f5f5f5</p>
              </div>
              <div>
                <p>succes.lighter</p>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "89px",
                background: "#f0f0f0",
                display: "flex",
                justifyContent: "space-between",
                paddingInline: "15%",
                alignItems: "center",
              }}
            >
              <div>
                <p>Blue-1</p>
                <p>#f0f0f0</p>
              </div>
              <div>
                <p>succes.lighter</p>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "89px",
                background: "#d9d9d9",
                display: "flex",
                justifyContent: "space-between",
                paddingInline: "15%",
                alignItems: "center",
              }}
            >
              <div>
                <p>Blue-1</p>
                <p>#d9d9d9</p>
              </div>
              <div>
                <p>succes.lighter</p>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "89px",
                background: "#bfbfbf",
                display: "flex",
                justifyContent: "space-between",
                paddingInline: "15%",
                alignItems: "center",
              }}
            >
              <div>
                <p>Blue-1</p>
                <p>#bfbfbf</p>
              </div>
              <div>
                <p>succes.lighter</p>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "89px",
                background: "#8c8c8c",
                display: "flex",
                justifyContent: "space-between",
                paddingInline: "15%",
                alignItems: "center",
              }}
            >
              <div>
                <p>Blue-1</p>
                <p>#8c8c8c</p>
              </div>
              <div>
                <p>succes.lighter</p>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "89px",
                background: "#595959",
                display: "flex",
                justifyContent: "space-between",
                paddingInline: "15%",
                alignItems: "center",
              }}
            >
              <div>
                <p>Blue-1</p>
                <p>#595959</p>
              </div>
              <div>
                <p>succes.lighter</p>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "89px",
                background: "#262626",
                display: "flex",
                justifyContent: "space-between",
                paddingInline: "15%",
                alignItems: "center",
              }}
            >
              <div>
                <p>Blue-1</p>
                <p>#262626</p>
              </div>
              <div>
                <p>succes.lighter</p>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "89px",
                background: "#141414",
                display: "flex",
                justifyContent: "space-between",
                paddingInline: "15%",
                alignItems: "center",
              }}
            >
              <div>
                <p>Blue-1</p>
                <p>#141414</p>
              </div>
              <div>
                <p>succes.lighter</p>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "89px",
                background: "#000",
                display: "flex",
                justifyContent: "space-between",
                paddingInline: "15%",
                alignItems: "center",
              }}
            >
              <div>
                <p>Blue-1</p>
                <p>#000</p>
              </div>
              <div>
                <p>succes.lighter</p>
              </div>
            </div>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                paddingTop: "2%",
              }}
            >
              <div placement="top" sx={{ zIndex: "999", position: "absolute" }}>
                <IconButton
                  aria-label="fingerprint1"
                  color="default"
                  sx={{ width: "35px", height: "35px" }}
                >
                  <BootstrapTooltip title="Copy the source" placement="top">
                    <ContentCopyIcon color="action" fontSize="small" />
                  </BootstrapTooltip>
                </IconButton>

                <IconButton
                  aria-label="fingerprint1"
                  onClick={() => setValue2(!value2)}
                  color="default"
                  sx={{ width: "35px", height: "35px" }}
                >
                  <BootstrapTooltip title="Copy the source" placement="top">
                    <TerminalIcon color="action" fontSize="small" />
                  </BootstrapTooltip>
                </IconButton>
              </div>
            </div>
            {value2 && (
              <pre
                style={{
                  background: "#2B2B2B",
                  width: "26.3%",
                  height: "915px",
                  zIndex: "999",
                  right: "430px",
                  marginTop: "1.5%",
                  position: "absolute",
                }}
              >
                <code style={{ color: "white" }}>
                  <div
                    id="copy"
                    style={{
                      padding: "5%",
                      paddingTop: "3%",
                      paddingBottom: "5%",
                      lineHeight: "1.58",
                    }}
                  >
                    <div style={{ fontSize: "12px" }}>
                      <span
                        style={{
                          textWrap: "nowrap",
                          display: "inline-block",
                          userSelect: "none",
                        }}
                      >
                        1.
                      </span>
                      <span style={{ paddingLeft: "3%" }}>
                        <span style={pink}>{leftArrow}</span>
                        <span style={pink}>No display Name</span>
                        <span style={pink}>{rightArrow}</span>
                      </span>
                    </div>

                    <div style={{ fontSize: "12px" }}>
                      <span
                        style={{
                          textWrap: "nowrap",
                          display: "inline-block",
                          userSelect: "none",
                        }}
                      >
                        2.
                      </span>
                      <span style={{ paddingLeft: "2%" }}>
                        <span style={{ paddingLeft: "5%" }}>
                          <span style={pink}>{leftArrow}</span>
                          <span style={pink}>
                            h <br />
                          </span>
                        </span>
                        <span>
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            3.
                          </span>
                          <span style={{ paddingLeft: "11%" }}>
                            <span style={({ paddingLeft: "2%" }, pink)}>
                              bgcolor=
                            </span>
                            <span style={green}>"warning.lighter"</span>
                            <br />
                          </span>
                        </span>
                        <span>
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            4.
                          </span>
                          <span style={{ paddingLeft: "11%" }}>
                            <span style={pink}>dark</span>
                          </span>
                          <br />
                        </span>
                        <span>
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            5.
                          </span>
                          <span style={{ paddingLeft: "11%" }}>
                            <span style={pink}>data=</span>
                            <span style={pink}>{leftObject}</span>
                          </span>
                          <br />
                        </span>
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          6
                        </span>
                        <span style={{ paddingLeft: "16%" }}>
                          <span style={pink}>color:</span>
                          <span style={{ paddingLeft: "2%" }}>
                            <span style={green}>'#434343'</span>
                            <br />
                          </span>
                        </span>
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          7.
                        </span>
                        <span style={{ paddingLeft: "16%" }}>
                          <span style={pink}>label:</span>
                          <span style={{ paddingLeft: "2%" }}>
                            <span style={green}>'Gold-1'</span>
                            <br />
                          </span>
                        </span>
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          8.
                        </span>
                        <span style={{ paddingLeft: "11%" }}>
                          <span style={pink}>{rightObject}</span>
                        </span>
                        <br />
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          9.
                        </span>
                        <span style={{ paddingLeft: "11%" }}>
                          <span style={pink}>title=</span>
                          <span style={green}>"warning.lighter"</span>
                        </span>
                        <br />
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          10.
                        </span>
                        <span style={{ paddingLeft: "5%" }}>
                          <span style={pink}>{closeTag}</span>
                        </span>
                      </span>
                      <br />
                      <span>
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          11.
                        </span>
                        <span style={{ paddingLeft: "2%" }}>
                          <span style={{ paddingLeft: "5%" }}>
                            <span style={pink}>{leftArrow}</span>
                            <span style={pink}>
                              h <br />
                            </span>
                          </span>
                          <span>
                            <span
                              style={{
                                textWrap: "nowrap",
                                display: "inline-block",
                                userSelect: "none",
                              }}
                            >
                              12.
                            </span>
                            <span style={{ paddingLeft: "11%" }}>
                              <span style={({ paddingLeft: "2%" }, pink)}>
                                bgcolor=
                              </span>
                              <span style={green}>"warning.light"</span>
                              <br />
                            </span>
                          </span>
                          <span>
                            <span
                              style={{
                                textWrap: "nowrap",
                                display: "inline-block",
                                userSelect: "none",
                              }}
                            >
                              13.
                            </span>
                            <span style={{ paddingLeft: "11%" }}>
                              <span style={pink}>dark</span>
                            </span>
                            <br />
                          </span>
                          <span>
                            <span
                              style={{
                                textWrap: "nowrap",
                                display: "inline-block",
                                userSelect: "none",
                              }}
                            >
                              14.
                            </span>
                            <span style={{ paddingLeft: "11%" }}>
                              <span style={pink}>data=</span>
                              <span style={pink}>{leftObject}</span>
                            </span>
                            <br />
                          </span>
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            15
                          </span>
                          <span style={{ paddingLeft: "16%" }}>
                            <span style={pink}>color:</span>
                            <span style={{ paddingLeft: "2%" }}>
                              <span style={green}>'#ffd666</span>
                              <br />
                            </span>
                          </span>
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            16.
                          </span>
                          <span style={{ paddingLeft: "16%" }}>
                            <span style={pink}>label:</span>
                            <span style={{ paddingLeft: "2%" }}>
                              <span style={green}>'Gold-4'</span>
                              <br />
                            </span>
                          </span>
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            17.
                          </span>
                          <span style={{ paddingLeft: "11%" }}>
                            <span style={pink}>{rightObject}</span>
                          </span>
                          <br />
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            18.
                          </span>
                          <span style={{ paddingLeft: "11%" }}>
                            <span style={pink}>title=</span>
                            <span style={green}>"warning.light"</span>
                          </span>
                          <br />
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            19.
                          </span>
                          <span style={{ paddingLeft: "5%" }}>
                            <span style={pink}>{closeTag}</span>
                            <br />
                          </span>
                        </span>
                      </span>

                      <span>
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          20.
                        </span>
                        <span style={{ paddingLeft: "2%" }}>
                          <span style={{ paddingLeft: "5%" }}>
                            <span style={pink}>{leftArrow}</span>
                            <span style={pink}>
                              h <br />
                            </span>
                          </span>
                          <span>
                            <span
                              style={{
                                textWrap: "nowrap",
                                display: "inline-block",
                                userSelect: "none",
                              }}
                            >
                              21.
                            </span>
                            <span style={{ paddingLeft: "11%" }}>
                              <span style={({ paddingLeft: "2%" }, pink)}>
                                bgcolor=
                              </span>
                              <span style={green}>"warning.light"</span>
                              <br />
                            </span>
                          </span>
                          <span>
                            <span
                              style={{
                                textWrap: "nowrap",
                                display: "inline-block",
                                userSelect: "none",
                              }}
                            >
                              22.
                            </span>
                            <span style={{ paddingLeft: "11%" }}>
                              <span style={pink}>data=</span>
                              <span style={pink}>{leftObject}</span>
                            </span>
                          </span>
                          <br />
                          <span>
                            <span
                              style={{
                                textWrap: "nowrap",
                                display: "inline-block",
                                userSelect: "none",
                              }}
                            >
                              23.
                            </span>
                            <span style={{ paddingLeft: "16%" }}>
                              <span style={pink}>color:</span>
                              <span style={{ paddingLeft: "2%" }}>
                                <span style={green}>'#ffd666</span>
                                <br />
                              </span>
                            </span>
                          </span>
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            24
                          </span>
                          <span style={{ paddingLeft: "16%" }}>
                            <span style={pink}>label:</span>
                            <span style={{ paddingLeft: "2%" }}>
                              <span style={green}>'Gold-4'</span>
                              <br />
                            </span>
                          </span>

                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            25.
                          </span>

                          <span style={{ paddingLeft: "16%" }}>
                            <span style={pink}>{rightObject}</span>
                          </span>
                          <br />
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            26.
                          </span>
                          <span style={{ paddingLeft: "11%" }}>
                            <span style={pink}>
                              <span>main</span>
                            </span>
                          </span>
                          <br />
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            27.
                          </span>
                          <span style={{ paddingLeft: "11%" }}>
                            <span style={pink}>title=</span>
                            <span style={green}>"warning.main"</span>
                          </span>
                          <br />
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            28.
                          </span>
                          <span style={{ paddingLeft: "6%" }}>
                            <span style={pink}>{closeTag}</span>
                            <br />
                          </span>
                        </span>
                      </span>
                      <span>
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          29.
                        </span>
                        <span style={{ paddingLeft: "2%" }}>
                          <span style={{ paddingLeft: "5%" }}>
                            <span style={pink}>{leftArrow}</span>
                            <span style={pink}>
                              h <br />
                            </span>
                          </span>
                          <span>
                            <span
                              style={{
                                textWrap: "nowrap",
                                display: "inline-block",
                                userSelect: "none",
                              }}
                            >
                              30.
                            </span>
                            <span style={{ paddingLeft: "11%" }}>
                              <span style={({ paddingLeft: "2%" }, pink)}>
                                bgcolor=
                              </span>
                              <span style={green}>"warning.light"</span>
                              <br />
                            </span>
                          </span>
                          <span>
                            <span
                              style={{
                                textWrap: "nowrap",
                                display: "inline-block",
                                userSelect: "none",
                              }}
                            >
                              31.
                            </span>
                            <span style={{ paddingLeft: "11%" }}>
                              <span style={pink}>data=</span>
                              <span style={pink}>{leftObject}</span>
                            </span>
                          </span>
                          <br />
                          <span>
                            <span
                              style={{
                                textWrap: "nowrap",
                                display: "inline-block",
                                userSelect: "none",
                              }}
                            >
                              32.
                            </span>
                            <span style={{ paddingLeft: "16%" }}>
                              <span style={pink}>color:</span>
                              <span style={{ paddingLeft: "2%" }}>
                                <span style={green}>'#ffd666</span>
                                <br />
                              </span>
                            </span>
                          </span>
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            33
                          </span>
                          <span style={{ paddingLeft: "16%" }}>
                            <span style={pink}>label:</span>
                            <span style={{ paddingLeft: "2%" }}>
                              <span style={green}>'Gold-4'</span>
                              <br />
                            </span>
                          </span>

                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            34.
                          </span>

                          <span style={{ paddingLeft: "16%" }}>
                            <span style={pink}>{rightObject}</span>
                          </span>
                          <br />
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            35.
                          </span>
                          <span style={{ paddingLeft: "11%" }}>
                            <span style={pink}>
                              <span>main</span>
                            </span>
                          </span>
                          <br />
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            36
                          </span>
                          <span style={{ paddingLeft: "11%" }}>
                            <span style={pink}>title=</span>
                            <span style={green}>"warning.main"</span>
                          </span>
                          <br />
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            37.
                          </span>
                          <span style={{ paddingLeft: "6%" }}>
                            <span style={pink}>{closeTag}</span>
                            <br />
                          </span>
                        </span>
                      </span>
                      <span>38.</span>
                      <span style={{ paddingLeft: "2%" }}>
                        <span style={{ paddingLeft: "5%" }}>
                          <span style={pink}>{leftArrow}</span>
                          <span style={pink}>
                            h <br />
                          </span>
                        </span>
                        <span>
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            39.
                          </span>
                          <span style={{ paddingLeft: "11%" }}>
                            <span style={({ paddingLeft: "2%" }, pink)}>
                              bgcolor=
                            </span>
                            <span style={green}>"warning.light"</span>
                            <br />
                          </span>
                        </span>
                        <span>
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            40.
                          </span>
                          <span style={{ paddingLeft: "11%" }}>
                            <span style={pink}>data=</span>
                            <span style={pink}>{leftObject}</span>
                          </span>
                        </span>
                        <br />
                        <span>
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            41.
                          </span>
                          <span style={{ paddingLeft: "16%" }}>
                            <span style={pink}>color:</span>
                            <span style={{ paddingLeft: "2%" }}>
                              <span style={green}>'#ffd666</span>
                              <br />
                            </span>
                          </span>
                        </span>
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          42
                        </span>
                        <span style={{ paddingLeft: "16%" }}>
                          <span style={pink}>label:</span>
                          <span style={{ paddingLeft: "2%" }}>
                            <span style={green}>'Gold-4'</span>
                            <br />
                          </span>
                        </span>

                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          43.
                        </span>

                        <span style={{ paddingLeft: "16%" }}>
                          <span style={pink}>{rightObject}</span>
                        </span>
                        <br />
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          44.
                        </span>
                        <span style={{ paddingLeft: "11%" }}>
                          <span style={pink}>
                            <span>main</span>
                          </span>
                        </span>
                        <br />
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          45.
                        </span>
                        <span style={{ paddingLeft: "11%" }}>
                          <span style={pink}>title=</span>
                          <span style={green}>"warning.main"</span>
                        </span>
                        <br />
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          46.
                        </span>
                        <span style={{ paddingLeft: "6%" }}>
                          <span style={pink}>{closeTag}</span>
                          <br />
                        </span>
                        <span>47.</span>
                        <span style={{ paddingLeft: "2%" }}>
                          <span>{leftArrow}</span>
                          <span>No display Name</span>
                          <span>{rightArrow}</span>
                        </span>
                      </span>
                    </div>
                  </div>
                </code>
              </pre>
            )}
          </div>
        </Card>
        <Card sx={{ width: 400, height: "418px", padding: "3%" }}>
          <p>Primary Color</p>
          <br />
          <div>
            <div
              style={{
                width: "100%",
                height: "89px",
                background: "#e6f4ff",
                display: "flex",
                justifyContent: "space-between",
                paddingInline: "15%",
                alignItems: "center",
              }}
            >
              <div>
                <p>Blue-1</p>
                <p>#e6f7ff</p>
              </div>
              <div>
                <p>succes.lighter</p>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "89px",
                background: "#e6f4ff",
                display: "flex",
                justifyContent: "space-between",
                paddingInline: "15%",
                alignItems: "center",
              }}
            >
              <div>
                <p>Blue-1</p>
                <p>#e6f7ff</p>
              </div>
              <div>
                <p>succes.lighter</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                paddingTop: "2%",
              }}
            >
              <div placement="top" sx={{ zIndex: "999", position: "absolute" }}>
                <IconButton
                  aria-label="fingerprint1"
                  color="default"
                  sx={{ width: "35px", height: "35px" }}
                >
                  <BootstrapTooltip title="Copy the source" placement="top">
                    <ContentCopyIcon color="action" fontSize="small" />
                  </BootstrapTooltip>
                </IconButton>

                <IconButton
                  aria-label="fingerprint1"
                  onClick={() => setValue3(!value3)} ////////////////////////
                  color="default"
                  sx={{ width: "35px", height: "35px" }}
                >
                  <BootstrapTooltip title="Copy the source" placement="top">
                    <TerminalIcon color="action" fontSize="small" />
                  </BootstrapTooltip>
                </IconButton>
              </div>
            </div>
            {value3 && (
              <pre
                style={{
                  background: "#2B2B2B",
                  width: "26.3%",
                  height: "915px",
                  zIndex: "999",
                  right: "0.3%",
                  marginTop: "9%",
                  position: "absolute",
                }}
              >
                <code style={{ color: "white" }}>
                  <div
                    id="copy"
                    style={{
                      padding: "5%",
                      paddingTop: "3%",
                      paddingBottom: "5%",
                      lineHeight: "1.58",
                    }}
                  >
                    <div style={{ fontSize: "12px" }}>
                      <span
                        style={{
                          textWrap: "nowrap",
                          display: "inline-block",
                          userSelect: "none",
                        }}
                      >
                        1.
                      </span>
                      <span style={{ paddingLeft: "3%" }}>
                        <span style={pink}>{leftArrow}</span>
                        <span style={pink}>No display Name</span>
                        <span style={pink}>{rightArrow}</span>
                      </span>
                    </div>

                    <div style={{ fontSize: "12px" }}>
                      <span
                        style={{
                          textWrap: "nowrap",
                          display: "inline-block",
                          userSelect: "none",
                        }}
                      >
                        2.
                      </span>
                      <span style={{ paddingLeft: "2%" }}>
                        <span style={{ paddingLeft: "5%" }}>
                          <span style={pink}>{leftArrow}</span>
                          <span style={pink}>
                            h <br />
                          </span>
                        </span>
                        <span>
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            3.
                          </span>
                          <span style={{ paddingLeft: "11%" }}>
                            <span style={({ paddingLeft: "2%" }, pink)}>
                              bgcolor=
                            </span>
                            <span style={green}>"warning.lighter"</span>
                            <br />
                          </span>
                        </span>
                        <span>
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            4.
                          </span>
                          <span style={{ paddingLeft: "11%" }}>
                            <span style={pink}>dark</span>
                          </span>
                          <br />
                        </span>
                        <span>
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            5.
                          </span>
                          <span style={{ paddingLeft: "11%" }}>
                            <span style={pink}>data=</span>
                            <span style={pink}>{leftObject}</span>
                          </span>
                          <br />
                        </span>
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          6
                        </span>
                        <span style={{ paddingLeft: "16%" }}>
                          <span style={pink}>color:</span>
                          <span style={{ paddingLeft: "2%" }}>
                            <span style={green}>'#434343'</span>
                            <br />
                          </span>
                        </span>
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          7.
                        </span>
                        <span style={{ paddingLeft: "16%" }}>
                          <span style={pink}>label:</span>
                          <span style={{ paddingLeft: "2%" }}>
                            <span style={green}>'Gold-1'</span>
                            <br />
                          </span>
                        </span>
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          8.
                        </span>
                        <span style={{ paddingLeft: "11%" }}>
                          <span style={pink}>{rightObject}</span>
                        </span>
                        <br />
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          9.
                        </span>
                        <span style={{ paddingLeft: "11%" }}>
                          <span style={pink}>title=</span>
                          <span style={green}>"warning.lighter"</span>
                        </span>
                        <br />
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          10.
                        </span>
                        <span style={{ paddingLeft: "5%" }}>
                          <span style={pink}>{closeTag}</span>
                        </span>
                      </span>
                      <br />
                      <span>
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          11.
                        </span>
                        <span style={{ paddingLeft: "2%" }}>
                          <span style={{ paddingLeft: "5%" }}>
                            <span style={pink}>{leftArrow}</span>
                            <span style={pink}>
                              h <br />
                            </span>
                          </span>
                          <span>
                            <span
                              style={{
                                textWrap: "nowrap",
                                display: "inline-block",
                                userSelect: "none",
                              }}
                            >
                              12.
                            </span>
                            <span style={{ paddingLeft: "11%" }}>
                              <span style={({ paddingLeft: "2%" }, pink)}>
                                bgcolor=
                              </span>
                              <span style={green}>"warning.light"</span>
                              <br />
                            </span>
                          </span>
                          <span>
                            <span
                              style={{
                                textWrap: "nowrap",
                                display: "inline-block",
                                userSelect: "none",
                              }}
                            >
                              13.
                            </span>
                            <span style={{ paddingLeft: "11%" }}>
                              <span style={pink}>dark</span>
                            </span>
                            <br />
                          </span>
                          <span>
                            <span
                              style={{
                                textWrap: "nowrap",
                                display: "inline-block",
                                userSelect: "none",
                              }}
                            >
                              14.
                            </span>
                            <span style={{ paddingLeft: "11%" }}>
                              <span style={pink}>data=</span>
                              <span style={pink}>{leftObject}</span>
                            </span>
                            <br />
                          </span>
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            15
                          </span>
                          <span style={{ paddingLeft: "16%" }}>
                            <span style={pink}>color:</span>
                            <span style={{ paddingLeft: "2%" }}>
                              <span style={green}>'#ffd666</span>
                              <br />
                            </span>
                          </span>
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            16.
                          </span>
                          <span style={{ paddingLeft: "16%" }}>
                            <span style={pink}>label:</span>
                            <span style={{ paddingLeft: "2%" }}>
                              <span style={green}>'Gold-4'</span>
                              <br />
                            </span>
                          </span>
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            17.
                          </span>
                          <span style={{ paddingLeft: "11%" }}>
                            <span style={pink}>{rightObject}</span>
                          </span>
                          <br />
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            18.
                          </span>
                          <span style={{ paddingLeft: "11%" }}>
                            <span style={pink}>title=</span>
                            <span style={green}>"warning.light"</span>
                          </span>
                          <br />
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            19.
                          </span>
                          <span style={{ paddingLeft: "5%" }}>
                            <span style={pink}>{closeTag}</span>
                            <br />
                          </span>
                        </span>
                      </span>

                      <span>
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          20.
                        </span>
                        <span style={{ paddingLeft: "2%" }}>
                          <span style={{ paddingLeft: "5%" }}>
                            <span style={pink}>{leftArrow}</span>
                            <span style={pink}>
                              h <br />
                            </span>
                          </span>
                          <span>
                            <span
                              style={{
                                textWrap: "nowrap",
                                display: "inline-block",
                                userSelect: "none",
                              }}
                            >
                              21.
                            </span>
                            <span style={{ paddingLeft: "11%" }}>
                              <span style={({ paddingLeft: "2%" }, pink)}>
                                bgcolor=
                              </span>
                              <span style={green}>"warning.light"</span>
                              <br />
                            </span>
                          </span>
                          <span>
                            <span
                              style={{
                                textWrap: "nowrap",
                                display: "inline-block",
                                userSelect: "none",
                              }}
                            >
                              22.
                            </span>
                            <span style={{ paddingLeft: "11%" }}>
                              <span style={pink}>data=</span>
                              <span style={pink}>{leftObject}</span>
                            </span>
                          </span>
                          <br />
                          <span>
                            <span
                              style={{
                                textWrap: "nowrap",
                                display: "inline-block",
                                userSelect: "none",
                              }}
                            >
                              23.
                            </span>
                            <span style={{ paddingLeft: "16%" }}>
                              <span style={pink}>color:</span>
                              <span style={{ paddingLeft: "2%" }}>
                                <span style={green}>'#ffd666</span>
                                <br />
                              </span>
                            </span>
                          </span>
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            24
                          </span>
                          <span style={{ paddingLeft: "16%" }}>
                            <span style={pink}>label:</span>
                            <span style={{ paddingLeft: "2%" }}>
                              <span style={green}>'Gold-4'</span>
                              <br />
                            </span>
                          </span>

                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            25.
                          </span>

                          <span style={{ paddingLeft: "16%" }}>
                            <span style={pink}>{rightObject}</span>
                          </span>
                          <br />
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            26.
                          </span>
                          <span style={{ paddingLeft: "11%" }}>
                            <span style={pink}>
                              <span>main</span>
                            </span>
                          </span>
                          <br />
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            27.
                          </span>
                          <span style={{ paddingLeft: "11%" }}>
                            <span style={pink}>title=</span>
                            <span style={green}>"warning.main"</span>
                          </span>
                          <br />
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            28.
                          </span>
                          <span style={{ paddingLeft: "6%" }}>
                            <span style={pink}>{closeTag}</span>
                            <br />
                          </span>
                        </span>
                      </span>
                      <span>
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          29.
                        </span>
                        <span style={{ paddingLeft: "2%" }}>
                          <span style={{ paddingLeft: "5%" }}>
                            <span style={pink}>{leftArrow}</span>
                            <span style={pink}>
                              h <br />
                            </span>
                          </span>
                          <span>
                            <span
                              style={{
                                textWrap: "nowrap",
                                display: "inline-block",
                                userSelect: "none",
                              }}
                            >
                              30.
                            </span>
                            <span style={{ paddingLeft: "11%" }}>
                              <span style={({ paddingLeft: "2%" }, pink)}>
                                bgcolor=
                              </span>
                              <span style={green}>"warning.light"</span>
                              <br />
                            </span>
                          </span>
                          <span>
                            <span
                              style={{
                                textWrap: "nowrap",
                                display: "inline-block",
                                userSelect: "none",
                              }}
                            >
                              31.
                            </span>
                            <span style={{ paddingLeft: "11%" }}>
                              <span style={pink}>data=</span>
                              <span style={pink}>{leftObject}</span>
                            </span>
                          </span>
                          <br />
                          <span>
                            <span
                              style={{
                                textWrap: "nowrap",
                                display: "inline-block",
                                userSelect: "none",
                              }}
                            >
                              32.
                            </span>
                            <span style={{ paddingLeft: "16%" }}>
                              <span style={pink}>color:</span>
                              <span style={{ paddingLeft: "2%" }}>
                                <span style={green}>'#ffd666</span>
                                <br />
                              </span>
                            </span>
                          </span>
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            33
                          </span>
                          <span style={{ paddingLeft: "16%" }}>
                            <span style={pink}>label:</span>
                            <span style={{ paddingLeft: "2%" }}>
                              <span style={green}>'Gold-4'</span>
                              <br />
                            </span>
                          </span>

                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            34.
                          </span>

                          <span style={{ paddingLeft: "16%" }}>
                            <span style={pink}>{rightObject}</span>
                          </span>
                          <br />
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            35.
                          </span>
                          <span style={{ paddingLeft: "11%" }}>
                            <span style={pink}>
                              <span>main</span>
                            </span>
                          </span>
                          <br />
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            36
                          </span>
                          <span style={{ paddingLeft: "11%" }}>
                            <span style={pink}>title=</span>
                            <span style={green}>"warning.main"</span>
                          </span>
                          <br />
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            37.
                          </span>
                          <span style={{ paddingLeft: "6%" }}>
                            <span style={pink}>{closeTag}</span>
                            <br />
                          </span>
                        </span>
                      </span>
                      <span>38.</span>
                      <span style={{ paddingLeft: "2%" }}>
                        <span style={{ paddingLeft: "5%" }}>
                          <span style={pink}>{leftArrow}</span>
                          <span style={pink}>
                            h <br />
                          </span>
                        </span>
                        <span>
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            39.
                          </span>
                          <span style={{ paddingLeft: "11%" }}>
                            <span style={({ paddingLeft: "2%" }, pink)}>
                              bgcolor=
                            </span>
                            <span style={green}>"warning.light"</span>
                            <br />
                          </span>
                        </span>
                        <span>
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            40.
                          </span>
                          <span style={{ paddingLeft: "11%" }}>
                            <span style={pink}>data=</span>
                            <span style={pink}>{leftObject}</span>
                          </span>
                        </span>
                        <br />
                        <span>
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            41.
                          </span>
                          <span style={{ paddingLeft: "16%" }}>
                            <span style={pink}>color:</span>
                            <span style={{ paddingLeft: "2%" }}>
                              <span style={green}>'#ffd666</span>
                              <br />
                            </span>
                          </span>
                        </span>
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          42
                        </span>
                        <span style={{ paddingLeft: "16%" }}>
                          <span style={pink}>label:</span>
                          <span style={{ paddingLeft: "2%" }}>
                            <span style={green}>'Gold-4'</span>
                            <br />
                          </span>
                        </span>

                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          43.
                        </span>

                        <span style={{ paddingLeft: "16%" }}>
                          <span style={pink}>{rightObject}</span>
                        </span>
                        <br />
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          44.
                        </span>
                        <span style={{ paddingLeft: "11%" }}>
                          <span style={pink}>
                            <span>main</span>
                          </span>
                        </span>
                        <br />
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          45.
                        </span>
                        <span style={{ paddingLeft: "11%" }}>
                          <span style={pink}>title=</span>
                          <span style={green}>"warning.main"</span>
                        </span>
                        <br />
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          46.
                        </span>
                        <span style={{ paddingLeft: "6%" }}>
                          <span style={pink}>{closeTag}</span>
                          <br />
                        </span>
                        <span>47.</span>
                        <span style={{ paddingLeft: "2%" }}>
                          <span>{leftArrow}</span>
                          <span>No display Name</span>
                          <span>{rightArrow}</span>
                        </span>
                      </span>
                    </div>
                  </div>
                </code>
              </pre>
            )}
          </div>
        </Card>
        <Card sx={{ width: 400, height: "555px", padding: "3%" }}>
          <p>Primary Color</p>
          <br />
          <div>
            <div
              style={{
                width: "100%",
                height: "89px",
                background: "#f6ffed",
                display: "flex",
                justifyContent: "space-between",
                paddingInline: "15%",
                alignItems: "center",
              }}
            >
              {" "}
              <div>
                <p>Blue-1</p>
                <p>#e6f7ff</p>
              </div>
              <div>
                <p>succes.lighter</p>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "89px",
                background: "#95de64",
                display: "flex",
                justifyContent: "space-between",
                paddingInline: "15%",
                alignItems: "center",
              }}
            >
              {" "}
              <div>
                <p>Blue-1</p>
                <p>#e6f7ff</p>
              </div>
              <div>
                <p>succes.lighter</p>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "89px",
                background: "#52c41a",
                display: "flex",
                justifyContent: "space-between",
                paddingInline: "15%",
                alignItems: "center",
              }}
            >
              {" "}
              <div>
                <p>Green-6</p>
                <p>#e6f7ff</p>
              </div>
              <div>
                <p>succes.lighter</p>
              </div>
            </div>

            <div>
              <div
                style={{
                  width: "100%",
                  height: "89px",
                  background: "#237804",
                  display: "flex",
                  justifyContent: "space-between",
                  paddingInline: "15%",
                  alignItems: "center",
                }}
              >
                {" "}
                <div>
                  <p>Green-8</p>
                  <p>#e6f7ff</p>
                </div>
                <div>
                  <p>succes.lighter</p>
                </div>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "89px",
                background: "#092b00",
                display: "flex",
                justifyContent: "space-between",
                paddingInline: "15%",
                alignItems: "center",
              }}
            >
              <div>
                <p>Green-10</p>
                <p>#e6f7ff</p>
              </div>
              <div>
                <p>succes.lighter</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                paddingTop: "2%",
              }}
            >
              <div placement="top" sx={{ zIndex: "999", position: "absolute" }}>
                <IconButton
                  aria-label="fingerprint1"
                  color="default"
                  sx={{ width: "35px", height: "35px" }}
                >
                  <BootstrapTooltip title="Copy the source" placement="top">
                    <ContentCopyIcon color="action" fontSize="small" />
                  </BootstrapTooltip>
                </IconButton>

                <IconButton
                  aria-label="fingerprint1"
                  onClick={() => setValue4(!value4)}
                  color="default"
                  sx={{ width: "35px", height: "35px" }}
                >
                  <BootstrapTooltip title="Copy the source" placement="top">
                    <TerminalIcon color="action" fontSize="small" />
                  </BootstrapTooltip>
                </IconButton>
              </div>
            </div>
          </div>

          {value4 && (
            <pre
              style={{
                background: "#2B2B2B",
                width: "26.3%",
                height: "915px",
                zIndex: "999",
                right: "853px",
                marginTop: "0%",
                position: "absolute",
              }}
            >
              <code style={{ color: "white" }}>
                <div
                  id="copy"
                  style={{
                    padding: "5%",
                    paddingTop: "3%",
                    paddingBottom: "5%",
                    lineHeight: "1.58",
                  }}
                >
                  <div style={{ fontSize: "12px" }}>
                    <span
                      style={{
                        textWrap: "nowrap",
                        display: "inline-block",
                        userSelect: "none",
                      }}
                    >
                      1.
                    </span>
                    <span style={{ paddingLeft: "3%" }}>
                      <span style={pink}>{leftArrow}</span>
                      <span style={pink}>No display Name</span>
                      <span style={pink}>{rightArrow}</span>
                    </span>
                  </div>

                  <div style={{ fontSize: "12px" }}>
                    <span
                      style={{
                        textWrap: "nowrap",
                        display: "inline-block",
                        userSelect: "none",
                      }}
                    >
                      2.
                    </span>
                    <span style={{ paddingLeft: "2%" }}>
                      <span style={{ paddingLeft: "5%" }}>
                        <span style={pink}>{leftArrow}</span>
                        <span style={pink}>
                          h <br />
                        </span>
                      </span>
                      <span>
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          3.
                        </span>
                        <span style={{ paddingLeft: "11%" }}>
                          <span style={({ paddingLeft: "2%" }, pink)}>
                            bgcolor=
                          </span>
                          <span style={green}>"warning.lighter"</span>
                          <br />
                        </span>
                      </span>
                      <span>
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          4.
                        </span>
                        <span style={{ paddingLeft: "11%" }}>
                          <span style={pink}>dark</span>
                        </span>
                        <br />
                      </span>
                      <span>
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          5.
                        </span>
                        <span style={{ paddingLeft: "11%" }}>
                          <span style={pink}>data=</span>
                          <span style={pink}>{leftObject}</span>
                        </span>
                        <br />
                      </span>
                      <span
                        style={{
                          textWrap: "nowrap",
                          display: "inline-block",
                          userSelect: "none",
                        }}
                      >
                        6
                      </span>
                      <span style={{ paddingLeft: "16%" }}>
                        <span style={pink}>color:</span>
                        <span style={{ paddingLeft: "2%" }}>
                          <span style={green}>'#434343'</span>
                          <br />
                        </span>
                      </span>
                      <span
                        style={{
                          textWrap: "nowrap",
                          display: "inline-block",
                          userSelect: "none",
                        }}
                      >
                        7.
                      </span>
                      <span style={{ paddingLeft: "16%" }}>
                        <span style={pink}>label:</span>
                        <span style={{ paddingLeft: "2%" }}>
                          <span style={green}>'Gold-1'</span>
                          <br />
                        </span>
                      </span>
                      <span
                        style={{
                          textWrap: "nowrap",
                          display: "inline-block",
                          userSelect: "none",
                        }}
                      >
                        8.
                      </span>
                      <span style={{ paddingLeft: "11%" }}>
                        <span style={pink}>{rightObject}</span>
                      </span>
                      <br />
                      <span
                        style={{
                          textWrap: "nowrap",
                          display: "inline-block",
                          userSelect: "none",
                        }}
                      >
                        9.
                      </span>
                      <span style={{ paddingLeft: "11%" }}>
                        <span style={pink}>title=</span>
                        <span style={green}>"warning.lighter"</span>
                      </span>
                      <br />
                      <span
                        style={{
                          textWrap: "nowrap",
                          display: "inline-block",
                          userSelect: "none",
                        }}
                      >
                        10.
                      </span>
                      <span style={{ paddingLeft: "5%" }}>
                        <span style={pink}>{closeTag}</span>
                      </span>
                    </span>
                    <br />
                    <span>
                      <span
                        style={{
                          textWrap: "nowrap",
                          display: "inline-block",
                          userSelect: "none",
                        }}
                      >
                        11.
                      </span>
                      <span style={{ paddingLeft: "2%" }}>
                        <span style={{ paddingLeft: "5%" }}>
                          <span style={pink}>{leftArrow}</span>
                          <span style={pink}>
                            h <br />
                          </span>
                        </span>
                        <span>
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            12.
                          </span>
                          <span style={{ paddingLeft: "11%" }}>
                            <span style={({ paddingLeft: "2%" }, pink)}>
                              bgcolor=
                            </span>
                            <span style={green}>"warning.light"</span>
                            <br />
                          </span>
                        </span>
                        <span>
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            13.
                          </span>
                          <span style={{ paddingLeft: "11%" }}>
                            <span style={pink}>dark</span>
                          </span>
                          <br />
                        </span>
                        <span>
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            14.
                          </span>
                          <span style={{ paddingLeft: "11%" }}>
                            <span style={pink}>data=</span>
                            <span style={pink}>{leftObject}</span>
                          </span>
                          <br />
                        </span>
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          15
                        </span>
                        <span style={{ paddingLeft: "16%" }}>
                          <span style={pink}>color:</span>
                          <span style={{ paddingLeft: "2%" }}>
                            <span style={green}>'#ffd666</span>
                            <br />
                          </span>
                        </span>
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          16.
                        </span>
                        <span style={{ paddingLeft: "16%" }}>
                          <span style={pink}>label:</span>
                          <span style={{ paddingLeft: "2%" }}>
                            <span style={green}>'Gold-4'</span>
                            <br />
                          </span>
                        </span>
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          17.
                        </span>
                        <span style={{ paddingLeft: "11%" }}>
                          <span style={pink}>{rightObject}</span>
                        </span>
                        <br />
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          18.
                        </span>
                        <span style={{ paddingLeft: "11%" }}>
                          <span style={pink}>title=</span>
                          <span style={green}>"warning.light"</span>
                        </span>
                        <br />
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          19.
                        </span>
                        <span style={{ paddingLeft: "5%" }}>
                          <span style={pink}>{closeTag}</span>
                          <br />
                        </span>
                      </span>
                    </span>

                    <span>
                      <span
                        style={{
                          textWrap: "nowrap",
                          display: "inline-block",
                          userSelect: "none",
                        }}
                      >
                        20.
                      </span>
                      <span style={{ paddingLeft: "2%" }}>
                        <span style={{ paddingLeft: "5%" }}>
                          <span style={pink}>{leftArrow}</span>
                          <span style={pink}>
                            h <br />
                          </span>
                        </span>
                        <span>
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            21.
                          </span>
                          <span style={{ paddingLeft: "11%" }}>
                            <span style={({ paddingLeft: "2%" }, pink)}>
                              bgcolor=
                            </span>
                            <span style={green}>"warning.light"</span>
                            <br />
                          </span>
                        </span>
                        <span>
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            22.
                          </span>
                          <span style={{ paddingLeft: "11%" }}>
                            <span style={pink}>data=</span>
                            <span style={pink}>{leftObject}</span>
                          </span>
                        </span>
                        <br />
                        <span>
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            23.
                          </span>
                          <span style={{ paddingLeft: "16%" }}>
                            <span style={pink}>color:</span>
                            <span style={{ paddingLeft: "2%" }}>
                              <span style={green}>'#ffd666</span>
                              <br />
                            </span>
                          </span>
                        </span>
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          24
                        </span>
                        <span style={{ paddingLeft: "16%" }}>
                          <span style={pink}>label:</span>
                          <span style={{ paddingLeft: "2%" }}>
                            <span style={green}>'Gold-4'</span>
                            <br />
                          </span>
                        </span>

                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          25.
                        </span>

                        <span style={{ paddingLeft: "16%" }}>
                          <span style={pink}>{rightObject}</span>
                        </span>
                        <br />
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          26.
                        </span>
                        <span style={{ paddingLeft: "11%" }}>
                          <span style={pink}>
                            <span>main</span>
                          </span>
                        </span>
                        <br />
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          27.
                        </span>
                        <span style={{ paddingLeft: "11%" }}>
                          <span style={pink}>title=</span>
                          <span style={green}>"warning.main"</span>
                        </span>
                        <br />
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          28.
                        </span>
                        <span style={{ paddingLeft: "6%" }}>
                          <span style={pink}>{closeTag}</span>
                          <br />
                        </span>
                      </span>
                    </span>
                    <span>
                      <span
                        style={{
                          textWrap: "nowrap",
                          display: "inline-block",
                          userSelect: "none",
                        }}
                      >
                        29.
                      </span>
                      <span style={{ paddingLeft: "2%" }}>
                        <span style={{ paddingLeft: "5%" }}>
                          <span style={pink}>{leftArrow}</span>
                          <span style={pink}>
                            h <br />
                          </span>
                        </span>
                        <span>
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            30.
                          </span>
                          <span style={{ paddingLeft: "11%" }}>
                            <span style={({ paddingLeft: "2%" }, pink)}>
                              bgcolor=
                            </span>
                            <span style={green}>"warning.light"</span>
                            <br />
                          </span>
                        </span>
                        <span>
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            31.
                          </span>
                          <span style={{ paddingLeft: "11%" }}>
                            <span style={pink}>data=</span>
                            <span style={pink}>{leftObject}</span>
                          </span>
                        </span>
                        <br />
                        <span>
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            32.
                          </span>
                          <span style={{ paddingLeft: "16%" }}>
                            <span style={pink}>color:</span>
                            <span style={{ paddingLeft: "2%" }}>
                              <span style={green}>'#ffd666</span>
                              <br />
                            </span>
                          </span>
                        </span>
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          33
                        </span>
                        <span style={{ paddingLeft: "16%" }}>
                          <span style={pink}>label:</span>
                          <span style={{ paddingLeft: "2%" }}>
                            <span style={green}>'Gold-4'</span>
                            <br />
                          </span>
                        </span>

                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          34.
                        </span>

                        <span style={{ paddingLeft: "16%" }}>
                          <span style={pink}>{rightObject}</span>
                        </span>
                        <br />
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          35.
                        </span>
                        <span style={{ paddingLeft: "11%" }}>
                          <span style={pink}>
                            <span>main</span>
                          </span>
                        </span>
                        <br />
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          36
                        </span>
                        <span style={{ paddingLeft: "11%" }}>
                          <span style={pink}>title=</span>
                          <span style={green}>"warning.main"</span>
                        </span>
                        <br />
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          37.
                        </span>
                        <span style={{ paddingLeft: "6%" }}>
                          <span style={pink}>{closeTag}</span>
                          <br />
                        </span>
                      </span>
                    </span>
                    <span>38.</span>
                    <span style={{ paddingLeft: "2%" }}>
                      <span style={{ paddingLeft: "5%" }}>
                        <span style={pink}>{leftArrow}</span>
                        <span style={pink}>
                          h <br />
                        </span>
                      </span>
                      <span>
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          39.
                        </span>
                        <span style={{ paddingLeft: "11%" }}>
                          <span style={({ paddingLeft: "2%" }, pink)}>
                            bgcolor=
                          </span>
                          <span style={green}>"warning.light"</span>
                          <br />
                        </span>
                      </span>
                      <span>
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          40.
                        </span>
                        <span style={{ paddingLeft: "11%" }}>
                          <span style={pink}>data=</span>
                          <span style={pink}>{leftObject}</span>
                        </span>
                      </span>
                      <br />
                      <span>
                        <span
                          style={{
                            textWrap: "nowrap",
                            display: "inline-block",
                            userSelect: "none",
                          }}
                        >
                          41.
                        </span>
                        <span style={{ paddingLeft: "16%" }}>
                          <span style={pink}>color:</span>
                          <span style={{ paddingLeft: "2%" }}>
                            <span style={green}>'#ffd666</span>
                            <br />
                          </span>
                        </span>
                      </span>
                      <span
                        style={{
                          textWrap: "nowrap",
                          display: "inline-block",
                          userSelect: "none",
                        }}
                      >
                        42
                      </span>
                      <span style={{ paddingLeft: "16%" }}>
                        <span style={pink}>label:</span>
                        <span style={{ paddingLeft: "2%" }}>
                          <span style={green}>'Gold-4'</span>
                          <br />
                        </span>
                      </span>

                      <span
                        style={{
                          textWrap: "nowrap",
                          display: "inline-block",
                          userSelect: "none",
                        }}
                      >
                        43.
                      </span>

                      <span style={{ paddingLeft: "16%" }}>
                        <span style={pink}>{rightObject}</span>
                      </span>
                      <br />
                      <span
                        style={{
                          textWrap: "nowrap",
                          display: "inline-block",
                          userSelect: "none",
                        }}
                      >
                        44.
                      </span>
                      <span style={{ paddingLeft: "11%" }}>
                        <span style={pink}>
                          <span>main</span>
                        </span>
                      </span>
                      <br />
                      <span
                        style={{
                          textWrap: "nowrap",
                          display: "inline-block",
                          userSelect: "none",
                        }}
                      >
                        45.
                      </span>
                      <span style={{ paddingLeft: "11%" }}>
                        <span style={pink}>title=</span>
                        <span style={green}>"warning.main"</span>
                      </span>
                      <br />
                      <span
                        style={{
                          textWrap: "nowrap",
                          display: "inline-block",
                          userSelect: "none",
                        }}
                      >
                        46.
                      </span>
                      <span style={{ paddingLeft: "6%" }}>
                        <span style={pink}>{closeTag}</span>
                        <br />
                      </span>
                      <span>47.</span>
                      <span style={{ paddingLeft: "2%" }}>
                        <span>{leftArrow}</span>
                        <span>No display Name</span>
                        <span>{rightArrow}</span>
                      </span>
                    </span>
                  </div>
                </div>
              </code>
            </pre>
          )}
        </Card>
        <Card sx={{ width: 400, height: "555px", padding: "3%" }}>
          <p>Primary Color</p>
          <br />
          <div>
            <div
              style={{ width: "100%", height: "89px", background: "#fff1f0" }}
            ></div>
            <div
              style={{ width: "100%", height: "89px", background: "#ff7875" }}
            ></div>
            <div
              style={{ width: "100%", height: "89px", background: "#f5222d" }}
            ></div>
            <div
              style={{ width: "100%", height: "89px", background: "#a8071a" }}
            ></div>
            <div
              style={{ width: "100%", height: "89px", background: "#5c0011" }}
            ></div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              marginTop: "3%",
            }}
          >
            <div>
              <IconButton
                aria-label="fingerprint1"
                color="default"
                sx={{ width: "35px", height: "35px" }}
              >
                <BootstrapTooltip title="Copy the source" placement="top">
                  <ContentCopyIcon color="action" fontSize="small" />
                </BootstrapTooltip>
              </IconButton>
            </div>
            <div>
              <IconButton
                aria-label="fingerprint1"
                onClick={() => setValue5(!value5)}
                color="default"
                sx={{ width: "35px", height: "35px" }}
              >
                <BootstrapTooltip title="Copy the source" placement="top">
                  <TerminalIcon color="action" fontSize="small" />
                </BootstrapTooltip>
              </IconButton>
              <div>
                {value5 && (
                  <pre
                    style={{
                      background: "#2B2B2B",
                      width: "26.3%",
                      height: "915px",
                      zIndex: "999",
                      right: "430px",
                      position: "absolute",
                    }}
                  >
                    <code style={{ color: "white" }}>
                      <div
                        id="copy"
                        style={{
                          padding: "5%",
                          paddingTop: "3%",
                          paddingBottom: "5%",
                          lineHeight: "1.58",
                        }}
                      >
                        <div style={{ fontSize: "12px" }}>
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            1.
                          </span>
                          <span style={{ paddingLeft: "3%" }}>
                            <span style={pink}>{leftArrow}</span>
                            <span style={pink}>No display Name</span>
                            <span style={pink}>{rightArrow}</span>
                          </span>
                        </div>

                        <div style={{ fontSize: "12px" }}>
                          <span
                            style={{
                              textWrap: "nowrap",
                              display: "inline-block",
                              userSelect: "none",
                            }}
                          >
                            2.
                          </span>
                          <span style={{ paddingLeft: "2%" }}>
                            <span style={{ paddingLeft: "5%" }}>
                              <span style={pink}>{leftArrow}</span>
                              <span style={pink}>
                                h <br />
                              </span>
                            </span>
                            <span>
                              <span
                                style={{
                                  textWrap: "nowrap",
                                  display: "inline-block",
                                  userSelect: "none",
                                }}
                              >
                                3.
                              </span>
                              <span style={{ paddingLeft: "11%" }}>
                                <span style={({ paddingLeft: "2%" }, pink)}>
                                  bgcolor=
                                </span>
                                <span style={green}>"warning.lighter"</span>
                                <br />
                              </span>
                            </span>
                            <span>
                              <span
                                style={{
                                  textWrap: "nowrap",
                                  display: "inline-block",
                                  userSelect: "none",
                                }}
                              >
                                4.
                              </span>
                              <span style={{ paddingLeft: "11%" }}>
                                <span style={pink}>dark</span>
                              </span>
                              <br />
                            </span>
                            <span>
                              <span
                                style={{
                                  textWrap: "nowrap",
                                  display: "inline-block",
                                  userSelect: "none",
                                }}
                              >
                                5.
                              </span>
                              <span style={{ paddingLeft: "11%" }}>
                                <span style={pink}>data=</span>
                                <span style={pink}>{leftObject}</span>
                              </span>
                              <br />
                            </span>
                            <span
                              style={{
                                textWrap: "nowrap",
                                display: "inline-block",
                                userSelect: "none",
                              }}
                            >
                              6
                            </span>
                            <span style={{ paddingLeft: "16%" }}>
                              <span style={pink}>color:</span>
                              <span style={{ paddingLeft: "2%" }}>
                                <span style={green}>'#434343'</span>
                                <br />
                              </span>
                            </span>
                            <span
                              style={{
                                textWrap: "nowrap",
                                display: "inline-block",
                                userSelect: "none",
                              }}
                            >
                              7.
                            </span>
                            <span style={{ paddingLeft: "16%" }}>
                              <span style={pink}>label:</span>
                              <span style={{ paddingLeft: "2%" }}>
                                <span style={green}>'Gold-1'</span>
                                <br />
                              </span>
                            </span>
                            <span
                              style={{
                                textWrap: "nowrap",
                                display: "inline-block",
                                userSelect: "none",
                              }}
                            >
                              8.
                            </span>
                            <span style={{ paddingLeft: "11%" }}>
                              <span style={pink}>{rightObject}</span>
                            </span>
                            <br />
                            <span
                              style={{
                                textWrap: "nowrap",
                                display: "inline-block",
                                userSelect: "none",
                              }}
                            >
                              9.
                            </span>
                            <span style={{ paddingLeft: "11%" }}>
                              <span style={pink}>title=</span>
                              <span style={green}>"warning.lighter"</span>
                            </span>
                            <br />
                            <span
                              style={{
                                textWrap: "nowrap",
                                display: "inline-block",
                                userSelect: "none",
                              }}
                            >
                              10.
                            </span>
                            <span style={{ paddingLeft: "5%" }}>
                              <span style={pink}>{closeTag}</span>
                            </span>
                          </span>
                          <br />
                          <span>
                            <span
                              style={{
                                textWrap: "nowrap",
                                display: "inline-block",
                                userSelect: "none",
                              }}
                            >
                              11.
                            </span>
                            <span style={{ paddingLeft: "2%" }}>
                              <span style={{ paddingLeft: "5%" }}>
                                <span style={pink}>{leftArrow}</span>
                                <span style={pink}>
                                  h <br />
                                </span>
                              </span>
                              <span>
                                <span
                                  style={{
                                    textWrap: "nowrap",
                                    display: "inline-block",
                                    userSelect: "none",
                                  }}
                                >
                                  12.
                                </span>
                                <span style={{ paddingLeft: "11%" }}>
                                  <span style={({ paddingLeft: "2%" }, pink)}>
                                    bgcolor=
                                  </span>
                                  <span style={green}>"warning.light"</span>
                                  <br />
                                </span>
                              </span>
                              <span>
                                <span
                                  style={{
                                    textWrap: "nowrap",
                                    display: "inline-block",
                                    userSelect: "none",
                                  }}
                                >
                                  13.
                                </span>
                                <span style={{ paddingLeft: "11%" }}>
                                  <span style={pink}>dark</span>
                                </span>
                                <br />
                              </span>
                              <span>
                                <span
                                  style={{
                                    textWrap: "nowrap",
                                    display: "inline-block",
                                    userSelect: "none",
                                  }}
                                >
                                  14.
                                </span>
                                <span style={{ paddingLeft: "11%" }}>
                                  <span style={pink}>data=</span>
                                  <span style={pink}>{leftObject}</span>
                                </span>
                                <br />
                              </span>
                              <span
                                style={{
                                  textWrap: "nowrap",
                                  display: "inline-block",
                                  userSelect: "none",
                                }}
                              >
                                15
                              </span>
                              <span style={{ paddingLeft: "16%" }}>
                                <span style={pink}>color:</span>
                                <span style={{ paddingLeft: "2%" }}>
                                  <span style={green}>'#ffd666</span>
                                  <br />
                                </span>
                              </span>
                              <span
                                style={{
                                  textWrap: "nowrap",
                                  display: "inline-block",
                                  userSelect: "none",
                                }}
                              >
                                16.
                              </span>
                              <span style={{ paddingLeft: "16%" }}>
                                <span style={pink}>label:</span>
                                <span style={{ paddingLeft: "2%" }}>
                                  <span style={green}>'Gold-4'</span>
                                  <br />
                                </span>
                              </span>
                              <span
                                style={{
                                  textWrap: "nowrap",
                                  display: "inline-block",
                                  userSelect: "none",
                                }}
                              >
                                17.
                              </span>
                              <span style={{ paddingLeft: "11%" }}>
                                <span style={pink}>{rightObject}</span>
                              </span>
                              <br />
                              <span
                                style={{
                                  textWrap: "nowrap",
                                  display: "inline-block",
                                  userSelect: "none",
                                }}
                              >
                                18.
                              </span>
                              <span style={{ paddingLeft: "11%" }}>
                                <span style={pink}>title=</span>
                                <span style={green}>"warning.light"</span>
                              </span>
                              <br />
                              <span
                                style={{
                                  textWrap: "nowrap",
                                  display: "inline-block",
                                  userSelect: "none",
                                }}
                              >
                                19.
                              </span>
                              <span style={{ paddingLeft: "5%" }}>
                                <span style={pink}>{closeTag}</span>
                                <br />
                              </span>
                            </span>
                          </span>

                          <span>
                            <span
                              style={{
                                textWrap: "nowrap",
                                display: "inline-block",
                                userSelect: "none",
                              }}
                            >
                              20.
                            </span>
                            <span style={{ paddingLeft: "2%" }}>
                              <span style={{ paddingLeft: "5%" }}>
                                <span style={pink}>{leftArrow}</span>
                                <span style={pink}>
                                  h <br />
                                </span>
                              </span>
                              <span>
                                <span
                                  style={{
                                    textWrap: "nowrap",
                                    display: "inline-block",
                                    userSelect: "none",
                                  }}
                                >
                                  21.
                                </span>
                                <span style={{ paddingLeft: "11%" }}>
                                  <span style={({ paddingLeft: "2%" }, pink)}>
                                    bgcolor=
                                  </span>
                                  <span style={green}>"warning.light"</span>
                                  <br />
                                </span>
                              </span>
                              <span>
                                <span
                                  style={{
                                    textWrap: "nowrap",
                                    display: "inline-block",
                                    userSelect: "none",
                                  }}
                                >
                                  22.
                                </span>
                                <span style={{ paddingLeft: "11%" }}>
                                  <span style={pink}>data=</span>
                                  <span style={pink}>{leftObject}</span>
                                </span>
                              </span>
                              <br />
                              <span>
                                <span
                                  style={{
                                    textWrap: "nowrap",
                                    display: "inline-block",
                                    userSelect: "none",
                                  }}
                                >
                                  23.
                                </span>
                                <span style={{ paddingLeft: "16%" }}>
                                  <span style={pink}>color:</span>
                                  <span style={{ paddingLeft: "2%" }}>
                                    <span style={green}>'#ffd666</span>
                                    <br />
                                  </span>
                                </span>
                              </span>
                              <span
                                style={{
                                  textWrap: "nowrap",
                                  display: "inline-block",
                                  userSelect: "none",
                                }}
                              >
                                24
                              </span>
                              <span style={{ paddingLeft: "16%" }}>
                                <span style={pink}>label:</span>
                                <span style={{ paddingLeft: "2%" }}>
                                  <span style={green}>'Gold-4'</span>
                                  <br />
                                </span>
                              </span>

                              <span
                                style={{
                                  textWrap: "nowrap",
                                  display: "inline-block",
                                  userSelect: "none",
                                }}
                              >
                                25.
                              </span>

                              <span style={{ paddingLeft: "16%" }}>
                                <span style={pink}>{rightObject}</span>
                              </span>
                              <br />
                              <span
                                style={{
                                  textWrap: "nowrap",
                                  display: "inline-block",
                                  userSelect: "none",
                                }}
                              >
                                26.
                              </span>
                              <span style={{ paddingLeft: "11%" }}>
                                <span style={pink}>
                                  <span>main</span>
                                </span>
                              </span>
                              <br />
                              <span
                                style={{
                                  textWrap: "nowrap",
                                  display: "inline-block",
                                  userSelect: "none",
                                }}
                              >
                                27.
                              </span>
                              <span style={{ paddingLeft: "11%" }}>
                                <span style={pink}>title=</span>
                                <span style={green}>"warning.main"</span>
                              </span>
                              <br />
                              <span
                                style={{
                                  textWrap: "nowrap",
                                  display: "inline-block",
                                  userSelect: "none",
                                }}
                              >
                                28.
                              </span>
                              <span style={{ paddingLeft: "6%" }}>
                                <span style={pink}>{closeTag}</span>
                                <br />
                              </span>
                            </span>
                          </span>
                          <span>
                            <span
                              style={{
                                textWrap: "nowrap",
                                display: "inline-block",
                                userSelect: "none",
                              }}
                            >
                              29.
                            </span>
                            <span style={{ paddingLeft: "2%" }}>
                              <span style={{ paddingLeft: "5%" }}>
                                <span style={pink}>{leftArrow}</span>
                                <span style={pink}>
                                  h <br />
                                </span>
                              </span>
                              <span>
                                <span
                                  style={{
                                    textWrap: "nowrap",
                                    display: "inline-block",
                                    userSelect: "none",
                                  }}
                                >
                                  30.
                                </span>
                                <span style={{ paddingLeft: "11%" }}>
                                  <span style={({ paddingLeft: "2%" }, pink)}>
                                    bgcolor=
                                  </span>
                                  <span style={green}>"warning.light"</span>
                                  <br />
                                </span>
                              </span>
                              <span>
                                <span
                                  style={{
                                    textWrap: "nowrap",
                                    display: "inline-block",
                                    userSelect: "none",
                                  }}
                                >
                                  31.
                                </span>
                                <span style={{ paddingLeft: "11%" }}>
                                  <span style={pink}>data=</span>
                                  <span style={pink}>{leftObject}</span>
                                </span>
                              </span>
                              <br />
                              <span>
                                <span
                                  style={{
                                    textWrap: "nowrap",
                                    display: "inline-block",
                                    userSelect: "none",
                                  }}
                                >
                                  32.
                                </span>
                                <span style={{ paddingLeft: "16%" }}>
                                  <span style={pink}>color:</span>
                                  <span style={{ paddingLeft: "2%" }}>
                                    <span style={green}>'#ffd666</span>
                                    <br />
                                  </span>
                                </span>
                              </span>
                              <span
                                style={{
                                  textWrap: "nowrap",
                                  display: "inline-block",
                                  userSelect: "none",
                                }}
                              >
                                33
                              </span>
                              <span style={{ paddingLeft: "16%" }}>
                                <span style={pink}>label:</span>
                                <span style={{ paddingLeft: "2%" }}>
                                  <span style={green}>'Gold-4'</span>
                                  <br />
                                </span>
                              </span>

                              <span
                                style={{
                                  textWrap: "nowrap",
                                  display: "inline-block",
                                  userSelect: "none",
                                }}
                              >
                                34.
                              </span>

                              <span style={{ paddingLeft: "16%" }}>
                                <span style={pink}>{rightObject}</span>
                              </span>
                              <br />
                              <span
                                style={{
                                  textWrap: "nowrap",
                                  display: "inline-block",
                                  userSelect: "none",
                                }}
                              >
                                35.
                              </span>
                              <span style={{ paddingLeft: "11%" }}>
                                <span style={pink}>
                                  <span>main</span>
                                </span>
                              </span>
                              <br />
                              <span
                                style={{
                                  textWrap: "nowrap",
                                  display: "inline-block",
                                  userSelect: "none",
                                }}
                              >
                                36
                              </span>
                              <span style={{ paddingLeft: "11%" }}>
                                <span style={pink}>title=</span>
                                <span style={green}>"warning.main"</span>
                              </span>
                              <br />
                              <span
                                style={{
                                  textWrap: "nowrap",
                                  display: "inline-block",
                                  userSelect: "none",
                                }}
                              >
                                37.
                              </span>
                              <span style={{ paddingLeft: "6%" }}>
                                <span style={pink}>{closeTag}</span>
                                <br />
                              </span>
                            </span>
                          </span>
                          <span>38.</span>
                          <span style={{ paddingLeft: "2%" }}>
                            <span style={{ paddingLeft: "5%" }}>
                              <span style={pink}>{leftArrow}</span>
                              <span style={pink}>
                                h <br />
                              </span>
                            </span>
                            <span>
                              <span
                                style={{
                                  textWrap: "nowrap",
                                  display: "inline-block",
                                  userSelect: "none",
                                }}
                              >
                                39.
                              </span>
                              <span style={{ paddingLeft: "11%" }}>
                                <span style={({ paddingLeft: "2%" }, pink)}>
                                  bgcolor=
                                </span>
                                <span style={green}>"warning.light"</span>
                                <br />
                              </span>
                            </span>
                            <span>
                              <span
                                style={{
                                  textWrap: "nowrap",
                                  display: "inline-block",
                                  userSelect: "none",
                                }}
                              >
                                40.
                              </span>
                              <span style={{ paddingLeft: "11%" }}>
                                <span style={pink}>data=</span>
                                <span style={pink}>{leftObject}</span>
                              </span>
                            </span>
                            <br />
                            <span>
                              <span
                                style={{
                                  textWrap: "nowrap",
                                  display: "inline-block",
                                  userSelect: "none",
                                }}
                              >
                                41.
                              </span>
                              <span style={{ paddingLeft: "16%" }}>
                                <span style={pink}>color:</span>
                                <span style={{ paddingLeft: "2%" }}>
                                  <span style={green}>'#ffd666</span>
                                  <br />
                                </span>
                              </span>
                            </span>
                            <span
                              style={{
                                textWrap: "nowrap",
                                display: "inline-block",
                                userSelect: "none",
                              }}
                            >
                              42
                            </span>
                            <span style={{ paddingLeft: "16%" }}>
                              <span style={pink}>label:</span>
                              <span style={{ paddingLeft: "2%" }}>
                                <span style={green}>'Gold-4'</span>
                                <br />
                              </span>
                            </span>

                            <span
                              style={{
                                textWrap: "nowrap",
                                display: "inline-block",
                                userSelect: "none",
                              }}
                            >
                              43.
                            </span>

                            <span style={{ paddingLeft: "16%" }}>
                              <span style={pink}>{rightObject}</span>
                            </span>
                            <br />
                            <span
                              style={{
                                textWrap: "nowrap",
                                display: "inline-block",
                                userSelect: "none",
                              }}
                            >
                              44.
                            </span>
                            <span style={{ paddingLeft: "11%" }}>
                              <span style={pink}>
                                <span>main</span>
                              </span>
                            </span>
                            <br />
                            <span
                              style={{
                                textWrap: "nowrap",
                                display: "inline-block",
                                userSelect: "none",
                              }}
                            >
                              45.
                            </span>
                            <span style={{ paddingLeft: "11%" }}>
                              <span style={pink}>title=</span>
                              <span style={green}>"warning.main"</span>
                            </span>
                            <br />
                            <span
                              style={{
                                textWrap: "nowrap",
                                display: "inline-block",
                                userSelect: "none",
                              }}
                            >
                              46.
                            </span>
                            <span style={{ paddingLeft: "6%" }}>
                              <span style={pink}>{closeTag}</span>
                              <br />
                            </span>
                            <span>47.</span>
                            <span style={{ paddingLeft: "2%" }}>
                              <span>{leftArrow}</span>
                              <span>No display Name</span>
                              <span>{rightArrow}</span>
                            </span>
                          </span>
                        </div>
                      </div>
                    </code>
                  </pre>
                )}
              </div>
            </div>
          </div>
        </Card>
        <Card sx={{ width: 400, height: "555px", padding: "3%" }}>
          <p>Primary Color</p>
          <br />
          <div>
            <div
              style={{ width: "100%", height: "89px", background: "#fffbe6" }}
            ></div>
            <div
              style={{ width: "100%", height: "89px", background: "#ffd666" }}
            ></div>
            <div
              style={{ width: "100%", height: "89px", background: "#faad14" }}
            ></div>
            <div
              style={{ width: "100%", height: "89px", background: "#ad6800" }}
            ></div>
            <div
              style={{ width: "100%", height: "89px", background: "#613400" }}
            ></div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "end",
              marginTop: "3%",
              gap: "1%",
            }}
          >
            <div>
              <div
                aria-label="fingerprint2"
                color="default"
                style={{
                  cursor: "pointer",
                }}
              >
                <BootstrapTooltip
                  title="Copy the source"
                  placement="top"
                  sx={{ zIndex: "999", position: "absolute" }}
                >
                  <IconButton
                    style={{ width: "35px", height: "35px" }}
                    onClick={() => handleClick}
                    color="primary"
                  >
                    <ContentCopyIcon fontSize="small" color="action" />
                  </IconButton>
                  <Snackbar
                    message="Copied to clibboard"
                    anchorOrigin={{ vertical: "top", horizontal: "center" }}
                    autoHideDuration={1600}
                    onClose={() => setOpen(false)}
                    open={open}
                  />
                </BootstrapTooltip>
              </div>
            </div>
            <div>
              <div>
                <IconButton
                  aria-label="fingerprint"
                  color="default"
                  sx={{ width: "35px", height: "35px" }}
                  onClick={() => setValue6(!value6)}
                >
                  <BootstrapTooltip title="Copy the source" placement="top">
                    <TerminalIcon color="action" fontSize="small" />
                  </BootstrapTooltip>
                </IconButton>
                <div>
                  {value6 && (
                    <pre
                      style={{
                        background: "#2b2b2b",
                        width: "26.3%",
                        height: "915px",
                        zIndex: "999",
                        right: "5px",
                        position: "absolute",
                      }}
                    >
                      <code style={{ color: "white" }}>
                        {/* Bu yerda sizning kod blokingiz bo'ladi */}
                        <div
                          id="copy"
                          style={{
                            padding: "5%",
                            paddingTop: "3%",
                            paddingBottom: "5%",
                            lineHeight: "1.58",
                          }}
                        >
                          <div style={{ fontSize: "12px" }}>
                            <span
                              style={{
                                textWrap: "nowrap",
                                display: "inline-block",
                                userSelect: "none",
                              }}
                            >
                              1.
                            </span>
                            <span style={{ paddingLeft: "3%" }}>
                              <span style={pink}>{leftArrow}</span>
                              <span style={pink}>No display Name</span>
                              <span style={pink}>{rightArrow}</span>
                            </span>
                          </div>

                          <div style={{ fontSize: "12px" }}>
                            <span
                              style={{
                                textWrap: "nowrap",
                                display: "inline-block",
                                userSelect: "none",
                              }}
                            >
                              2.
                            </span>
                            <span style={{ paddingLeft: "2%" }}>
                              <span style={{ paddingLeft: "5%" }}>
                                <span style={pink}>{leftArrow}</span>
                                <span style={pink}>
                                  h <br />
                                </span>
                              </span>
                              <span>
                                <span
                                  style={{
                                    textWrap: "nowrap",
                                    display: "inline-block",
                                    userSelect: "none",
                                  }}
                                >
                                  3.
                                </span>
                                <span style={{ paddingLeft: "11%" }}>
                                  <span style={({ paddingLeft: "2%" }, pink)}>
                                    bgcolor=
                                  </span>
                                  <span style={green}>"warning.lighter"</span>
                                  <br />
                                </span>
                              </span>
                              <span>
                                <span
                                  style={{
                                    textWrap: "nowrap",
                                    display: "inline-block",
                                    userSelect: "none",
                                  }}
                                >
                                  4.
                                </span>
                                <span style={{ paddingLeft: "11%" }}>
                                  <span style={pink}>dark</span>
                                </span>
                                <br />
                              </span>
                              <span>
                                <span
                                  style={{
                                    textWrap: "nowrap",
                                    display: "inline-block",
                                    userSelect: "none",
                                  }}
                                >
                                  5.
                                </span>
                                <span style={{ paddingLeft: "11%" }}>
                                  <span style={pink}>data=</span>
                                  <span style={pink}>{leftObject}</span>
                                </span>
                                <br />
                              </span>
                              <span
                                style={{
                                  textWrap: "nowrap",
                                  display: "inline-block",
                                  userSelect: "none",
                                }}
                              >
                                6
                              </span>
                              <span style={{ paddingLeft: "16%" }}>
                                <span style={pink}>color:</span>
                                <span style={{ paddingLeft: "2%" }}>
                                  <span style={green}>'#434343'</span>
                                  <br />
                                </span>
                              </span>
                              <span
                                style={{
                                  textWrap: "nowrap",
                                  display: "inline-block",
                                  userSelect: "none",
                                }}
                              >
                                7.
                              </span>
                              <span style={{ paddingLeft: "16%" }}>
                                <span style={pink}>label:</span>
                                <span style={{ paddingLeft: "2%" }}>
                                  <span style={green}>'Gold-1'</span>
                                  <br />
                                </span>
                              </span>
                              <span
                                style={{
                                  textWrap: "nowrap",
                                  display: "inline-block",
                                  userSelect: "none",
                                }}
                              >
                                8.
                              </span>
                              <span style={{ paddingLeft: "11%" }}>
                                <span style={pink}>{rightObject}</span>
                              </span>
                              <br />
                              <span
                                style={{
                                  textWrap: "nowrap",
                                  display: "inline-block",
                                  userSelect: "none",
                                }}
                              >
                                9.
                              </span>
                              <span style={{ paddingLeft: "11%" }}>
                                <span style={pink}>title=</span>
                                <span style={green}>"warning.lighter"</span>
                              </span>
                              <br />
                              <span
                                style={{
                                  textWrap: "nowrap",
                                  display: "inline-block",
                                  userSelect: "none",
                                }}
                              >
                                10.
                              </span>
                              <span style={{ paddingLeft: "5%" }}>
                                <span style={pink}>{closeTag}</span>
                              </span>
                            </span>
                            <br />
                            <span>
                              <span
                                style={{
                                  textWrap: "nowrap",
                                  display: "inline-block",
                                  userSelect: "none",
                                }}
                              >
                                11.
                              </span>
                              <span style={{ paddingLeft: "2%" }}>
                                <span style={{ paddingLeft: "5%" }}>
                                  <span style={pink}>{leftArrow}</span>
                                  <span style={pink}>
                                    h <br />
                                  </span>
                                </span>
                                <span>
                                  <span
                                    style={{
                                      textWrap: "nowrap",
                                      display: "inline-block",
                                      userSelect: "none",
                                    }}
                                  >
                                    12.
                                  </span>
                                  <span style={{ paddingLeft: "11%" }}>
                                    <span style={({ paddingLeft: "2%" }, pink)}>
                                      bgcolor=
                                    </span>
                                    <span style={green}>"warning.light"</span>
                                    <br />
                                  </span>
                                </span>
                                <span>
                                  <span
                                    style={{
                                      textWrap: "nowrap",
                                      display: "inline-block",
                                      userSelect: "none",
                                    }}
                                  >
                                    13.
                                  </span>
                                  <span style={{ paddingLeft: "11%" }}>
                                    <span style={pink}>dark</span>
                                  </span>
                                  <br />
                                </span>
                                <span>
                                  <span
                                    style={{
                                      textWrap: "nowrap",
                                      display: "inline-block",
                                      userSelect: "none",
                                    }}
                                  >
                                    14.
                                  </span>
                                  <span style={{ paddingLeft: "11%" }}>
                                    <span style={pink}>data=</span>
                                    <span style={pink}>{leftObject}</span>
                                  </span>
                                  <br />
                                </span>
                                <span
                                  style={{
                                    textWrap: "nowrap",
                                    display: "inline-block",
                                    userSelect: "none",
                                  }}
                                >
                                  15
                                </span>
                                <span style={{ paddingLeft: "16%" }}>
                                  <span style={pink}>color:</span>
                                  <span style={{ paddingLeft: "2%" }}>
                                    <span style={green}>'#ffd666</span>
                                    <br />
                                  </span>
                                </span>
                                <span
                                  style={{
                                    textWrap: "nowrap",
                                    display: "inline-block",
                                    userSelect: "none",
                                  }}
                                >
                                  16.
                                </span>
                                <span style={{ paddingLeft: "16%" }}>
                                  <span style={pink}>label:</span>
                                  <span style={{ paddingLeft: "2%" }}>
                                    <span style={green}>'Gold-4'</span>
                                    <br />
                                  </span>
                                </span>
                                <span
                                  style={{
                                    textWrap: "nowrap",
                                    display: "inline-block",
                                    userSelect: "none",
                                  }}
                                >
                                  17.
                                </span>
                                <span style={{ paddingLeft: "11%" }}>
                                  <span style={pink}>{rightObject}</span>
                                </span>
                                <br />
                                <span
                                  style={{
                                    textWrap: "nowrap",
                                    display: "inline-block",
                                    userSelect: "none",
                                  }}
                                >
                                  18.
                                </span>
                                <span style={{ paddingLeft: "11%" }}>
                                  <span style={pink}>title=</span>
                                  <span style={green}>"warning.light"</span>
                                </span>
                                <br />
                                <span
                                  style={{
                                    textWrap: "nowrap",
                                    display: "inline-block",
                                    userSelect: "none",
                                  }}
                                >
                                  19.
                                </span>
                                <span style={{ paddingLeft: "5%" }}>
                                  <span style={pink}>{closeTag}</span>
                                  <br />
                                </span>
                              </span>
                            </span>

                            <span>
                              <span
                                style={{
                                  textWrap: "nowrap",
                                  display: "inline-block",
                                  userSelect: "none",
                                }}
                              >
                                20.
                              </span>
                              <span style={{ paddingLeft: "2%" }}>
                                <span style={{ paddingLeft: "5%" }}>
                                  <span style={pink}>{leftArrow}</span>
                                  <span style={pink}>
                                    h <br />
                                  </span>
                                </span>
                                <span>
                                  <span
                                    style={{
                                      textWrap: "nowrap",
                                      display: "inline-block",
                                      userSelect: "none",
                                    }}
                                  >
                                    21.
                                  </span>
                                  <span style={{ paddingLeft: "11%" }}>
                                    <span style={({ paddingLeft: "2%" }, pink)}>
                                      bgcolor=
                                    </span>
                                    <span style={green}>"warning.light"</span>
                                    <br />
                                  </span>
                                </span>
                                <span>
                                  <span
                                    style={{
                                      textWrap: "nowrap",
                                      display: "inline-block",
                                      userSelect: "none",
                                    }}
                                  >
                                    22.
                                  </span>
                                  <span style={{ paddingLeft: "11%" }}>
                                    <span style={pink}>data=</span>
                                    <span style={pink}>{leftObject}</span>
                                  </span>
                                </span>
                                <br />
                                <span>
                                  <span
                                    style={{
                                      textWrap: "nowrap",
                                      display: "inline-block",
                                      userSelect: "none",
                                    }}
                                  >
                                    23.
                                  </span>
                                  <span style={{ paddingLeft: "16%" }}>
                                    <span style={pink}>color:</span>
                                    <span style={{ paddingLeft: "2%" }}>
                                      <span style={green}>'#ffd666</span>
                                      <br />
                                    </span>
                                  </span>
                                </span>
                                <span
                                  style={{
                                    textWrap: "nowrap",
                                    display: "inline-block",
                                    userSelect: "none",
                                  }}
                                >
                                  24
                                </span>
                                <span style={{ paddingLeft: "16%" }}>
                                  <span style={pink}>label:</span>
                                  <span style={{ paddingLeft: "2%" }}>
                                    <span style={green}>'Gold-4'</span>
                                    <br />
                                  </span>
                                </span>

                                <span
                                  style={{
                                    textWrap: "nowrap",
                                    display: "inline-block",
                                    userSelect: "none",
                                  }}
                                >
                                  25.
                                </span>

                                <span style={{ paddingLeft: "16%" }}>
                                  <span style={pink}>{rightObject}</span>
                                </span>
                                <br />
                                <span
                                  style={{
                                    textWrap: "nowrap",
                                    display: "inline-block",
                                    userSelect: "none",
                                  }}
                                >
                                  26.
                                </span>
                                <span style={{ paddingLeft: "11%" }}>
                                  <span style={pink}>
                                    <span>main</span>
                                  </span>
                                </span>
                                <br />
                                <span
                                  style={{
                                    textWrap: "nowrap",
                                    display: "inline-block",
                                    userSelect: "none",
                                  }}
                                >
                                  27.
                                </span>
                                <span style={{ paddingLeft: "11%" }}>
                                  <span style={pink}>title=</span>
                                  <span style={green}>"warning.main"</span>
                                </span>
                                <br />
                                <span
                                  style={{
                                    textWrap: "nowrap",
                                    display: "inline-block",
                                    userSelect: "none",
                                  }}
                                >
                                  28.
                                </span>
                                <span style={{ paddingLeft: "6%" }}>
                                  <span style={pink}>{closeTag}</span>
                                  <br />
                                </span>
                              </span>
                            </span>
                            <span>
                              <span
                                style={{
                                  textWrap: "nowrap",
                                  display: "inline-block",
                                  userSelect: "none",
                                }}
                              >
                                29.
                              </span>
                              <span style={{ paddingLeft: "2%" }}>
                                <span style={{ paddingLeft: "5%" }}>
                                  <span style={pink}>{leftArrow}</span>
                                  <span style={pink}>
                                    h <br />
                                  </span>
                                </span>
                                <span>
                                  <span
                                    style={{
                                      textWrap: "nowrap",
                                      display: "inline-block",
                                      userSelect: "none",
                                    }}
                                  >
                                    30.
                                  </span>
                                  <span style={{ paddingLeft: "11%" }}>
                                    <span style={({ paddingLeft: "2%" }, pink)}>
                                      bgcolor=
                                    </span>
                                    <span style={green}>"warning.light"</span>
                                    <br />
                                  </span>
                                </span>
                                <span>
                                  <span
                                    style={{
                                      textWrap: "nowrap",
                                      display: "inline-block",
                                      userSelect: "none",
                                    }}
                                  >
                                    31.
                                  </span>
                                  <span style={{ paddingLeft: "11%" }}>
                                    <span style={pink}>data=</span>
                                    <span style={pink}>{leftObject}</span>
                                  </span>
                                </span>
                                <br />
                                <span>
                                  <span
                                    style={{
                                      textWrap: "nowrap",
                                      display: "inline-block",
                                      userSelect: "none",
                                    }}
                                  >
                                    32.
                                  </span>
                                  <span style={{ paddingLeft: "16%" }}>
                                    <span style={pink}>color:</span>
                                    <span style={{ paddingLeft: "2%" }}>
                                      <span style={green}>'#ffd666</span>
                                      <br />
                                    </span>
                                  </span>
                                </span>
                                <span
                                  style={{
                                    textWrap: "nowrap",
                                    display: "inline-block",
                                    userSelect: "none",
                                  }}
                                >
                                  33
                                </span>
                                <span style={{ paddingLeft: "16%" }}>
                                  <span style={pink}>label:</span>
                                  <span style={{ paddingLeft: "2%" }}>
                                    <span style={green}>'Gold-4'</span>
                                    <br />
                                  </span>
                                </span>

                                <span
                                  style={{
                                    textWrap: "nowrap",
                                    display: "inline-block",
                                    userSelect: "none",
                                  }}
                                >
                                  34.
                                </span>

                                <span style={{ paddingLeft: "16%" }}>
                                  <span style={pink}>{rightObject}</span>
                                </span>
                                <br />
                                <span
                                  style={{
                                    textWrap: "nowrap",
                                    display: "inline-block",
                                    userSelect: "none",
                                  }}
                                >
                                  35.
                                </span>
                                <span style={{ paddingLeft: "11%" }}>
                                  <span style={pink}>
                                    <span>main</span>
                                  </span>
                                </span>
                                <br />
                                <span
                                  style={{
                                    textWrap: "nowrap",
                                    display: "inline-block",
                                    userSelect: "none",
                                  }}
                                >
                                  36
                                </span>
                                <span style={{ paddingLeft: "11%" }}>
                                  <span style={pink}>title=</span>
                                  <span style={green}>"warning.main"</span>
                                </span>
                                <br />
                                <span
                                  style={{
                                    textWrap: "nowrap",
                                    display: "inline-block",
                                    userSelect: "none",
                                  }}
                                >
                                  37.
                                </span>
                                <span style={{ paddingLeft: "6%" }}>
                                  <span style={pink}>{closeTag}</span>
                                  <br />
                                </span>
                              </span>
                            </span>
                            <span>38.</span>
                            <span style={{ paddingLeft: "2%" }}>
                              <span style={{ paddingLeft: "5%" }}>
                                <span style={pink}>{leftArrow}</span>
                                <span style={pink}>
                                  h <br />
                                </span>
                              </span>
                              <span>
                                <span
                                  style={{
                                    textWrap: "nowrap",
                                    display: "inline-block",
                                    userSelect: "none",
                                  }}
                                >
                                  39.
                                </span>
                                <span style={{ paddingLeft: "11%" }}>
                                  <span style={({ paddingLeft: "2%" }, pink)}>
                                    bgcolor=
                                  </span>
                                  <span style={green}>"warning.light"</span>
                                  <br />
                                </span>
                              </span>
                              <span>
                                <span
                                  style={{
                                    textWrap: "nowrap",
                                    display: "inline-block",
                                    userSelect: "none",
                                  }}
                                >
                                  40.
                                </span>
                                <span style={{ paddingLeft: "11%" }}>
                                  <span style={pink}>data=</span>
                                  <span style={pink}>{leftObject}</span>
                                </span>
                              </span>
                              <br />
                              <span>
                                <span
                                  style={{
                                    textWrap: "nowrap",
                                    display: "inline-block",
                                    userSelect: "none",
                                  }}
                                >
                                  41.
                                </span>
                                <span style={{ paddingLeft: "16%" }}>
                                  <span style={pink}>color:</span>
                                  <span style={{ paddingLeft: "2%" }}>
                                    <span style={green}>'#ffd666</span>
                                    <br />
                                  </span>
                                </span>
                              </span>
                              <span
                                style={{
                                  textWrap: "nowrap",
                                  display: "inline-block",
                                  userSelect: "none",
                                }}
                              >
                                42
                              </span>
                              <span style={{ paddingLeft: "16%" }}>
                                <span style={pink}>label:</span>
                                <span style={{ paddingLeft: "2%" }}>
                                  <span style={green}>'Gold-4'</span>
                                  <br />
                                </span>
                              </span>

                              <span
                                style={{
                                  textWrap: "nowrap",
                                  display: "inline-block",
                                  userSelect: "none",
                                }}
                              >
                                43.
                              </span>

                              <span style={{ paddingLeft: "16%" }}>
                                <span style={pink}>{rightObject}</span>
                              </span>
                              <br />
                              <span
                                style={{
                                  textWrap: "nowrap",
                                  display: "inline-block",
                                  userSelect: "none",
                                }}
                              >
                                44.
                              </span>
                              <span style={{ paddingLeft: "11%" }}>
                                <span style={pink}>
                                  <span>main</span>
                                </span>
                              </span>
                              <br />
                              <span
                                style={{
                                  textWrap: "nowrap",
                                  display: "inline-block",
                                  userSelect: "none",
                                }}
                              >
                                45.
                              </span>
                              <span style={{ paddingLeft: "11%" }}>
                                <span style={pink}>title=</span>
                                <span style={green}>"warning.main"</span>
                              </span>
                              <br />
                              <span
                                style={{
                                  textWrap: "nowrap",
                                  display: "inline-block",
                                  userSelect: "none",
                                }}
                              >
                                46.
                              </span>
                              <span style={{ paddingLeft: "6%" }}>
                                <span style={pink}>{closeTag}</span>
                                <br />
                              </span>
                              <span>47.</span>
                              <span style={{ paddingLeft: "2%" }}>
                                <span>{leftArrow}</span>
                                <span>No display Name</span>
                                <span>{rightArrow}</span>
                              </span>
                            </span>
                          </div>
                        </div>
                      </code>
                    </pre>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Color;
