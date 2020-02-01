import React from "react"
import BoardRow from './BoardRow'

export default function BoardTable({boardSize}) {
    // console.log('BoardTable()')

    let table = [];
    for (let y = 0; y < boardSize; y++) {
        table.push(
            <div key={y} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <BoardRow y={y} boardSize={boardSize} />
            </div>
        );
    }

    return table;
}