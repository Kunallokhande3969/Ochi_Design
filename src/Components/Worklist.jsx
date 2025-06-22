import React from "react";

const data = [
  { project: "Planetly", client: "Nina Walloch" },
  { project: "Workiz Easy", client: "Tomer Levy" },
  { project: "Premium Blend", client: "Ellen Kim" },
  { project: "Hypercare Systems", client: "Brendan Goss" },
  { project: "Officevibe", client: "Raff Labrie" },
  { project: "Orderlion", client: "Stefan Strohmer" },
  { project: "Black Book", client: "Jaci Smith" },
  { project: "Trawa Energy", client: "David Budde" },
];

const Worklist = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#F1F1F1",
        fontFamily: "sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start", 
        padding: "15px",
        boxSizing: "border-box",
        color: "Zinc(300)",
        fontSize: "1.01rem",
        
      }}
    >
      {data.map((item, index) => (
        <div
          key={index}
          style={{
            width: "100%",            
            backgroundColor: "#F1F1F1",
            color: "black",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "19px 55px",
            boxSizing: "border-box",
            borderBottom: "1px solid #ddd",
          }}
        >
          <a
            href="#"
            style={{
              textDecoration: "underline",
              color: "black",
              flex: 1,
            }}
          >
            {item.project}
          </a>
          <span style={{ flex: 1, textAlign: "center" }}>{item.client}</span>
          <a
            href="#"
            style={{
              textDecoration: "underline",
              color: "black",
              flex: 1,
              textAlign: "right",
            }}
          >
            READ
          </a>
        </div>
      ))}
    </div>
  );
};

export default Worklist;
  