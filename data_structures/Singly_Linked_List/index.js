const SinglyLinkedList = require('./SinglyLinkedList');

let list = new SinglyLinkedList();

list.push('2');
list.push('3');
list.push('4');

list.reverse();

list.print();
