import { Card } from "@mui/material";
import React from "react";
import "./style.css";
function Shadow() {
  return (
    <div style={{ marginTop: "5%" }}>
      <div>
        <div style={{ display: "flex", fontSize: "14px", gap: "1%" }}>
          <p>Home</p>
          <p>/</p>
          <p style={{ fontWeight: "bold" }}>Shadow</p>
        </div>
        <br />
        <p style={{ fontSize: "16px", fontWeight: "bold" }}>Shadow</p>
      </div>
      <br />
      <div style={{ display: "grid", gap: "4%" }}>
        <div>
          <Card
            style={{
              width: "100%",
              padding: "2%",
              height: "96vh",
            }}
            className="card"
          >
            <p>Box Shadow</p>
            <br />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(6, auto)",
                rowGap: "8%",
              }}
              className="grid"
            >
              <div
                style={{
                  width: "172px",
                  height: "91px",
                  boxShadow: "none",
                  borderRadius: "6px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  fontSize: "14px",
                }}
                className="shadow"
              >
                <p>boxShadow</p>
                <p style={{ fontWeight: "bold" }}>0</p>
              </div>
              <div
                style={{
                  width: "172px",
                  height: "91px",
                  boxShadow: "0 0 0.1rem gray",
                  borderRadius: "6px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  fontSize: "14px",
                }}
                className="shadow"
              >
                <p>boxShadow</p>
                <p style={{ fontWeight: "bold" }}>1</p>
              </div>
              <div
                style={{
                  width: "172px",
                  height: "91px",
                  boxShadow: "0 0 0.2rem gray",

                  borderRadius: "6px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  fontSize: "14px",
                }}
                className="shadow"
              >
                <p>boxShadow</p>
                <p style={{ fontWeight: "bold" }}>2</p>
              </div>
              <div
                style={{
                  width: "172px",
                  height: "91px",
                  boxShadow: "0 0 0.3rem gray",
                  borderRadius: "6px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  fontSize: "14px",
                }}
                className="shadow"
              >
                <p>boxShadow</p>
                <p style={{ fontWeight: "bold" }}>3</p>
              </div>
              <div
                style={{
                  width: "172px",
                  height: "91px",
                  boxShadow: "0 0 0.4rem gray",
                  borderRadius: "6px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  fontSize: "14px",
                }}
                className="shadow"
              >
                <p>boxShadow</p>
                <p style={{ fontWeight: "bold" }}>4</p>
              </div>
              <div
                style={{
                  width: "172px",
                  height: "91px",
                  boxShadow: "0 0 0.5rem gray",

                  borderRadius: "6px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  fontSize: "14px",
                }}
                className="shadow"
              >
                <p>boxShadow</p>
                <p style={{ fontWeight: "bold" }}>5</p>
              </div>
              <div
                style={{
                  width: "172px",
                  height: "91px",
                  boxShadow: "0 0 0.6rem gray",
                  borderRadius: "6px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  fontSize: "14px",
                }}
                className="shadow"
              >
                <p>boxShadow</p>
                <p style={{ fontWeight: "bold" }}>6</p>
              </div>
              <div
                style={{
                  width: "172px",
                  height: "91px",
                  boxShadow: "0 0 0.7rem gray",
                  borderRadius: "6px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  fontSize: "14px",
                }}
                className="shadow"
              >
                <p>boxShadow</p>
                <p style={{ fontWeight: "bold" }}>7</p>
              </div>
              <div
                style={{
                  width: "172px",
                  height: "91px",
                  boxShadow: "0 0 0.8rem gray",
                  borderRadius: "6px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  fontSize: "14px",
                }}
                className="shadow"
              >
                <p>boxShadow</p>
                <p style={{ fontWeight: "bold" }}>8</p>
              </div>
              <div
                style={{
                  width: "172px",
                  height: "91px",
                  boxShadow: "0 0 0.9rem gray",
                  borderRadius: "6px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  fontSize: "14px",
                }}
                className="shadow"
              >
                <p>boxShadow</p>
                <p p style={{ fontWeight: "bold" }}>
                  9
                </p>
              </div>
              <div
                style={{
                  width: "172px",
                  height: "91px",
                  boxShadow: "0 0 1rem gray",
                  borderRadius: "6px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  fontSize: "14px",
                }}
                className="shadow"
              >
                <p>boxShadow</p>
                <p style={{ fontWeight: "bold" }}>10</p>
              </div>
              <div
                style={{
                  width: "172px",
                  height: "91px",
                  boxShadow: "0 0 1.1rem gray",
                  borderRadius: "6px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  fontSize: "14px",
                }}
                className="shadow"
              >
                <p>boxShadow</p>
                <p style={{ fontWeight: "bold" }}>11</p>
              </div>
              <div
                style={{
                  width: "172px",
                  height: "91px",
                  boxShadow: "0 0 1.2rem gray",
                  borderRadius: "6px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  fontSize: "14px",
                }}
                className="shadow"
              >
                <p>boxShadow</p>
                <p style={{ fontWeight: "bold" }}>12</p>
              </div>
              <div
                style={{
                  width: "172px",
                  height: "91px",
                  boxShadow: "0 0 1.3rem gray",
                  borderRadius: "6px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  fontSize: "14px",
                }}
                className="shadow"
              >
                <p>boxShadow</p>
                <p style={{ fontWeight: "bold" }}>13</p>
              </div>
              <div
                style={{
                  width: "172px",
                  height: "91px",
                  boxShadow: "0 0 1.4rem gray",
                  borderRadius: "6px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  fontSize: "14px",
                }}
                className="shadow"
              >
                <p>boxShadow</p>
                <p style={{ fontWeight: "bold" }}>14</p>
              </div>
              <div
                style={{
                  width: "172px",
                  height: "91px",
                  boxShadow: "0 0 1.4rem gray",
                  borderRadius: "6px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  fontSize: "14px",
                }}
                className="shadow"
              >
                <p>boxShadow</p>
                <p style={{ fontWeight: "bold" }}>15</p>
              </div>
              <div
                style={{
                  width: "172px",
                  height: "91px",
                  boxShadow: "0 0 1.5rem gray",
                  borderRadius: "6px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  fontSize: "14px",
                }}
                className="shadow"
              >
                <p>boxShadow</p>
                <p style={{ fontWeight: "bold" }}>16</p>
              </div>
              <div
                style={{
                  width: "172px",
                  height: "91px",
                  boxShadow: "0 0 1.6rem gray",
                  borderRadius: "6px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  fontSize: "14px",
                }}
                className="shadow"
              >
                <p>boxShadow</p>
                <p style={{ fontWeight: "bold" }}>17</p>
              </div>
              <div
                style={{
                  width: "172px",
                  height: "91px",
                  boxShadow: "0 0 1.6rem gray",
                  borderRadius: "6px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  fontSize: "14px",
                }}
                className="shadow"
              >
                <p>boxShadow</p>
                <p style={{ fontWeight: "bold" }}>18</p>
              </div>
              <div
                style={{
                  width: "172px",
                  height: "91px",
                  boxShadow: "0 0 1.6rem gray",
                  borderRadius: "6px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  fontSize: "14px",
                }}
                className="shadow"
              >
                <p>boxShadow</p>
                <p style={{ fontWeight: "bold" }}>19</p>
              </div>
              <div
                style={{
                  width: "172px",
                  height: "91px",
                  boxShadow: "0 0 1.6rem gray",
                  borderRadius: "6px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  fontSize: "14px",
                }}
                className="shadow"
              >
                <p>boxShadow</p>
                <p style={{ fontWeight: "bold" }}>20</p>
              </div>
              <div
                style={{
                  width: "172px",
                  height: "91px",
                  boxShadow: "0 0 1.6rem gray",
                  borderRadius: "6px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  fontSize: "14px",
                }}
                className="shadow"
              >
                <p>boxShadow</p>
                <p style={{ fontWeight: "bold" }}>21</p>
              </div>
              <div
                style={{
                  width: "172px",
                  height: "91px",
                  boxShadow: "0 0 1.6rem gray",
                  borderRadius: "6px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  fontSize: "14px",
                }}
                className="shadow"
              >
                <p>boxShadow</p>
                <p style={{ fontWeight: "bold" }}>22</p>
              </div>
              <div
                style={{
                  width: "172px",
                  height: "91px",
                  boxShadow: "0 0 1.6rem gray",
                  borderRadius: "6px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  fontSize: "14px",
                }}
                className="shadow"
              >
                <p>boxShadow</p>
                <p style={{ fontWeight: "bold" }}>23</p>
              </div>
              <div
                style={{
                  width: "172px",
                  height: "91px",
                  boxShadow: "0 0 1.6rem gray",
                  borderRadius: "6px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  fontSize: "14px",
                }}
                className="shadow"
              >
                <p>boxShadow</p>
                <p style={{ fontWeight: "bold" }}>24</p>
              </div>
            </div>
          </Card>
        </div>

        <div>
          <Card
            style={{
              width: "100%",
              padding: "2%",
              height: "236px",
            }}
            className="card"
          >
            <p>Box Shadow</p>
            <br />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(6, auto)",
                rowGap: "8%",
              }}
              className="grid"
            >
              <div
                style={{
                  width: "172px",
                  height: "91px",
                  boxShadow: "0 0 0.2rem gray",

                  borderRadius: "6px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  fontSize: "14px",
                }}
                className="shadow"
              >
                <p>boxShadow</p>
                <p style={{ fontWeight: "bold" }}>2</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Shadow;
