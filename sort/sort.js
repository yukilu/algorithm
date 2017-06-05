function less(x, y) {
    if (x < y)
        return true;
    return false;
}

function exch(a, i, j) {
    let t = a[i];
    a[i] = a[j];
    a[j] = t;
}

function rand(m, n) {
    return Math.floor(Math.random() * (n - m) + m);
}

function gArr(m, n, size) {
    let arr = [];
    for (let i = 0; i < size; i++)
        arr[i] = rand(m, n);
    return arr;
}

function selection(arr) {
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        let min = i;
        for (let j = i + 1; j < length; j++)
            if (less(arr[j], arr[min]))
                min = j;
        exch(arr, i, min);
    }
}

function insertion(arr) {
    let length = arr.length;
    for (let i = 1; i < length; i++)
        for (let j = i; j > 0 && less(arr[j], arr[j - 1]); j--)
            exch(arr, j, j - 1);
}

function shell(arr) {
    let length = arr.length;
    let h = 1;
    while(h < length / 3)
        h = 3 * h + 1;
    while(h > 0) {
        for (let i = h; i < length; i++)
            for (let j = i; j >= h && less(arr[j], arr[j - h]); j -= h)
                exch(arr, j, j - h);
        h = Math.floor(h / 3);
    }
}

function merge(arr, lo, mid, hi, aux) {
    let i = lo;
    let j = mid + 1;
    for (let k = lo; k <= hi; k++)
        aux[k] = arr[k];
    for (let k = lo; k <= hi; k++) {
        if (i > mid)
            arr[k] = aux[j++];
        else if (j > hi)
            arr[k] = aux[i++];
        else if (less(aux[i], aux[j]))
            arr[k] = aux[i++];
        else
            arr[k] = aux[j++];
    }
}

function mergeSort(arr, lo, hi, aux) {
    if (lo >= hi)
        return;
    let mid = lo + Math.floor((hi - lo) / 2);
    mergeSort(arr, lo, mid, aux);
    mergeSort(arr, mid + 1, hi, aux);
    merge(arr, lo, mid, hi, aux);
}

function mSort(arr) {
    let aux = [];
    mergeSort(arr, 0, arr.length - 1, aux);
}

function partition(arr, lo, hi) {
    let v = arr[lo];
    let i = lo;
    let j = hi + 1;
    while(true) {
        while(less(arr[++i], v))
            if (i === hi)
                break;
        while(less(v, arr[--j]))
            continue;
        if (i >= j)
            break;
        exch(arr, i, j);
    }
    exch(arr, lo, j);
    return j;
}

function quickSort(arr, lo, hi) {
    if (lo >= hi)
        return;
    let j = partition(arr, lo, hi);
    quickSort(arr, lo, j - 1);
    quickSort(arr, j + 1, hi);
}

function qSort(arr) {
    quickSort(arr, 0, arr.length - 1);
}

function quick3waySort(arr, lo, hi) {
    if (lo >= hi)
        return;
    let v = arr[lo];
    let lt = lo;
    let i = lo + 1;
    let gt = hi;
    while(i <= gt) {
        if (arr[i] < v)
            exch(arr, i++, lt++);
        else if (arr[i] > v)
            exch(arr, i, gt--);
        else i++;
    }
    quick3waySort(arr, lo, lt - 1);
    quick3waySort(arr, gt + 1, hi);
}

function q3wSort(arr) {
    quick3waySort(arr, 0, arr.length - 1);
}


let arr = gArr(0, 500, 100);
console.log(arr.toString());
q3wSort(arr);
console.log(arr.toString());