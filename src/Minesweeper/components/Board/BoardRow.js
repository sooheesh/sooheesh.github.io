import React from "react";
import BoardSquare from './BoardSquare';

export default function BoardRow({boardSize, y}) {
    // console.log('BoardRow()')

    let row = [];
    for (let x = 0; x < boardSize; x++) {
        row.push(
            <BoardSquare key={x} y={y} x={x}/>
        );
    }

    return row
}