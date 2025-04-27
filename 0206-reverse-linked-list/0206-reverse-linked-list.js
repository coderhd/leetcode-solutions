/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // Iterative Way
    // let prev = null;
    // let curr = head;
    // while(curr) {
    //     const next = curr.next;
    //     curr.next = prev;
    //     prev = curr;
    //     curr = next;
    // }
    // return prev;

    // Recursive Way
    if (!head) return null;

    let newHead = head;

    if (head.next) {
        newHead = reverseList(head.next);
        head.next.next = head;
    }
    head.next = null;
    return newHead;
};