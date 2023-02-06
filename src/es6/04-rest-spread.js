// arrays desctructuring
let fruits = ['Apple', 'Banana'];
let [a,b] = fruits;
console.log(fruits[0],fruits[1]);
console.log(a,b);

// Object destructuring
let user = {username: 'Oscar', age: 34};
let {username,age} = user; // Has to be same name
console.log(user.username,user.age);
console.log(username,age);


// spread operator
let person = {name:'Oscar', age: 28};
let country = 'MX';
let data = { id: 1, ...person, country};
console.log(data);

// rest
function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}
sum(1,1,2,3);

