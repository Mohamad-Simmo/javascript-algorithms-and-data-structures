const { Node, SinglyLinkedList } = require('./SinglyLinkedList');

let list = new SinglyLinkedList();

list.push('hello');
list.push(' ');
list.push('world');
list.push('Goodbye');

console.log(list.head);
