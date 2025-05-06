import React from "react";
import { useEffect, useState } from "react";
import { boardInit, checkGameOver, pressDown, pressLeft, pressRight, pressUp } from "./gameLogic";
import { functions } from "underscore";

function Grid() {
    const [grid, setGrid] = useState(boardInit());
    const [gameOver, setGameOver] = useState("continue");

    console.log(grid);

    function onMove(move) {
        const newGrid = move(grid);
        setGrid(newGrid);
        const newGameStatus = checkGameOver(grid);
        setGameOver(newGameStatus);
    }
    console.log(gameOver);
     
    function onLeftArrow() {
        onMove(pressLeft);
    }
    function onUpArrow() {
        onMove(pressUp);
    }
    function onRightArrow() {
        onMove(pressRight);
    }
    function onDownArrow() {
        onMove(pressDown);
    }

    return <div className="grid-div">
        {grid.map((row, rowID) => (
            <div className="row-grid">
                {row.map((cell, cellID) => (
                    <div className="cell-grid">
                        {cell}
                    </div>
                ))}
            </div>
        ))}
        <button onClick={onLeftArrow}  disabled={gameOver === "lost" ? 1 : 0}>Move Left</button>
        <button onClick={onUpArrow}    disabled={gameOver ===  "lost" ? 1 : 0}>Move Up</button>
        <button onClick={onRightArrow} disabled={gameOver === "lost" ? 1 : 0}>Move Right</button>
        <button onClick={onDownArrow}  disabled={gameOver === "lost" ? 1 : 0}>Move Down</button>
    </div>
}
export default Grid;