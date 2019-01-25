function NWD(a, b) {
    while (a != b) {
        if (a > b) {
            a = a - b
        } else {
            b = b - a;
        };
    };
    return a;
};

NWD(12, 15);

function greatestShareDivisor(a, b) {
    var nwd = 0;
    while (nwd < a && a < b) {
        nwd = nwd + 1;
        a = a / nwd;
        b = b / nwd;
    };
    return nwd;
}

