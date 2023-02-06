function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Hola', "Adios", "Oscar", "Ana"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);


function* getId() {
    var i = 1;
    while (true) {
        i=i+1;
        yield i;
    }
}
const get = getId();
console.log(get.next().value);
console.log(get.next().value);
console.log(get.next().value);
