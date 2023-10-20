export function printHeart(rows, cols, row =0, col= 0) {
    // base case
    if (row >= rows) {
        return;
    }

    // print spaces
    if (col < rows - row - 1 || col >= rows + row) {
        process.stdout.write(" ");
    } else {
        process.stdout.write("♥");
    }

    // move to next column
    if (col + 1 < cols) {
        printHeart(rows, cols, row, col + 1);
    } else {
        // move to next row
        process.stdout.write("\n");
        printHeart(rows, cols, row + 1, 0);
    }
}

