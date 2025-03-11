console.log(chess(4))
console.log(chess(5))
console.log(chess(8))

function chess(number) {
    const size = number;
    const board = [];

    for (line = 0; line < size; line++) {
        board[line] = [];
        for (column = 0; column < size; column++) {
            if ((line + column) % 2 === 0) {
                board[line][column] = ' ';
            } else {
                board[line][column] = "#"
            }
        }
    }
    return board.map(line => line.join('')).join('\n');
}