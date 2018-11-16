//题目描述
//给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function EntryNodeOfLoop(pHead)
{
    // write code here
    if (!pHead || !pHead.next) {
        return null;
    }
    var head1 = pHead.next;
    var head2 = pHead.next.next;
    while(head1 !== head2) {
        if (!head2 || !head2.next) {
            return null;
        } 
        head1 = head1.next;
        head2 = head2.next.next;       
    }
    head1 = pHead;
    while(head1 !== head2) {
        head1 = head1.next;
        head2 = head2.next;
    }
    return head1;
}