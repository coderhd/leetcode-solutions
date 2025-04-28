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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    const q = [root];
    const result = [];

    while (q.length > 0) {
        const level = [];
        const qLength = q.length;
        for (let i = 0; i < qLength; i++) {
            const node = q.shift();
            if (node) {
                level.push(node.val);
                q.push(node.left);
                q.push(node.right);
            }
        }
        if (level.length > 0) {
            result.push(level);
        }
    }
    return result;
};