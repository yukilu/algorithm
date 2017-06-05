function hanoi(n, origin, assist, target) {
    if (!n) return;
    hanoi(n-1, origin, target, assist);
    move(n, origin, target);
    hanoi(n-1, assist, origin, target);
}

function move(n, origin, target) {
    console.log('move ' + n + ' from ' + origin + ' to ' + target);
}

hanoi(5, 'origin', 'assist', 'target');