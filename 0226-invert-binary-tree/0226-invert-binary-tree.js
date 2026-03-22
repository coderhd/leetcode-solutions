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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root) return root;

    // Swap the values
    const tmp = root.left;
    root.left = root.right;
    root.right = tmp;

    // Invert reecursively on both sides
    invertTree(root.left);
    invertTree(root.right);

    return root;
};