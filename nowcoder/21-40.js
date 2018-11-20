// 21 题目描述
// 输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，另一个特殊指针指向任意一个节点），返回结果为复制后复杂链表的head。（注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）
/*function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}*/
function Clone(pHead)
{
 // write code here
    if (!pHead) {
        return pHead;
    }
    var point = pHead;
    while(point) {        
        var node = new RandomListNode(point.label);
        node.next = point.next;
        point.next = node;
        point = node.next;
    }
    point = pHead;    

    while(point) {   
        if (point.random) {
            point.next.random = point.random.next;    
        }        
        point = point.next.next;
    }
    point = pHead;
    var resultHead = new RandomListNode(0);
    var point2 = resultHead;
    while(point) {
        point2.next = point.next;
        point2 = point2.next;
        point = point2.next;
    }
    return resultHead.next;
}

// 22 题目描述
// 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。要求不能创建任何新的结点，只能调整树中结点指针的指向。
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Convert(pRootOfTree)
{
    // write code here
    if (!pRootOfTree) {
        return pRootOfTree;
    }
    var stack = [];
    var point = pRootOfTree;
    var head = null;
    var last = null;
    while(stack.length || point) {
        while(point) {
            stack.push(point);
            point = point.left;            
        }        
        point = stack.pop();
        if (!head) {
            head = point;
        }
        if (last) {
            last.right = point;
            point.left = last;
            last = point;
        } else {
            last = point;
        }
        point = point.right;
    }
    return head;
}

// 23 题目描述
// 输入一个字符串,按字典序打印出该字符串中字符的所有排列。例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。
function Permutation(str)
{
    // write code here
    if (str.length == 0) {
        return str;
    }
    var map = {};
    var arr = str.split('');
    func(arr, 0, map);
    return Object.keys(map).sort();
}
function func(arr, start, map) {
    if (start == arr.length) {
        map[arr.join('')] = 1;
    } else {
        for (var i=start;i<arr.length;i++) {
            swap(arr, start, i);
            func(arr, start+1, map);
            swap(arr, start, i);
        }
    }
}
function swap(arr, i, j) {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}
