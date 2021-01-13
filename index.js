let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
    return drivers.push(name);
}

function destructivelyPrependDriver(name) {
    return drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
    drivers.pop();
    return drivers;
}

function destructivelyRemoveFirstDriver() {
    drivers.shift();
    return drivers;
}

function appendDriver(name) {
    return [...drivers, name];
}

function prependDriver(name) {
    return [name, ...drivers];
}

function removeLastDriver() {
    return drivers.slice(0, drivers.length - 1);
}

function removeFirstDriver() {
    return drivers.slice(1);
}
