/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let l1Str = '';
    let l2Str = '';

    let curr1 = l1;
    let curr2 = l2;

    do {
        l1Str = curr1.val + l1Str;
        curr1 = curr1.next;
    }
    while (curr1)
    do {
        l2Str = curr2.val + l2Str;
        curr2 = curr2.next;
    }
    while (curr2)

    const sum = BigInt(l1Str) + BigInt(l2Str);
    const sumArr = sum.toString().split('').reverse();
    const dummy = new ListNode(0);
    let current = dummy;
    sumArr.forEach((digit) => {
        current.next = new ListNode(Number(digit));
        current = current.next;
    });
    return dummy.next;
};