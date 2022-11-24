class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  insert(element) {
    this.values.push(element);
    let idx = this.values.length - 1;

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      if (this.values[parentIdx] < this.values[idx]) {
        // swap
        [this.values[parentIdx], this.values[idx]] = [
          this.values[idx],
          this.values[parentIdx],
        ];
        idx = parentIdx;
      } else break;
    }
  }

  heapify(arr = this.values, N = this.values.length, i = 0) {
    var largest = i; // Initialize largest as root
    var l = 2 * i + 1; // left = 2*i + 1
    var r = 2 * i + 2; // right = 2*i + 2

    // If left child is larger than root
    if (l < N && arr[l] > arr[largest]) largest = l;

    // If right child is larger than largest so far
    if (r < N && arr[r] > arr[largest]) largest = r;

    // If largest is not root
    if (largest != i) {
      var swap = arr[i];
      arr[i] = arr[largest];
      arr[largest] = swap;

      // Recursively heapify the affected sub-tree
      this.heapify(arr, N, largest);
    }
  }

  extractMax() {
    const last = this.values.length - 1;
    [this.values[0], this.values[last]] = [this.values[last], this.values[0]];
    const element = this.values.pop();

    this.heapify();

    return element;
  }
}

let heap = new MaxBinaryHeap();

heap.insert(55);
heap.insert(1);
heap.insert(100);
heap.insert(45);

heap.extractMax();
heap.extractMax();
heap.extractMax();

console.log(heap.values);
