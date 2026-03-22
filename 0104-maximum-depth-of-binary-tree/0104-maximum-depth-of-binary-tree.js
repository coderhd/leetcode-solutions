/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    /* DFS Recursive

    if (!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
    */

    // DFS Iterative
    
    let res = 0;
    let stack = [[root, 1]];

    while(stack.length > 0) {
        const [node, depth] = stack.pop();
        if(node) {
            res = Math.max(res, depth);
            stack.push([node.left, depth + 1]);
            stack.push([node.right, depth + 1]);
        }
    }
    return res;
    

    // BFS
    // if (!root) return 0;
    // let level = 0;
    // const queue = [root];
    // while(queue.length > 0) {
    //     for (let i = 0; i < queue.length; i++) {
    //         const node = queue.shift();
    //         if (node.left) queue.push(node.left);
    //         if (node.right) queue.push(node.right);
    //     }
    //     console.log('q:', queue, level);
    //     level += 1;
    // }
    // return level;
};