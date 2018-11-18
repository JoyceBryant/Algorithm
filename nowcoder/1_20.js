// 1 题目描述
// 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
function Find(target, array)
{
    // write code here
    if (array.length == 0 || array[0].length == 0) {
        return null;
    }
    var i = array.length - 1;
    var j = 0;
    var currentValue = null;
    while (true) {        
        if (array[i] == undefined || array[i][j] == undefined) {
            return false;
        }
        currentValue =  array[i][j];
        if (currentValue == target) {
            return true;
        } else if (currentValue < target) {
            j++;
        } else if (currentValue > target) {
            i--;
        }
    }
}

// 2 题目描述
// 请实现一个函数，将一个字符串中的每个空格替换成“%20”。例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。
function replaceSpace(str)
{
    // write code here
    debugger
    if (str.length == 0) {
        return str;
    }
    var strArr = str.split('');
    for(var i=0; i<strArr.length; i++) {
        if (strArr[i] === ' ') {
            strArr[i] = '%20';
        }
    }
    return strArr.join('');
}

// 3 题目描述
// 输入一个链表，按链表值从尾到头的顺序返回一个ArrayList。
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head)
{
    // write code here
    if (!head) {
        return [];
    }
    var point = head;
    var result = [];
    while(point) {
        result.push(point.val);
        point = point.next;
    }
    return result.reverse();
}

// 4 题目描述
// 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin)
{
    // write code here    
    if (pre.length == 0) {
        return null;
    } else if (pre.length == 1) {
        return new TreeNode(pre[0]);
    }
    var root = pre[0];
    var rootIndex = vin.indexOf(root);
    var node = new TreeNode(root);
    var leftVin = vin.slice(0, rootIndex);
    var rightVin = vin.slice(rootIndex+1, vin.length);
    node.left = reConstructBinaryTree(pre.slice(1, leftVin.length+1), leftVin);
    node.right = reConstructBinaryTree(pre.slice(leftVin.length+1, pre.length), rightVin);
    return node;
}


// 5 题目描述
// 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。
// import java.util.Stack;

// public class Solution {
//     Stack<Integer> stack1 = new Stack<Integer>();
//     Stack<Integer> stack2 = new Stack<Integer>();
    
//     public void push(int node) {
//         stack1.push(node);
//     }
    
//     public int pop() {
//         while(!stack1.empty()) {
//             stack2.push(stack1.pop());
//         }        
//         Integer result = stack2.pop();
//         while(!stack2.empty()) {
//             stack1.push(stack2.pop());
//         }
//         return result;
//     }
// }

// 6 题目描述
// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。 输入一个非减排序的数组的一个旋转，输出旋转数组的最小元素。 例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。 NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。
function minNumberInRotateArray(rotateArray)
{
    // write code here
    if (rotateArray.length == 0) {
        return 0;
    }
    var min = rotateArray[0];
    for(var i =1; i<rotateArray.length;i++) {
        if(rotateArray[i] < min) {
            return rotateArray[i];
        }
    }
    return min;
}

// 7 题目描述
// 大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0）。
// n<=39
function Fibonacci(n)
{
    // write code here
    if (n <= 0) {
        return 0;
    }
    if (n == 1 || n == 2) {
        return 1;
    }
    var pre = 1;
    var result = 1;
    var cur = 3;
    while(cur <= n) {
        var tmp = result;
        result += pre;
        pre = tmp;
        cur++;
    }
    return result;
}

// 8 题目描述
// 一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。
function jumpFloor(number)
{
    // write code here
    if (number<=0) {
        return 0;
    }
    if (number ==1 || number == 2) {
        return number;
    }
    var pre1 = 1;
    var pre2 = 2;
    var cur = 3;
    var result = 0;
    while(cur<= number) {
        result = pre1 + pre2;
        pre1 = pre2;
        pre2 = result;
        cur++;
    }
    return result;
}

// 9 题目描述
// 输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。
//计算机中的运算使用补码进行。一个二进制数减一后，相当于把从右向左的第一个1右边的所有0变成1，而这个1变成0，在于原数进行与操作，相当于把原数最右边的1变成了0。
//将该操作循环执行n次， 就会将除了符号位中的所有1变成0，n即为这个数的二进制形式中1的个数
function NumberOf1(n)
{
    // write code here
    if (n == 0) {
        return 0;
    }
    var count = 0;
    while(n != 0) {
        n = n & (n-1);
        count++
    }
    return count
}

// 10 题目描述
// 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。
function reOrderArray(array)
{
    // write code here
    if (!array || array.length <= 1) {
        return array;
    }
    var sin = [];
    var dou = [];
    array.forEach(function(el){
        if (el % 2) {
            sin.push(el);
        } else {
            dou.push(el)
        }
    })
    sin.push(dou);
    return sin;
}

// 11 题目描述
// 输入一个链表，输出该链表中倒数第k个结点。
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k)
{
    // write code here
    if (!head || k <= 0) {
        return null;
    }
    var point1 = head;
    
    var count = k-1;
    
    while(count) {
        point1 = point1.next;
        if (point1 == null) {
            return null;
        }
        count--;
    }
    var point2 = head;
    while(point1.next) {
        point1 = point1.next;
        point2 = point2.next;
    }
    return point2;    
}

// 12 题目描述
// 输入一个链表，反转链表后，输出新链表的表头。
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead)
{
    // write code here
    if (pHead == null || pHead.next == null) {
        return pHead;
    }    
    var point = pHead.next;
    var point2 = pHead;
    while(point != null) {
        var next = point.next;
        point.next = point2;
        if (point2 == pHead) {
            point2.next = null;
        }
        point2 = point;
        point = next;
    }
    return point2;
}

// 13 题目描述
// 输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2)
{
    // write code here    
    var resultHead = new ListNode(0);
    var point = resultHead;
    while(true) {
        if (pHead1 != null && pHead2 != null) {
            if (pHead1.val <= pHead2.val) {
                point.next = pHead1;
                pHead1 = pHead1.next;
            } else {
                point.next = pHead2;
                pHead2 = pHead2.next;
            }
            point = point.next;
        } else if (pHead1 == null && pHead2 == null){
            break;
        } else {
            var tail = pHead1 != null ? pHead1 : pHead2;
            while(tail) {
                point.next = tail;
                point = point.next;
                tail = tail.next;
            }
            break;
        }
    }
    return resultHead.next;
}

// 14 题目描述
// 操作给定的二叉树，将其变换为源二叉树的镜像。
// 输入描述:
// 二叉树的镜像定义：源二叉树 
//     	    8
//     	   /  \
//     	  6   10
//     	 / \  / \
//     	5  7 9 11
//     	镜像二叉树
//     	    8
//     	   /  \
//     	  10   6
//     	 / \  / \
//     	11 9 7  5
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Mirror(root)
{
    // write code here
    if (!root) {
        return root;
    }
    var queue = [root];
    while(queue.length) {
        let level = [];
        queue.forEach(function(el) {
            let tmp = el.left;
            el.left = el.right;
            el.right = tmp;
            if (el.left) {
                level.push(el.left);
            }
            if (el.right) {
                level.push(el.right);
            }
        })        
        queue = level;
    }
    return root;
}

// 15 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，例如，如果输入如下4 X 4矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.
function printMatrix(matrix)
{
    // write code here
    debugger
    var result = [];
    if (!matrix || matrix.length == 0 || matrix[0].length == 0) {
        return [];
    }
    var row = 0;
    var col = 0;    
    while(row*2<matrix.length && col*2 < matrix[0].length) {
        let i = row;
        let j = col;
        while(j<matrix[i].length - col - 1) {            
            result.push(matrix[i][j]);
            j++;
        }
        if (matrix.length - 2*row == 1) {
            result.push(matrix[i][j])
        } else {
            while(i<matrix.length - row - 1) {            
                result.push(matrix[i][j]);
                i++;
            }
        }
        if (matrix.length - 2* row > 1) {
            if (matrix[row].length - 2*col == 1) {
                result.push(matrix[i][j]);
            } else {
                while(j > col) {                        
                    result.push(matrix[i][j]);
                    j--;
                }
            }
        }

        if (matrix[row].length - 2 * col > 1) {
            while(i > row) {            
                result.push(matrix[i][j]);
                i--
            }
        }
        row++;
        col++;
    }
    return result;
}

// 16 题目描述
// 定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。
var stack = [];
var minStack = [];
function push(node)
{
    // write code here
    stack.push(node);
    if (minStack.length == 0 || node < minStack[minStack.length-1]) {
        minStack.push(node);
    } else {
        minStack.push(minStack[minStack.length-1]);
    }
}
function pop()
{
    // write code here    
    minStack.pop();
    return stack.pop();
}
function top()
{
    // write code here
    return stack[stack.length-1]
}
function min()
{
    // write code here
    return minStack[minStack.length-1]
}

// 17 题目描述
// 输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否可能为该栈的弹出顺序。假设压入栈的所有数字均不相等。例如序列1,2,3,4,5是某栈的压入顺序，序列4,5,3,2,1是该压栈序列对应的一个弹出序列，但4,3,5,1,2就不可能是该压栈序列的弹出序列。（注意：这两个序列的长度是相等的）
function IsPopOrder(pushV, popV)
{
    // write code here
    var stack = [];
    var pushIndex = 0;
    for(var i=0; i<popV.length;i++) {
        while (stack.length == 0 || stack[stack.length-1] != popV[i]) {
            if (pushIndex == pushV.length) {
                return false;
            }
            stack.push(pushV[pushIndex]);        
            pushIndex++;
        }
        stack.pop();
    }
    return true;
}

// 18 题目描述
// 从上往下打印出二叉树的每个节点，同层节点从左至右打印。
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root)
{
    // write code here
    if (!root) {
        return [];
    }
    var queue = [root];
    var result = [];
    while(queue.length) {        
        var level = [];
        queue.forEach(function(node){
            result.push(node.val);
            if (node.left) {
                level.push(node.left);
            }
            if (node.right) {
                level.push(node.right);
            }
        })
        queue = level;
    }
    return result;
}

// 19 题目描述
// 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。
function VerifySquenceOfBST(sequence, start, end)
{
    // write code here
    if (sequence.length < 1) {
        return false;
    }
    if (start == undefined) {
        start = 0;
        end = sequence.length-1;
    }
    var root = sequence[end];
    var behindIndex = start;
    while(sequence[behindIndex] < root) {
        behindIndex++;
    }
    if(behindIndex == sequence.length-1) {
        return true;
    }
    var preIndex = behindIndex-1;
    var behindIndex2 = behindIndex;
    while(behindIndex2 < end) {
        if(sequence[behindIndex2] <= root) {
            return false;
        }
        behindIndex2++;
    }    
    var left = preIndex > start ? VerifySquenceOfBST(sequence, start, preIndex): true;
    var right = end-behindIndex > 1 ? VerifySquenceOfBST(sequence, behindIndex, end-1) : true;
    return left && right;
}

// 20 题目描述
// 输入一颗二叉树的跟节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。(注意: 在返回值的list中，数组长度大的数组靠前)
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function FindPath(root, expectNumber)
{
    // write code here
       // write code here
    if (!root) {
        return [];
    }
    var stack = [];
    var pathStack = [];
    var point = root;
    var flag = null;
    while(point || stack.length) {
        while(point) {
            stack.push(point);
            point = point.left;
        }
        var top = stack[stack.length-1];
        if (top && !top.left && !top.right) {
            var sum = stack.reduce(function(accumulator, currentValue){
                return accumulator + currentValue.val;
            }, 0)
            
            if (sum == expectNumber) {
                pathStack.push(Array.from(stack, el => {return el.val}));
            }                      
        }      
        point = stack.pop();        
        top = stack[stack.length-1];
        if (top && point == top.left) {            
            point = top.right;
        } else {            
            point = null;
        }   
    }
    return pathStack.sort(function(el1, el2){
        return el1.length < el2.length
    })
}