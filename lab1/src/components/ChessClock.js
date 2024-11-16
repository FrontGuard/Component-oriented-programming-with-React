import React, { useState, useEffect } from "react";
import Clock from "./Clock";
import ControlButtons from "./ControlButtons";

const ChessClock = () => {
    const [player1Time, setPlayer1Time] = useState(300); // 5 хвилин
    const [player2Time, setPlayer2Time] = useState(300); // 5 хвилин
    const [currentPlayer, setCurrentPlayer] = useState(1);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (!isRunning) return;

        const interval = setInterval(() => {
            setCurrentPlayer((prev) => {
                if (prev === 1) {
                    setPlayer1Time((time) => Math.max(time - 1, 0));
                } else {
                    setPlayer2Time((time) => Math.max(time - 1, 0));
                }
                return prev;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [isRunning]);

    const handleStart = () => setIsRunning(true);
    const handlePause = () => setIsRunning(false);
    const handleReset = () => {
        setPlayer1Time(300);
        setPlayer2Time(300);
        setIsRunning(false);
    };

    const handleSwitch = () => {
        setCurrentPlayer((prev) => (prev === 1 ? 2 : 1));
    };

    return (
        <div style={{ textAlign: "center", maxWidth: "400px", margin: "0 auto" }}>
            <Clock time={player1Time} label="Гравець 1" />
            <Clock time={player2Time} label="Гравець 2" />
            <button onClick={handleSwitch} style={{ marginBottom: "20px" }}>
                Передати хід
            </button>
            <ControlButtons onStart={handleStart} onPause={handlePause} onReset={handleReset} />
        </div>
    );
};

export default ChessClock;
