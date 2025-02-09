/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    let slow = head
    let fast = head
    var reverse = null;
    var max = 0;
    while(fast){
        fast = fast.next.next
        const temp = slow.next
        slow.next = reverse
        reverse = slow
        slow = temp
    }
    while(reverse){
        max = Math.max(slow.val +reverse.val, max)
        slow = slow.next
        reverse = reverse.next
    }
    return max
};