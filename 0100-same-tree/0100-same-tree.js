/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {

    // Dono null hain
    if (p === null && q === null) {
        return true;
    }

    // Ek null hai aur dusra nahi
    if (p === null || q === null) {
        return false;
    }

    // Values different hain
    if (p.val !== q.val) {
        return false;
    }

    // Left aur Right subtree compare karo
    return isSameTree(p.left, q.left) &&
           isSameTree(p.right, q.right);
};