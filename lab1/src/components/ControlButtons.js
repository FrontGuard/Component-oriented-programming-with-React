import React from "react";

const ControlButtons = ({ onStart, onPause, onReset }) => {
    return (
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "20px" }}>
            <button onClick={onStart}>Старт</button>
            <button onClick={onPause}>Пауза</button>
            <button onClick={onReset}>Скинути</button>
        </div>
    );
};

export default ControlButtons;
