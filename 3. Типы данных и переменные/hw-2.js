// Базовый

function getLength(a) {
    if (a === null || a === undefined) {
        console.log(0);
        return;
    }
    if (a.length === undefined) {
        console.log(0);
        return;
    }
    console.log(a.length)
}

