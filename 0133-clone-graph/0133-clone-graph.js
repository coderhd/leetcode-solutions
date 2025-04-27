/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    const cloneMap = {};
    function dfs(node) {
        if (cloneMap[node.val]) return cloneMap[node.val];
        const clone = {
            val: node.val,
            neighbors: [],
        };
        cloneMap[node.val] = clone;
        for (const neighbor of node.neighbors) {
            clone.neighbors.push(dfs(neighbor));
        }
        return clone;
    }
    if (node) {
        return dfs(node)
    }
};