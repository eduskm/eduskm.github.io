import { random } from "underscore";

const rows = 4, cols = 4;

export function checkGameOver(board) {
    for (let r = 0; r < rows; r++)
        for (let c = 0; c < cols; c++) {
            if (board[r][c] === "") return "continue";
            if (board[r][c] === 2048) return "won";
            if (c < cols - 1 && board[r][c] === board[r][c + 1]) return "continue";
            if (r < rows - 1 && board[r][c] === board[r + 1][c]) return "continue";
        }
    return "lost";
}

export function pressLeft(board) {
    const newBoard = board.map(row => [...row]); 
    for (let r = 0; r < rows; r++) {
        let pozitieValabila = 0;
        for (let c = 0; c < cols; c++) {
            if (newBoard[r][c] !== "") {
                if (pozitieValabila !== c) {
                    newBoard[r][pozitieValabila] = newBoard[r][c];
                    newBoard[r][c] = "";
                }
                pozitieValabila++;
            }
        }

        for (let c = 0; c < cols - 1; c++) {
            if (newBoard[r][c] === newBoard[r][c+1] && newBoard[r][c] !== "") {
                newBoard[r][c] *= 2;
                newBoard[r][c+1] = "";
            }
        }


        
    }
    if (!isFull(newBoard)) 
        randomInput(newBoard, 1); 
    return newBoard;
}

export function pressRight(board) {
    const newBoard = board.map(row => [...row]); 
    for (let r = rows - 1; r >= 0; r--) {
        let pozitieValabila = 3;
        for (let c = cols - 1; c >= 0; c--) {
            if (newBoard[r][c] !== "") {
                if (pozitieValabila !== c) {
                    newBoard[r][pozitieValabila] = newBoard[r][c];
                    newBoard[r][c] = "";
                }
                pozitieValabila--;
            }
        }
        for (let c = cols - 1; c >= 1; c--) {
            if (newBoard[r][c] === newBoard[r][c - 1] && newBoard[r][c] !== "") {
                newBoard[r][c] *= 2;
                newBoard[r][c - 1] = "";
            }
        }
        
    }
    if (!isFull(newBoard)) 
        randomInput(newBoard, 1); 
    return newBoard;
}

export function pressUp(board) {
    const newBoard = board.map(row => [...row]); 
    for (let c = 0; c < cols; c++) {
        let pozitieValabila = 0;
        for (let r = 0; r < rows; r++) {
            if (newBoard[r][c] !== "") {
                if (pozitieValabila !== r) {
                    newBoard[pozitieValabila][c] = newBoard[r][c];
                    newBoard[r][c] = "";
                }
                pozitieValabila++;
            }
        }

        for (let r = 0; r < rows - 1; r++) {
            if (newBoard[r][c] === newBoard[r+1][c] && newBoard[r][c] !== "") {
                newBoard[r][c] *= 2;
                newBoard[r+1][c] = "";
            }
        } 
        
    }
    if (!isFull(newBoard)) 
        randomInput(newBoard, 1); 
    return newBoard;
}

export function pressDown(board) {
    const newBoard = board.map(row => [...row]); 
    for (let c = 0; c < cols; c++) {
        let pozitieValabila = 3;
        for (let r = rows -1; r >= 0; r--) {
            if (newBoard[r][c] !== "") {
                if (pozitieValabila !== r) {
                    newBoard[pozitieValabila][c] = newBoard[r][c];
                    newBoard[r][c] = "";
                }
                pozitieValabila--;
            }
        }

        for (let r = rows - 1; r >= 1; r--) {
            if (newBoard[r][c] === newBoard[r-1][c] && newBoard[r][c] !== "") {
                newBoard[r][c] *= 2;
                newBoard[r-1][c] = "";
            }
        } 

        
    }
    if (!isFull(newBoard)) 
        randomInput(newBoard, 1); 
    return newBoard;
}

function isFull(board) {
    for (let r = 0; r < rows; r++)
        for (let c = 0; c < cols; c++)
            if (board[r][c] === "") return false;
    return true;
}

function randomInput(board, count) {
    let tries = 0;
    while(tries < count) {
        let luckyRow = Math.floor(Math.random() * 4);
        let luckyCol = Math.floor(Math.random() * 4);
        if(board[luckyRow][luckyCol] === "") {
            board[luckyRow][luckyCol] = Math.random() < 0.9 ? 2 : 4;
            tries++;
        }
    }
}

export function boardInit() {
    let board = [];

    
    for (let row = 0; row < rows; row++) {
        let rowArray = []
        for (let col = 0; col < cols; col++) {
            rowArray.push('');
        }
        board.push(rowArray);
    }
    randomInput(board, 2);
    return board;
}
