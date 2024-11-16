import React from "react";

const Clock = ({ time, label }) => {
    return (
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <h3>{label}</h3>
            <div style={{ fontSize: "2rem", fontWeight: "bold" }}>{time}</div>
        </div>
    );
};

export default Clock;
