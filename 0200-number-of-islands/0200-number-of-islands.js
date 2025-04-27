/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (grid.length === 0) return 0;

    const rows = grid.length;
    const cols = grid[0].length;
    const visit = new Set();
    let islands = 0;

    function bfs(r,c) {
        const queue = [[r,c]];
        visit.add(`${r},${c}`);

        while(queue.length > 0) {
            const [row, col] = queue.shift();
            const directions = [
                [1,0], [-1,0], [0,1], [0,-1]
            ];
            for (let [dr,dc] of directions) {
                const dirRow = row + dr;
                const dirCol = col + dc;
                const key = `${dirRow},${dirCol}`;

                if ((dirRow >= 0 && dirRow < rows)
                && (dirCol >= 0 && dirCol < cols)
                && grid[dirRow][dirCol] === "1"
                && !visit.has(`${key}`)
                ) {
                    queue.push([dirRow, dirCol]);
                    visit.add(`${key}`);
                }
            }
        }
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === "1" && !visit.has(`${r},${c}`)) {
                bfs(r, c);
                islands += 1;
            }
        }
    }
    return islands;
};