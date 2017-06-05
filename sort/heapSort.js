class Heap {
    constructor(arr) {
        this.arr = arr;
        this.N = this.arr.length - 1;
    }
    exch(i, j) {
        let arr = this.arr;
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    less(i , j) {
        let arr = this.arr;
        if (arr[i] < arr[j])
            return true;
        return false;
    }
    size() {
        return this.N;
    }
    heapArray() {
        let res = [];
        let arr = this.arr;
        let N = this.N;
        for (let i = 0; i < N; i++)
            res[i] = arr[i + 1];
        return res;
    }
    swim(i) {
        let parent;
        let arr = this.arr;
        while(i > 1) {
            parent = Math.floor(i / 2);
            if (arr[parent] < arr[i])
                this.exch(i, parent);
            i = parent;
        }
    }
    sink(i) {
        let child;
        let arr = this.arr;
        let N = this.N;
        while((child = i * 2) <= N) {
            if (child < N && arr[child] < arr[child + 1])
                child++;
            if (arr[i] < arr[child])
                this.exch(i, child);
            i = child;
        }
    }
    insert(item) {
        let arr = this.arr;
        let N = ++this.N;
        arr[N] = item;
        this.swim(N);
    }
    delMax() {
        if (!this.N)
            return null;
        let N = this.N--;
        this.exch(1, N);
        this.sink(1);
        return this.arr[N];
    }
    order() {
        let begin = Math.floor(this.N / 2);
        for (let i = begin; i > 0; i--)
            this.sink(i);
    }
    sort() {
        let N = this.N;
        this.order();
        for (let i = 2; i <= N; i++) {
            this.exch(1, this.N--);
            this.sink(1);
        }
        return this.arr;
    }
}

let h = new Heap([0, 5, 4, 3, 2, 1]);
h.insert(6);
console.log(h.heapArray());