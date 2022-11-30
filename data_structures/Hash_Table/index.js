class HashTable {
  constructor(size = 17) {
    this.keyMap = new Array(size);
  }

  hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this.hash(key);
    if (!this.keyMap[index]) this.keyMap[index] = [];
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this.hash(key);
    const row = this.keyMap[index];
    if (!row) return undefined;
    for (let i = 0; i < row.length; i++) {
      if (row[i][0] === key) return row[i][1];
    }
    return undefined;
  }

  keys() {
    const keys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          keys.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keys;
  }

  values() {
    const values = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          values.push(this.keyMap[i][j][1]);
        }
      }
    }
    return values;
  }
}

const hashTable = new HashTable();

hashTable.set('red', '#FF0000');
hashTable.set('green', '#00FF00');
hashTable.set('blue', '#0000FF');

console.log(hashTable.values()); // [ '#00FF00', '#0000FF', '#FF0000' ]
