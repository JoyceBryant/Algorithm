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

// 24 题目描述
// 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。
function MoreThanHalfNum_Solution(numbers)
{
    // write code here
    if(numbers.length < 1) {
        return 0;
    }
    if (numbers.length == 1) {
        return numbers[0];
    }
    var count = 1;
    var number = numbers[0];
    for (let i=1; i<numbers.length; i++) {
        let val = numbers[i];
        if (count == 0) {
            number = val;
            count = 1;
        } else if (val == number) {
            count++;
        } else {
            count--;
        }
    }
    count = 0;
    for (let i=0;i<numbers.length;i++) {
        let val = numbers[i];
        if (val == number) {
            count++;
        }
    }
    if (count > numbers.length/2) {
        return number;
    }
    return 0;
    /*var map = {};
    for(let i = 0;i<numbers.length;i++) {
        let val = numbers[i];
        if (map[val]) {
            map[val] += 1;
            if (map[val] > numbers.length/2) {
                return val;
            }
        } else {
            map[val] = 1;
        }
    }
    return 0;*/
}

// 25 题目描述
// HZ偶尔会拿些专业问题来忽悠那些非计算机专业的同学。今天测试组开完会后,他又发话了:在古老的一维模式识别中,常常需要计算连续子向量的最大和,当向量全为正数的时候,问题很好解决。但是,如果向量中包含负数,是否应该包含某个负数,并期望旁边的正数会弥补它呢？例如:{6,-3,-2,7,-15,1,2,2},连续子向量的最大和为8(从第0个开始,到第3个为止)。给一个数组，返回它的最大连续子序列的和，你会不会被他忽悠住？(子向量的长度至少是1)
function FindGreatestSumOfSubArray(array)
{
    // write code here
    if (array.length == 0) {
        return 0;
    }
    if (array.length == 1) {
        return array[0];
    }
    let sum = array[0];
    let max = array[0];
    for (let i=1; i<array.length; i++) {
        if (sum <= 0) {
            sum = array[i];
        } else {
            sum += array[i];
        }
        if (sum > max) {
            max = sum;
        }
    }
    return max;
}
